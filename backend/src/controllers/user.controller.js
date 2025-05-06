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
    console.log("Error in signup contronller", error.message);
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
      return res.status(400).json({ message: "Please fill all provided" });
    }

    // check email
    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Email doses not have in database" });
    }

    const isPassword = bcrypt.compareSync(password, user.password);
    if (!isPassword) {
      return res.status(400).json({ message: "password was wrong" });
    }

    generateToken(user._id, res);
    return res.status(200).json({ user: user });
  } catch (error) {
    console.log("Error in Login controller:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    console.log("Error in Logout Controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const user = req.user;

    console.log(1);
    if (!user) {
      res.status(403).json({ message: "Urthorized" });
    }

    res.status(200).json({ user: user });
  } catch (error) {
    console.log("Error in checkAuth Controller: ", error.message);
    res.status(500).json({ message: "Iternal Server Error" });
  }
};

export const getUsers = async (req, res) => {
  const role = req.params.role;
  try {
    const page = parseInt(req.query.page) || 1;
    const item_per_page = parseInt(req.query.item_per_page) || 2;

    const skip = (page - 1) * item_per_page;

    const [users, total] = await Promise.all([
      User.find({ role: role }).skip(skip).limit(item_per_page),
      User.countDocuments({ role: role }),
    ]);
    const totalPages = Math.ceil(total / item_per_page);

    res.status(200).json({
      user: users,
      pagination: {
        total,
        totalPages,
        currentPage: page,
        item_per_page,
      },
    });
  } catch (error) {
    console.log("Error in getUser Controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  const { id: userId } = req.params;
  const data = req.body;
  try {
    const updateUser = await Student.findByIdAndUpdate(userId, data, {
      new: true,
    });

    res.status(200).json({ user: updateUser });
  } catch (error) {
    console.log("Error in updateStudent Controller: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id: userId } = req.params;
  try {
    await User.findByIdAndDelete(userId, {
      new: true,
    });

    res.json(200).json({ message: "Delete User Successfully" });
  } catch (error) {
    console.log("Error in deleteUser: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
