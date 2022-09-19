/* eslint-disable import/no-anonymous-default-export */
import crypto from 'crypto';
import connectDB from '../../../server/config/database';
import { createUser } from '../../../server/users/user.services';
import { sendMailSendGrid } from '../../../server/config/email'

const BASE_URL = process.env.LOCAL_URL;

export default async (req, res) => {
  await connectDB();
  const userData = req.body;

  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ '[ERROR]': 'Method not allowed' });
    }

    const hash = crypto.createHash('sha256')
      .update(userData.email)
      .digest('hex');

    userData.passwordResetToken = hash;
    userData.passwordResetExpires = Date.now() + 3_600_000 * 24;
    const user = await createUser(userData);

    const message = {
      from: 'Juan de Bloggie <dhruva0108@gmail.com>',
      to: user.email,
      subject: 'Activate your Account',
      template_id: 'd-df1380cc1da24d33ab9f925072819e6f',
      dynamic_template_data: {
        firstName: user.firstName,
        url: `${BASE_URL}/verify-account/${hash}`
      }
    }

    await sendMailSendGrid(message);

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ Error: error.message })
  }
};
