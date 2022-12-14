import 'dotenv/config.js';
import  mongoose from 'mongoose';

async function connectDB() {
  const URI = process.env.MONGO_URI;

  if (!process.env.MONGO_URI) {
    throw new Error('Invalid environment variable: "MONGODB_URI"')
  }

  try {
   await mongoose.connect(URI);
  } catch (error) {
    console.error('Error trying to connect with DB', error);
    process.exit(1);
  }
}

export default connectDB;
