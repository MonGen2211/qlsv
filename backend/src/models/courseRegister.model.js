import mongoose from "mongoose";

const courseRegisterSchema = new mongoose.Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    course_code: {
      type: String,
      ref: "Course",
      required: true,
    },

    score: {
      type: Number,
      default: "",
    },

    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CourseRegister = mongoose.model(
  "CourseRegister",
  courseRegisterSchema
);
