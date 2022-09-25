import Blogpost from "./blogpost.model";

export function getAllBlogposts() {
  return Blogpost.find({})
  .populate({ path: 'writer', model: 'User' });
}

export function getSingleBlogpost(id) {
  return Blogpost.findById(id)
  .populate('writer');
}

export function findOneBlogpost(query) {
  return Blogpost.findOne(query);
}

export function createBlogpost(blogpost) {
  return Blogpost.create(blogpost);
}

export function updateBlogpost(id, blogpost) {
  return Blogpost.findByIdAndUpdate(id, blogpost, { new: true });
}

export function deleteBlogpost(id) {
  return Blogpost.findByIdAndRemove(id);
}
