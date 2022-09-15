import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  headerImage: {
    type: String,
  },
  likes: {
    type: String,
  },
  saved: {
    type: String,
  }
}, { versionKey: false, timestamps: true });

const Blogpost = model('blogpost', PostSchema);

export default Blogpost;
