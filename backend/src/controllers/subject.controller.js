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
    const page = parseInt(req.query.page) || 1;
    const item_per_page = parseInt(req.query.item_per_page) || 4;

    const skip = (page - 1) * item_per_page;

    if (data) {
      const [subjects, total] = await Promise.all([
        Subject.find({
          $or: [
            { name: { $regex: new RegExp(data, "i") } },
            { subject_code: data },
          ],
        })
          .skip(skip)
          .limit(item_per_page),
        Subject.countDocuments(),
      ]);
      Subject.countDocuments();

      const totalPages = Math.ceil(total / item_per_page);

      return res.status(200).json({
        data: subjects,
        pagination: {
          total,
          totalPages,
          currentPage: page,
          item_per_page,
        },
      });
    }

    const [subjects, total] = await Promise.all([
      Subject.find().skip(skip).limit(item_per_page),
      Subject.countDocuments(),
    ]);

    const totalPages = Math.ceil(total / item_per_page);

    if (page > totalPages) {
      res.status(400).json({ message: "Do not have any subject on this page" });
    }
    Subject.countDocuments();
    return res.status(200).json({
      data: subjects,
      pagination: {
        total,
        totalPages,
        currentPage: page,
        item_per_page,
      },
    });
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
