import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(400).json({ message: "You need to Login first" });
    }
    // check với userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    const user = await User.findById(userId);
    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute Middleware: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const requireTeacher = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(400).json({ message: "You need to Login first" });
    }
    // check với userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    const user = await User.findById(userId);
    if (user.role !== "teacher") {
      res.status(400).json({
        message:
          "You are a Student. Please comeback later if you will be a Teacher",
      });
    }
  } catch (error) {
    console.log("Error in protectRoute Middleware: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const requireAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(400).json({ message: "You need to Login first" });
    }
    // check với userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    const user = await User.findById(userId);
    if (user.role !== "admin") {
      res.status(400).json({
        message:
          "You are a Student. Please comeback later if you will be a Teacher",
      });
    }
  } catch (error) {
    console.log("Error in protectRoute Middleware: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
