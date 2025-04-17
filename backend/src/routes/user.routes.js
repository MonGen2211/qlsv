import express from "express";
import { signup, updateProfilefic } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// users
router.post("/", signup);
router.put("/", protectRoute, updateProfilefic);

export default router;
