import mongoose from "mongoose";
import { User } from "./user.model.js";

const userSchema = new mongoose.Schema({
  major: {
    type: String,
    default: "",
  },

  student_code: {
    type: String,
    unique: true,
    required: true,
  },

  class: {
    type: String,
    required: true,
  },

  birthday: {
    type: String,
    default: "01/01/2025",
  },

  gender: {
    type: String,
    default: "",
  },

  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department", // Tham chiếu tới collection Department
    required: true,
  },
});

export const Student = User.discriminator("Student", userSchema);
