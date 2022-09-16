import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface UserDocument extends Document {
  name: string;
  email: string;
  password?: string;
  profile?: string;
  role: string;
  comparePassword(password: string): Promise<boolean>;
  createdAt: Date;
  updatedAt: Date;
}

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
    firstName,
    lastName,
    email,
    username,
  } = this;

  return {
    firstName,
    lastName,
    email,
    username,
  };
});

UserSchema.methods.comparePassword = async function comparePassword(this: UserDocument, Userpassword: string, next: Function) {
  const user = this;

  try {
    if (user.password) {
      const isMatch = await bcrypt.compare(Userpassword, user.password);

      return isMatch;
    }

    return false;
  } catch (error) {
    next(error);
    return false;
  }
};

const User = model('user', UserSchema);

export default User;
