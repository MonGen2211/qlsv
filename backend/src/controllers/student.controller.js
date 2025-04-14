import { Student } from "../models/student.model.js";

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    console.log(students);
  } catch (error) {
    console.log("Error in getAllStudents Controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getStudent = async (req, res) => {
  const { search } = req.params;
  try {
    // *! Logic true but Code False
    // const student = await Student.find({
    //   $or: [{ student_code: search }, { class: search }],
    // }).populate({
    //   path: "identity",
    //   match: { fullname: search },
    // });

    // * Logic true but Code true

    const student = await Student.aggregate([
      // 1. Join bảng "users" vào trường "identity"
      {
        $lookup: {
          from: "users",
          localField: "identity",
          foreignField: "_id",
          as: "identity",
        },
      },
      // 2. Tách identity từ mảng ra thành object (nếu mỗi student chỉ có 1 identity)

      {
        $unwind: "$identity",
      },

      // 3. Lọc theo điều kiện OR
      {
        $match: {
          $or: [
            { student_code: search }, // student_code khớp
            { class: search }, // hoặc class khớp
            { "identity.fullname": { $regex: search, $options: "i" } }, // hoặc fullname khớp (dùng regex cho tiện)
          ],
        },
      },
    ]);

    res.status(200).json(student);
  } catch (error) {
    console.log("Error in getStudents controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
