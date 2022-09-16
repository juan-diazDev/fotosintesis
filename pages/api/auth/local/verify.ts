import { findOneUser } from "../../../../server/users/user.services";
import { signToken } from "../../../../server/auth/local/auth.services";
import connectDB from '../../../../server/config/database';

export async function verifyAccountHandler(req, res) {
  await connectDB();

  const { token } = req.params;

  try {
    const user = await findOneUser({ passwordResetToken: token });

    if (!user) {
      return res.status(404).json({ message: 'Invalid token' });
    }

    if (Date.now() > user.passwordResetExpires) {
      return res.status(404).json({ message: 'Token expired' });
    }

    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    user.isVerified = true;

    await user.save();

    const jwtoken = signToken({ email: user.email });

    return res.status(200).json({
      token: jwtoken,
      profile: {
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      }, // bring profile
      message: 'Account activated',
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
