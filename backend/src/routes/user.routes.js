import express from "express";
import {
  checkAuth,
  getUsers,
  login,
  logout,
  signup,
  updateProfilefic,
  updateUser,
} from "../controllers/user.controller.js";
import { protectRoute, requireStudent } from "../middleware/protectRoute.js";

const router = express.Router();

// users
router.post("/", signup);
router.post("/login", login);
router.get("/:role", protectRoute, getUsers);
router.post("/logout", logout);

router.put("/", protectRoute, updateProfilefic);

router.put("/:id", protectRoute, updateUser);
router.get("/checkAuth", protectRoute, checkAuth);

export default router;
