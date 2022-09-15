import jsonToken from 'jsonwebtoken';
import { findUserByEmail } from '../../users/user.services';

export function signToken(payload) {
  const token = jsonToken.sign(
    payload,
    process.env.JSW_KET_WORD,
    { expiresIn: '1h' },
  );
  return token;
}

export function verfyToken(token) {
  try {
    const payload = jsonToken.verify(token, process.env.JSW_KET_WORD);
    return payload;
  } catch {
    return null;
  }
}

export async function isAuthenticated(req, res, next) {
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
  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  req.user = user;

  next();
  return true;
}
