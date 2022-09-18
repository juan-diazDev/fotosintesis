/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../server/config/database';
import { createBlogpost } from '../../../server/blogpost/blogpost.services';

export default async (req, res) => {
  await connectDB();

  const spaceData = req.body;
  // const { _id } = req.user;

  const _id = '632474a0f48585c7244a50ca';

  try {
    const post = await createBlogpost({ ...spaceData, writer: _id });

    if (req.method !== 'POST') {
      return res.status(405).json({'[ERROR]': 'Method not allowed'});
    }

    return res.status(200).json({ post })
  } catch (error) {
    return res.status(400).json({ Error: error.message})
  }
}
