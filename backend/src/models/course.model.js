import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  student_code: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },

  subject_code: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },

  teacher_code: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },

  score: {
    type: Number,
    default: "",
  },
});

export const Course = mongoose.model("Course", courseSchema);
