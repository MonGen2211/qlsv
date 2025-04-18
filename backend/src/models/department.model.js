import mongoose from "mongoose";
import { User } from "./user.model.js";

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

export const Department = User.discriminator(
  "teacher.department",
  departmentSchema
);
