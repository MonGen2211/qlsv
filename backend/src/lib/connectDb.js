import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to database successfully");
  } catch (error) {
    console.log("Error in connectDb", error);
  }
};
