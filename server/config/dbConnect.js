import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

export const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected:', connection.connection.host);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); 
  }
};


