import express from "express";
import {
  login,
  logout,
  signup,
  updateProfilefic,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// users
router.post("/", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/", protectRoute, updateProfilefic);

export default router;
