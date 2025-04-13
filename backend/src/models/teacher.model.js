import mongoose from "mongoose";

const teacherSchema = mongoose.Schema(
  {
    teacher_code: {
      type: String,
      required: true,
      unique: true,
    },

    department: {
      type: String,
      required: true,
    },

    degree: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Teacher = mongoose.model("Teacher", teacherSchema);
