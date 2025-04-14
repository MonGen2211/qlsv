import jwt from "jsonwebtoken";
import { Student } from "../models/student.model.js";
import { Teacher } from "../models/teacher.model.js";

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

export const getStudentCode = async (req, res) => {
  try {
    const student = await Student.find({});
    const student_code = 3120411175 + student.length;
    return student_code;
  } catch (error) {
    console.log("Error in login Controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getTeacherCode = async (req, res) => {
  try {
    const teacher = await Teacher.find({});
    const teacher_code = 2000 + teacher.length;
    return teacher_code;
  } catch (error) {
    console.log("Error in login Controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
