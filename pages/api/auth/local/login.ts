import bcrypt from 'bcryptjs';
import { findUserByEmail } from "../../../../server/users/user.services";
import { signToken } from "../../../../server/auth/local/auth.services";

async function loginUserHandler(req, res) {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ failed: 'All fields are required' });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'Email or password incorrect' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({ message: 'Email or password incorrect' });
    }

    const token = await signToken({ email: user.email });

    return res.status(200).json({
      token,
      profile: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
      } }); // bring profile
  } catch (error) {
    return res.status(500).json({ '[Error]': error.message });
  }
}

export default loginUserHandler;
