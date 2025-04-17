import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
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
  const users = await User.find();
  const student_code = 3120411178 + Number(users.length);
  return student_code.toString();
};

export const getRandomClass = () => {
  const classes = ["DCT120C1", "DCT120C2", "DCT120C3"];
  const randomIndex = Math.floor(Math.random() * classes.length);
  return classes[randomIndex];
};
