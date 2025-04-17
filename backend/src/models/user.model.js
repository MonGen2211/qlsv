import mongoose from "mongoose";

const option = {
  discriminatorKey: "role", // thêm trường 'role' để phân biệt loại user
  collection: "users", // tất cả user/teacher được lưu vào cùng một collection
  timestamps: true,
};

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
  },
  option
);

export const User = mongoose.model("User", userSchema);
