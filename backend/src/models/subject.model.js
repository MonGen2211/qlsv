import mongoose, { Mongoose } from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    subject_code: {
      type: String,
      unique: true,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    number_of_credit: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Subject = mongoose.model("Subject", subjectSchema)
