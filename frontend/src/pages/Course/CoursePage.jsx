import React, { useEffect } from "react";
import CreateCourse from "../../components/CreateCourse";
import Footer from "../../components/Footer";
import { useCourseStore } from "../../store/useCourseStore";
import RegisterCourse from "../../components/RegisterCourse";
import { useAuthStore } from "../../store/useAuthStore";
import EditCourseScore from "../../components/EditCourseScore";
import DeleteCourse from "../../components/DeleteCourse";

const CoursePage = ({ authUser }) => {
  const { getCourses, courses, isGettingCourses } = useCourseStore();

  console.log();

  const {
    getSubjects,
    subjects,
    getTeachers,
    teachers,
    isGetTeacher,
    isGetSubject,
  } = useAuthStore();

  useEffect(() => {
    getCourses();
    getSubjects();
    getTeachers();
  }, []);

  if (isGettingCourses && isGetTeacher && isGetSubject)
    return (
      <div className="flex items-center justify-center h-screen">
        <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>
    );

  return (
    <div className="m-10">
      {/* createStudentPage */}
      <CreateCourse subjects={subjects} teachers={teachers} />
      {/* table */}
      <table className="table-auto w-full  text-center mb-5 ">
        <thead className="bg-[#6699ff] text-white h-16">
          <tr>
            <th>#No</th>
            <th className="max-md:hidden">Course ID</th>
            <th>Subject NAME</th>
            <th>Teacher Name</th>
            <th>Amount</th>
            <th>realistic amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className="h-16  font-semibold ">
              <td>{index + 1}</td>
              <td className="max-md:hidden">{course.course_code}</td>
              <td className="max-md:hidden">{course.subject_name.name}</td>
              <td>{course.teacher_name?.fullname}</td>
              <td>{course.amount} students</td>
              <td>2</td>

              <td className="relative h-16 w-auto p-0 text-center align-middle">
                <div className="hidden sm:flex gap-2 justify-center items-center">
                  {authUser.role === "Admin" ? (
                    <>
                      <EditCourseScore />
                      <DeleteCourse />
                    </>
                  ) : (
                    <RegisterCourse course={course} />
                  )}
                </div>

                <div className="absolute inset-0 flex items-center justify-center sm:hidden">
                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                    aria-controls="mobile-action"
                    aria-expanded="false"
                  >
                    <svg
                      className="block size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>

                    <svg
                      className="hidden size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <span className="font-semibold block mb-5">Ammount of Student: 4</span>
      {/* Pagination */}
      {/* <Pagination /> */}

      <Footer />
    </div>
  );
};

export default CoursePage;
