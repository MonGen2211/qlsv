import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profilefic: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "student",

      // 1 là học sinh
      // 2 là giảng viên
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
