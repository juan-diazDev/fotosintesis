/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../server/config/database';
import { getAllUsers } from '../../../server/users/user.services';

export default async (req, res) => {
  await connectDB();
  try {
    const user = await getAllUsers();

    if (req.method !== 'GET') {
      return res.status(405).json({'[ERROR]': 'Method not allowed'});
    }

    return res.status(200).json(user);
  } catch (error) {
    throw new Error
  }
}
