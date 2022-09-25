import connectDB from '../../../server/config/database';
import { verfyToken } from '../../../server/auth/local/auth.services';
import { findUserByEmail } from '../../../server/users/user.services';

async function meUserHandler(req, res) {
  await connectDB();

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

    const { user } = req;
    const result = await findUserByEmail(user.email);
    return res.json(result);
  } catch (error) {
    return res.status(500).json(error.message);
  }

}

export default meUserHandler;
