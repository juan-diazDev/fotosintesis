/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../server/config/database';
import { getAllBlogposts } from '../../../server/blogpost/blogpost.services';

export default async (req, res) => {
  connectDB();

  try {
    const user = await getAllBlogposts();

    if (req.method !== 'GET') {
      return res.status(405).json({'[ERROR]': 'Method not allowed'});
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ Error: error.message})
  }
}
