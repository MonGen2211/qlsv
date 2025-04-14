import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  number_of_credit: {
    type: Number,
    required: true,
  },
});
export const Subject = mongoose.model("Subject", subjectSchema);
