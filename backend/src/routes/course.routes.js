import express from "express";
import {
  createCourse,
  deleteCourse,
  getCourse,
  updateCourse,
} from "../controllers/course.controller.js";
import { protectRoute, requireAdmin } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/", protectRoute, requireAdmin, createCourse);
router.get("/", protectRoute, getCourse);
router.delete("/:id", protectRoute, requireAdmin, deleteCourse);
router.put("/:id", protectRoute, requireAdmin, updateCourse);
export default router;
