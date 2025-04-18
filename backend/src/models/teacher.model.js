import mongoose from "mongoose";
import { User } from "./user.model.js";

const teacherSchema = new mongoose.Schema({
  teacher_code: {
    type: String,
    required: true,
  },

  degree: {
    type: String,
    required: true,
  },

  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department", // Tham chiếu tới collection Department
    required: true,
  },
});

export const Teacher = User.discriminator("Teacher", teacherSchema);
