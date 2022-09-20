import bcrypt from 'bcryptjs';
import { getSingleUser, updateUser } from '../../../../server/users/user.services';
import connectDB from '../../../../server/config/database';

async function changePassword(req, res) {
  await connectDB();

  try {
    const { id } = req.params;
    const { oldPassword } = req.body;
    const newPassword = req.body.password;

    const user = await getSingleUser({ _id: id });

    if (!user) {
      return res.status(404).json({ message: 'Password incorrect' });
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(404).json({ message: 'Password incorrect' });
    }

    if (oldPassword === newPassword) {
      return res.status(400).json({ message: 'New password not allowed' });
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const userPassword = await updateUser({ _id: id, password }, { new: true });
    return res.status(200).json({ status: true, data: userPassword });
  } catch (error) {
    return res.status(400).json({ status: false, error: 'Error Occured' });
  }
}

export default changePassword;
