/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../server/config/database';
import { verfyToken } from '../../../server/auth/local/auth.services';
import { findUserByEmail } from '../../../server/users/user.services';
import { createBlogpost } from '../../../server/blogpost/blogpost.services';

export default async (req, res) => {
  await connectDB();

  if (req.method !== 'POST') {
    return res.status(405).json({'[ERROR]': 'Method not allowed'});
  }

  try {
    const authHeader = req.headers?.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = await verfyToken(token);
    if (!decoded) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { email } = decoded;
    const User = await findUserByEmail(email);

    if (!User) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = User;
    const spaceData = req.body;
    const { _id } = req.user;
    const post = await createBlogpost({ ...spaceData, writer: _id });

    return res.status(200).json({ post })
  } catch (error) {
    return res.status(400).json({ Error: error.message})
  }
}
