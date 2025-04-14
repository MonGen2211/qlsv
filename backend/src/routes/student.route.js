import express from "express";
import {
  getAllStudents,
  getStudent,
} from "../controllers/student.controller.js";

const router = express.Router();

router.get("/getAllStudents", getAllStudents);
// getStudent with mssv
router.get("/getStudents/:search", getStudent);

export default router;
