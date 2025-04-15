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
    unique: true,
  },

  teacher_code: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
    unique: true,
  },

  score: {
    type: Number,
    default: "",
  },
});

export const Course = mongoose.model("Course", courseSchema);

// album song
//

// Vũ Học toán rời rạc Thầy Hoà   DCT120C1
// Đạt học toán rời rạc Thầy Hoà
// class_id
// 2 _id course

// LADY GAGA

// BAD ROMANCE ALBUM XYZ

// JUST DANCE

// CLASS = 0

// Vũ toán rời rạc thầy Hoà course => Kiểm tra xem course có class chưa => class lưu id course
// Đạt học toán rời rạc Thầy Hoà => Kiểm tra xem course có class chưa => có class sẵn => push _id course
