import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
  headerImage: {
    type: String,
    default: 'https://res.cloudinary.com/juanito-om/image/upload/v1664065543/Fotos%C3%ADntesis/_DSK9648_ctkxp1.jpg',
  },
  saved: {
    type: String,
  },
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
}, { versionKey: false, timestamps: true });

export default models.Blogpost || model('Blogpost', PostSchema);
