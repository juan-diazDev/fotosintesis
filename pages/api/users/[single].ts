/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../server/config/database';
import { updateUser } from '../../../server/users/user.services';

export default async (req, res) => {
  await connectDB();
  console.log('hola');

  const id = req?.query?.single;
  const userData = req.body;
  try {
    const user = await updateUser(id, userData);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
