import mongoose from "mongoose";

const subjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  number_of_credit: {
    type: Number,
    required: true,
  },
});
