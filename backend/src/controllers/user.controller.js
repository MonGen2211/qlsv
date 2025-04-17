import { generateToken, getRandomClass, studentCode } from "../lib/util.js";
import { Student } from "../models/student.model.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { email, fullname, password, role } = req.body;
  try {
    // check valid
    if (!email || !fullname || !password) {
      res.status(400).json({ message: "Please fill full provided" });
    }

    // check email exists
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "Email has already exists" });
    }
    // check length password
    if (password.length < 6) {
      res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    // get student_code
    const student_code = await studentCode();
    console.log(student_code);
    const Class = getRandomClass();
    const identity = role || "student";
    if (identity === "student") {
      const newStudent = new Student({
        fullname,
        email,
        password: hashPassword,
        student_code,
        class: Class,
      });

      await newStudent.save();

      generateToken(newStudent._id, res);
      res.status(201).json(newStudent);
    }
  } catch (error) {
    console.log("Error in signup contronller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProfilefic = async (req, res) => {
  const { profilefic } = req.body;
  try {
    // const updateUser =
  } catch (error) {
    console.log("Error in updateProfilefic controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
