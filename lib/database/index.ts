"use server"
import mongoose from "mongoose"

const NEXT_PUBLIC_MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

export const connectToDatabase = async () => {
  if(!NEXT_PUBLIC_MONGODB_URI) throw new Error('NEXT_PUBLIC_MONGODB_URI is missing');

  return await mongoose.connect(NEXT_PUBLIC_MONGODB_URI, {
    dbName: 'evently',
    bufferCommands: false,
  });
}