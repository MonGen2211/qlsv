import mongoose from "mongoose";
import { subjectCode } from "../lib/util.js";
import { Subject } from "../models/subject.model.js";

export const createSubject = async (req, res) => {
  const { name, number_of_credit } = req.body;
  try {
    if (!name || !number_of_credit) {
      res.status(400).json({ message: "Please field all Provided" });
    }
    const subject = await Subject.findOne({ name });
    if (subject) {
      res.status(400).json({ message: "Subject has been created" });
    }

    const subject_code = await subjectCode();

    const newSubject = new Subject({
      subject_code,
      name,
      number_of_credit,
    });

    await newSubject.save();

    res.status(201).json(newSubject);
  } catch (error) {
    console.log("Error in createSubject controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getSubject = async (req, res) => {
  const data = req.query.data;
  try {
    if (data) {
      const subjects = await Subject.find({
        $or: [
          { name: { $regex: new RegExp(data, "i") } },
          { subject_code: data },
        ],
      });

      res.status(200).json(subjects);
    }

    const subjects = await Subject.find({});
    res.status(200).json(subjects);
  } catch (error) {
    console.log("Error in getSubject controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteSubject = async (req, res) => {
  const { id: subjectId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(subjectId)) {
    return res.status(400).json({
      message: "Invalid Department ID",
    });
  }
  try {
    const subject = await Subject.findById(subjectId);
    if (!subject) {
      return res.status(400).json({ message: "Subject not Found" });
    }

    await Subject.findByIdAndDelete(subjectId);
    res.status(200).json({ message: "Delete Subject Successfully" });
  } catch (error) {
    console.log("Error in deleteSubject controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
