import mongoose from "mongoose";
import { User } from "./user.model.js";

const adminSchema = new mongoose.Schema({
  admin_code: {
    type: String,
    required: true,
  },
});

export const Admin = User.discriminator("Admin", adminSchema);
