import express from "express";
import {
  protectRoute,
  requireAdmin,
  requireStudent,
  requireStudentOrAdmin,
} from "../middleware/protectRoute.js";
import {
  createCourseRegister,
  DeleteCourseRegister,
  updateStatusCourse,
} from "../controllers/courseRegister.controller.js";

const router = express.Router();

router.post("/", protectRoute, requireStudent, createCourseRegister);
router.put("/:id", protectRoute, requireAdmin, updateStatusCourse);
router.delete(
  "/:id",
  protectRoute,
  requireStudentOrAdmin,
  DeleteCourseRegister
);

export default router;
