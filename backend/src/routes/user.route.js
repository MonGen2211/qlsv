import express from "express";
import {
  createUser,
  getAllUsers,
  login,
  logout,
  updateProfilefic,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// GET All USER
router.get("/getAllUsers", getAllUsers);
// CREATE ACCOUNT
router.post("/", createUser);
// login
router.post("/login", login);
// logout
router.post("/logout", logout);
// update Profilefic
router.put("/update-profilefic", protectRoute, updateProfilefic);
export default router;
