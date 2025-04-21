import jwt from "jsonwebtoken";
import cloudinary from "../lib/cloudinary.js";
import {
  adminCode,
  generateToken,
  getRandomClass,
  studentCode,
  teacherCode,
} from "../lib/util.js";
import { Student } from "../models/student.model.js";
import { Teacher } from "../models/teacher.model.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { Admin } from "../models/admin.model.js";
import { Department } from "../models/department.model.js";

export const signup = async (req, res) => {
  const { email, fullname, password, role, department, degree } = req.body;
  try {
    // check valid

    // check email exists
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "Email has already exists" });
    }
    // check length password
    if (password.length < 6) {
      res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const identity = role || "Student";
    if (identity === "Student") {
      const student_code = await studentCode();
      const Class = getRandomClass();
      const newStudent = new Student({
        fullname,
        email,
        password: hashPassword,
        student_code,
        class: Class,
        department,
      });

      await newStudent.save();

      generateToken(newStudent._id, res);
      res.status(201).json(newStudent);
    }

    if (identity === "Teacher") {
      const teacher_code = await teacherCode();

      const newTeacher = new Teacher({
        fullname,
        email,
        password: hashPassword,
        teacher_code,
        department,
        degree,
        department,
      });

      await newTeacher.save();

      generateToken(newTeacher._id, res);
      res.status(201).json(newTeacher);
    }

    if (identity === "Admin") {
      const admin_code = await adminCode();

      const newAdmin = new Admin({
        fullname,
        email,
        password: hashPassword,
        admin_code,
      });

      await newAdmin.save();

      generateToken(newAdmin._id, res);
      res.status(201).json(newAdmin);
    }
  } catch (error) {
    console.log("Error in signup contronller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProfilefic = async (req, res) => {
  const { profilefic } = req.body;
  try {
    const userId = req.user._id.toString();

    const uploadImage = await cloudinary.uploader.upload(profilefic);
    const responseImg = uploadImage.secure_url;

    const updateUser = await User.findByIdAndUpdate(
      userId,
      { profilefic: responseImg },
      { new: true }
    );

    res.status(200).json(updateUser);
  } catch (error) {
    console.log("Error in updateProfilefic controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).json({ message: "Please fill all provided" });
    }

    // check email
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(400).json({ message: "Email doses not have in database" });
    }

    const isPassword = bcrypt.compareSync(password, user.password);
    if (!isPassword) {
      res.status(400).json({ message: "password was wrong" });
    }

    generateToken(user._id, res);
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in Login controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logou Successfully" });
  } catch (error) {
    console.log("Error in Logout Controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
