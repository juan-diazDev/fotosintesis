import Blogpost from "./blogpost.model";

export function getAllBlogposts() {
  return Blogpost.find({});
}

export function getSingleBlogpost(id) {
  return Blogpost.findById(id)
  .populate('writer');
}

export function findOneBlogpost(query) {
  return Blogpost.findOne(query);
}

export function createBlogpost(Blogpost) {
  return Blogpost.create(Blogpost);
}

export function updateBlogpost(id, Blogpost) {
  return Blogpost.findByIdAndUpdate(id, Blogpost, { new: true });
}

export function deleteBlogpost(id) {
  return Blogpost.findByIdAndRemove(id);
}
