import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    teacher_code: {
      type: String,
      required: true,
      unique: true,
    },

    department: {
      type: String,
      required: true,
    },

    degree: {
      type: String,
      required: true,
    },

    // danh phận
    identity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Teacher = mongoose.model("Teacher", teacherSchema);
