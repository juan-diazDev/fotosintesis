import { Schema, model, models} from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    default: "Happy",
  },
  lastName: {
    type: String,
    trim: true,
    default: "user",
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

UserSchema.pre('save', async function save(next) {
  const user = this;

  try {
    if (!user.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
});

export default models.User || model('User', UserSchema);
