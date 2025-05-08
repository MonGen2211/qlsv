import express from "express";
import {
  protectRoute,
  requireAdmin,
  requireStudent,
  requireStudentOrAdmin,
  requireTeacher,
} from "../middleware/protectRoute.js";
import {
  createCourseRegister,
  DeleteCourseRegister,
  getCourseRegister,
  updateCourseScore,
  updateStatusCourse,
} from "../controllers/courseRegister.controller.js";

const router = express.Router();

router.post("/", protectRoute, requireStudent, createCourseRegister);
router.get("/", protectRoute, getCourseRegister);
router.put("/:id", protectRoute, requireAdmin, updateStatusCourse);
router.put("/updateScore/:id", protectRoute, requireTeacher, updateCourseScore);
router.delete(
  "/:id",
  protectRoute,
  requireStudentOrAdmin,
  DeleteCourseRegister
);

export default router;
