/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../server/config/database';
import { getSingleUser } from '../../../server/users/user.services';

export default async (req, res) => {
  await connectDB();

  const id = req;
  try {
    const user = await getSingleUser(id);

    if (!user) {
      return res.status(404).json({ message: 'Space not found' });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
