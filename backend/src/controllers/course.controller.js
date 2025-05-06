import { getCourseCode } from "../lib/util.js";
import { Course } from "../models/course.model.js";
import { Subject } from "../models/subject.model.js";
import { Teacher } from "../models/teacher.model.js";

export const createCourse = async (req, res) => {
  const { teacher_code, subject_code } = req.body;
  try {
    if (!teacher_code || !subject_code) {
      return res.status(400).json({ message: "Please fill all Provided" });
    }

    const course = await Course.findOne({
      $and: [{ teacher_code: teacher_code }, { subject_code: subject_code }],
    });
    if (course?.course_code) {
      return res
        .status(400)
        .json({ message: "This Course has been created" }, course);
    }

    const amount = 50;
    // get course_code
    const course_code = await getCourseCode();
    const newCourse = new Course({
      teacher_code,
      subject_code,
      amount,
      course_code,
    });

    await newCourse.save();

    res.status(201).json({
      newCourse: newCourse,
      message: "Course has been created Successfully",
    });
  } catch (error) {
    console.log("Error in createCourse Controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCourse = async (req, res) => {
  const data = req.query.data;

  try {
    const page = parseInt(req.query.page) || 1; // data = phan tấn quốc
    const item_per_page = parseInt(req.query.page) || 2; // data = phan tấn quốc
    const skip = (page - 1) * item_per_page;

    if (data) {
      const teacher = (await Teacher.find({ teacher_code: data })) || null;
      const subject = (await Subject.find({ subject_code: data })) || null;

      // todo: try teacher.?_id in line 56

      const [courses, total] = await Promise.all([
        Course.find({
          $or: [
            { teacher_code: teacher?.teacher_code },
            { subject_code: subject?.subject_code },
          ],
        })
          .skip(skip)
          .limit(item_per_page),

        Course.countDocuments(),
      ]);

      if (teacher === null && subject === null) {
        res.status(400).json({ message: "No course have teacher or subject " });
      }

      const totalPages = Math.ceil(total / item_per_page);
      return res.status(200).json({
        data: courses,
        pagination: {
          total,
          totalPages,
          currentPage: page,
          item_per_page,
        },
      });
    }

    const [courses, total] = await Promise.all([
      Course.aggregate([
        // Join sang subject
        {
          $lookup: {
            from: "subjects",
            localField: "subject_code",
            foreignField: "subject_code",
            as: "subject_info",
          },
        },

        // Join sang teacher
        {
          $lookup: {
            from: "users",
            localField: "teacher_code",
            foreignField: "teacher_code",
            as: "teacher_info",
          },
        },

        // 3️⃣ Unwind để biến array -> object
        {
          $unwind: {
            path: "$subject_info",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: "$teacher_info",
            preserveNullAndEmptyArrays: true,
          },
        },

        // 4️⃣ Project để format lại bảng gọn
        {
          $project: {
            _id: 0,
            course_code: 1,
            subject_code: 1,
            subject_name: "$subject_info",
            amount: 1,
            teacher_code: 1,
            teacher_name: "$teacher_info",
          },
        },
      ]),
      Course.countDocuments(),
    ]);

    const totalPages = Math.ceil(total / item_per_page);

    res.status(200).json({
      courses: courses,
      pagination: {
        total,
        totalPages,
        currentPage: page,
        item_per_page,
      },
    });
  } catch (error) {
    console.log("Error in getCourse controller: ", error.message);
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
