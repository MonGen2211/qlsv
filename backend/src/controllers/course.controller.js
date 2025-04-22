import { getCourseCode } from "../lib/util.js";
import { Course } from "../models/course.model.js";
import { Subject } from "../models/subject.model.js";
import { Teacher } from "../models/teacher.model.js";

export const createCourse = async (req, res) => {
  const { teacher_code, subject_code, amount } = req.body;
  try {
    if (!teacher_code || !subject_code || !amount) {
      return res.status(400).json({ message: "Please fill all Provided" });
    }

    const course = await Course.findOne({
      $and: [{ teacher_code: teacher_code }, { subject_code: subject_code }],
    });
    if (course.course_code) {
      return res
        .status(400)
        .json({ message: "This Course has been created" }, course);
    }

    // get course_code
    const course_code = await getCourseCode();
    const newCourse = new Course({
      teacher_code,
      subject_code,
      amount,
      course_code,
    });

    await newCourse.save();

    res.status(201).json(newCourse);
  } catch (error) {
    console.log("Error in createCourse Controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCourse = async (req, res) => {
  const data = req.query.data;
  try {
    if (data) {
      const teacher = (await Teacher.findById(data)) || null;
      const subject = (await Subject.findById(data)) || null;

      const teacher_id = teacher !== null ? teacher._id : null;
      const subject_id = subject !== null ? subject._id : null;

      if (teacher === null && subject === null) {
        res.status(400).json({ message: "No course have teacher or subject " });
      }

      const course = await Course.find({
        $or: [{ teacher_code: teacher_id }, { subject_code: subject_id }],
      })
        .populate("teacher_code", "-_id")
        .populate("subject_code", "-_id");

      res.status(200).json(course);
    }

    const courses = await Course.find({})
      .populate("teacher_code", "-_id")
      .populate("subject_code", "-_id");
    res.status(200).json(courses);
  } catch (error) {
    console.log("Error in getCourse controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteCourse = async (req, res) => {
  const { id: idCourse } = req.params;
  try {
    const course = await Course.findById(idCourse);
    if (!course) {
      res.status(400).json({ message: "Do not have course in database" });
    }

    await Course.findByIdAndDelete(idCourse);
    res.status(200).json({ message: "Deleted Course Succeessfully" });
  } catch (error) {
    console.log("Error in deleteCourse Controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateCourse = async (req, res) => {
  const data = req.body;
  const { id: idCourse } = req.params;
  try {
    const teacher = await Teacher.findById(data.teacher_code);
    const subject = await Teacher.findById(data.subject_code);
    if (teacher === null && subject === null) {
      res
        .status(400)
        .json({ message: "Teacher or Subject Do not have in database" });
    }

    const newCourse = await Course.findByIdAndUpdate(idCourse, data, {
      new: true,
    })
      .populate("teacher_code", "-_id")
      .populate("subject_code", "-_id");

    res.status(200).json(newCourse);
  } catch (error) {
    console.log("Error in updateCourse controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
