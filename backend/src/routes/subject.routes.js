import express from "express";
import {
  createSubject,
  deleteSubject,
  getSubject,
  updateSubject,
} from "../controllers/subject.controller.js";
import { protectRoute, requireAdmin } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/", protectRoute, requireAdmin, createSubject);
router.get("/", protectRoute, getSubject);
router.put("/:id", protectRoute, requireAdmin, updateSubject);
router.delete("/:id", protectRoute, requireAdmin, deleteSubject);

export default router;
