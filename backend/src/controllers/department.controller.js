import mongoose from "mongoose";
import { Department } from "../models/department.model.js";
import { User } from "../models/user.model.js";

export const createDepartment = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      res.status(400).json({ message: "Please fill all provided" });
    }

    const checkName = await Department.findOne({ name });
    if (checkName) {
      res.status(400).json({ message: "Department has already exists" });
    }

    const newDepartment = new Department({
      name,
    });
    await newDepartment.save();

    res.status(200).json(newDepartment);
  } catch (error) {
    console.log("Error in createDepartment Controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getDepartment = async (req, res) => {
  try {
    const departments = await Department.find({});

    res.status(200).json(departments);
  } catch (error) {
    console.log("Error in createDepartment Controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteDepartment = async (req, res) => {
  const { id: deparmentId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(deparmentId)) {
    return res.status(400).json({
      message: "Invalid Department ID",
    });
  }
  try {
    const department = await Department.findById(deparmentId);

    if (!department) {
      return res.status(400).json({ message: "Department not Found" });
    }
    const count = await User.countDocuments({ department: department._id });
    if (count > 0) {
      return res.status(400).json({
        message: `You must have delete ${count} student or teacher study in this department`,
      });
    }
    await Department.findByIdAndDelete(deparmentId);
    res.status(200).json({ message: "Delete Department Successfully" });
  } catch (error) {
    console.log("Error in createDepartment Controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
