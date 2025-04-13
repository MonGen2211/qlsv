import express from "express";
import {
  createUser,
  getAllUsers,
  updateProfilefic,
} from "../controllers/user.controller.js";

const router = express.Router();

// GET All USER
router.get("/getAllUsers", getAllUsers);
// CREATE ACCOUNT
router.post("/", createUser);
// update Profilefic
// router.put("/update-profilefic", updateProfilefic);
export default router;
