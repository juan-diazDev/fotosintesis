import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  location: {
    country: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  blogpost: [{
    type: Schema.Types.ObjectId,
    ref: 'blogpost',
    required: true,
  }],
  isVerified: {
    type: Boolean,
    default: false,
  },
  followers: [{
    type: Schema.Types.ObjectId,
    ref: "user",
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: "user",
  }],
  passwordResetToken: String,
  passwordResetExpires: Date,
}, { versionKey: false, timestamps: true });

const User = model('user', UserSchema);

export default User;