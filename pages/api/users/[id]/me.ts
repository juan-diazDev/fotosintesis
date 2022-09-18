import connectDB from '../../../../server/config/database';
import { getSingleUser } from '../../../../server/users/user.services';

async function getSingleUserHandler(req, res) {
  await connectDB();
  const { id } = req.query;

  try {
    if(req.method !== 'GET') {
      return res.status(404).json({ '[ERROR]': 'Wrong Method' })
    }

    const user = await getSingleUser(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const { profile } = user;
    return res.json(profile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({'[ERROR]': error.message });
  }
}

export default getSingleUserHandler;
