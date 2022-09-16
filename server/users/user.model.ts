import { Schema, model } from 'mongoose';
const bcrypt = require('bcryptjs');

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
  description: {
    type: String,
    trim: true,
  },
  shortDescription: {
    type: String,
    trim: true,
  },
  location: {
    country: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
  },
  blogpost: [{
    type: Schema.Types.ObjectId,
    ref: 'blogpost',
  }],
  favs: [{
    type: Schema.Types.ObjectId,
    ref: 'blogpost',
  }],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }],
  followings: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }],
  isVerified: {
    type: Boolean,
    default: false,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
}, { versionKey: false, timestamps: true });

UserSchema.virtual('profile').get(function () {
  const {
    firstName, lastName, email,
  } = this;

  return {
    firstName,
    lastName,
    email,
  };
});

UserSchema.methods.comparePassword = async function comparePassword(password, next) {
  const user = this;

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch;
  } catch (error) {
    next(error);
    return false;
  }
};

const User = model('user', UserSchema);

export default User;
