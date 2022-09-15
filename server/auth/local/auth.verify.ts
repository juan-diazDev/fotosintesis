
import { findOneUser } from "../../users/user.services";
import { signToken } from "./auth.services";

export async function verifyAccountHandler(req, res) {
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
    user.isActive = true;

    await user.save();

    const jwtoken = signToken({ email: user.email });

    return res.status(200).json({
      token: jwtoken,
      profile: user.profile,
      message: 'Account activated',
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
