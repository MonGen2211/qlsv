import express from "express";
import {
  createDepartment,
  deleteDepartment,
  getDepartment,
} from "../controllers/department.controller.js";
import { protectRoute, requireAdmin } from "../middleware/protectRoute.js";

const router = express.Router();

// create department
router.post("/", protectRoute, requireAdmin, createDepartment);
router.get("/", getDepartment);
router.delete("/:id", protectRoute, requireAdmin, deleteDepartment);

export default router;
