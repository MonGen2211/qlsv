import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const decode = jwt.decode(token, process.env.JWT_SECRET);
    const userId = decode.userId;

    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({ message: "You need to login first" });
    }
    req.user = user;

    next();
  } catch (error) {
    console.log("Error protectRoute middleware: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const requireAdmin = async (req, res, next) => {
  try {
    const user = req.user;

    if (user.role !== "Admin") {
      res.status(403).json({ message: "Unauthornized - You must be a Admin" });
    }

    next();
  } catch (error) {
    console.log("Error requireAdmin middleware: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
