import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { Subject } from "../models/subject.model.js";
import { Course } from "../models/course.model.js";
export const generateToken = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    samSite: "strict",
    process: process.env.NODE_ENV || "development",
  });
  return token;
};

export const studentCode = async () => {
  const users = await User.find({ role: "Student" });
  const student_code = 3120411178 + Number(users.length);
  return student_code.toString();
};

export const teacherCode = async (req, res) => {
  const users = await User.find({ role: "Teacher" });
  const teacher_code = 2000 + Number(users.length);
  return teacher_code.toString();
};

export const adminCode = async (req, res) => {
  const users = await User.find({ role: "Admin" });
  const admin_code = 3000 + Number(users.length);
  return admin_code.toString();
};

export const subjectCode = async (req, res) => {
  const subjects = await Subject.find({});

  return subjects.length.toString();
};

export const getCourseCode = async (req, res) => {
  const courses = await Course.find({});
  const courses_code = 1000 + Number(courses.length);
  return courses_code.toString();
};

export const getRandomClass = () => {
  const classes = ["DCT120C1", "DCT120C2", "DCT120C3"];
  const randomIndex = Math.floor(Math.random() * classes.length);
  return classes[randomIndex];
};

export const checkProvide = (data) => {
  console.log(req.body);
  if (!email || !fullname || !password) {
    res.status(400).json({ message: "Please fill full provided" });
  }
};
