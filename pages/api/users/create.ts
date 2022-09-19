/* eslint-disable import/no-anonymous-default-export */
import crypto from 'crypto';
import connectDB from '../../../server/config/database';
import { createUser } from '../../../server/users/user.services';

export default async (req, res) => {
  await connectDB();
  const userData = req.body;

  try {
    const hash = crypto.createHash('sha256')
      .update(userData.email)
      .digest('hex');

    userData.passwordResetToken = hash;
    userData.passwordResetExpires = Date.now() + 3_600_000 * 24;
    const user = await createUser(userData);

    if (req.method !== 'POST') {
      return res.status(405).json({ '[ERROR]': 'Method not allowed' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ Error: error.message })
  }
};
