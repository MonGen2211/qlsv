import express from "express";
import {
  createSubject,
  deleteSubject,
  getSubject,
} from "../controllers/subject.controller.js";
import { protectRoute, requireAdmin } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/", protectRoute, requireAdmin, createSubject);
router.get("/", protectRoute, getSubject);
router.delete("/:id", protectRoute, requireAdmin, deleteSubject);

export default router;
