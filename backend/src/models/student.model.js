import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    student_code: {
      type: String,
      required: true,
      unique: true,
    },

    major: {
      type: String,
      required: true,
    },

    class: {
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

export const Student = mongoose.Schema("Student", studentSchema);
