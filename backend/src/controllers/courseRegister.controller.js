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
          student_code: user.student_code,
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
      student_code: user.student_code,
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

    res.status(200).json({
      message: "Update CourseRegister successfully",
    });
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

export const getCourseRegister = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // data = phan tấn quốc
    const item_per_page = parseInt(req.query.item_per_page) || 2; // data = phan tấn quốc
    const skip = (page - 1) * item_per_page;

    const [courseRegisters, total] = await Promise.all([
      CourseRegister.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "student_code",
            foreignField: "student_code",
            as: "studentInfo",
          },
        },
        {
          $lookup: {
            from: "courses",
            localField: "course_code",
            foreignField: "course_code",
            as: "courseInfo",
          },
        },

        {
          $unwind: "$studentInfo",
        },
        {
          $unwind: "$courseInfo",
        },

        {
          $lookup: {
            from: "users",
            localField: "courseInfo.teacher_code",
            foreignField: "teacher_code",
            as: "teacherInfo",
          },
        },

        {
          $lookup: {
            from: "subjects",
            localField: "courseInfo.subject_code",
            foreignField: "subject_code",
            as: "subject_info",
          },
        },

        // 3️⃣ Unwind để biến array -> object

        { $unwind: "$teacherInfo" },

        { $unwind: "$subject_info" },

        {
          $match: {},
        },

        // 👇 Thêm skip & limit sau khi đã unwind xong
        { $skip: skip },
        { $limit: item_per_page },

        {
          $project: {
            _id: 1,
            "studentInfo.fullname": 1,
            "courseInfo.course_code": 1,
            score: 1,
            "courseInfo.amount": 1,
            status: 1,
            "teacherInfo.fullname": 1,
            "teacherInfo.email": 1,
            "subject_info.name": 1,
            "subject_info.number_of_credit": 1,
          },
        },
      ]),

      CourseRegister.countDocuments(),
    ]);

    console.log(courseRegisters);

    const totalPages = Math.ceil(total / item_per_page);

    res.status(200).json({
      courseRegisters: courseRegisters,
      pagination: {
        total,
        totalPages,
        currentPage: page,
        item_per_page,
      },
    });
  } catch (error) {
    console.log("Error in getCorseRegister controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateCourseScore = async (req, res) => {
  const { id: courseRegisterScore } = req.params;
  try {
    const data = req.body;
    await CourseRegister.findByIdAndUpdate(courseRegisterScore, data, {
      new: true,
    });

    res.status(200).json({ message: "Update Score Successfully" });
  } catch (error) {
    console.log("Error in updateCourseScore controller: ", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
