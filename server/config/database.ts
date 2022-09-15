import 'dotenv/config.js';
import  mongoose from 'mongoose';

function connectDB() {
  const URI = process.env.MONGO_URI;

  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid environment variable: "MONGODB_URI"')
  }

  try {
    mongoose.connect(URI);

    console.log('Connected to DB');
  } catch (error) {
    console.error('Error trying to connect with DB', error);
    process.exit(1);
  }
}

export default connectDB;