import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    teacher_code: {
      type: String,
      ref: "Teacher", // Tham chiếu tới collection Department
      required: true,
    },

    subject_code: {
      type: String,
      ref: "Subject",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    course_code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model("Course", courseSchema);
