import { Schema, model, models } from 'mongoose';

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
  },
  writer: {
    type: String,
    // type: Schema.Types.ObjectId,
    require: true,
  },
}, { versionKey: false, timestamps: true });

export default models.Blogpost || model('Blogpost', PostSchema);
