import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // console.log("Connect Database SuccessFully");
  } catch (error) {
    console.log("Error in connect Db:", error);
  }
};
