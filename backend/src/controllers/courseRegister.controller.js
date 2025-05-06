import { Course } from "../models/course.model.js";
import { CourseRegister } from "../models/courseRegister.model.js";

export const createCourseRegister = async (req, res) => {
  const { course_code } = req.body;
  try {
    const user = req.user;
    if (!course_code) {
      res.status(400).json({ message: "Please fill all provided" });
    }

    const course = await Course.findOne({ course_code: course_code });
    if (course === null) {
      res.status(400).json({ message: "Do not have course in database" });
    }

    const isCheckkingCourseRegister = await CourseRegister.findOne({
      $and: [
        {
          student_id: user._id,
        },
        {
          course_code: course_code,
        },
      ],
    });

    if (isCheckkingCourseRegister) {
      return res.status(400).json({
        message:
          "You has registered course before! Please choose another course",
      });
    }

    const newCourseRegister = new CourseRegister({
      course_code,
      student_id: user._id,
      status: "Pending",
    });

    await newCourseRegister.save();
    res.status(201).json({
      message: "Subscribe Course Successfully",
    });
  } catch (error) {
    console.log("Error in createCourseRegister controller: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateStatusCourse = async (req, res) => {
  const { id: idRegisterCourse } = req.params;
  try {
    const updateRegisterCourse = await CourseRegister.findByIdAndUpdate(
      idRegisterCourse,
      { status: "success" },
      { new: true }
    );

    retures.status(200).json(updateRegisterCourse);
  } catch (error) {
    console.log("Error in updateStatusCourse controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const DeleteCourseRegister = async (req, res) => {
  const { id: courseRegisterId } = req.params;
  try {
    await CourseRegister.findByIdAndDelete(courseRegisterId);

    res.status(200).json({ message: "Delete CourseRegister Successfully" });
  } catch (error) {
    console.log("Error in DeleteCourseRegister controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
