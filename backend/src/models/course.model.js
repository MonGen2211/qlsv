import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  student_code: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },

  subject_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },

  number_of_credit: {
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
