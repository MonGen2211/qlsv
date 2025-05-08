import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CreateStudent from "../../components/CreateStudent";
import EditStudent from "../../components/EditStudent";
import DeleteStudent from "../../components/DeleteStudent";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";
import { useCourseRegisterStore } from "../../store/useCourseRegisterStore";
import UpdateStatusCourseRegister from "../../components/UpdateStatusCourseRegister";
import DeleteCourseRegister from "../../components/DeleteCourseRegister";
import UpdateScore from "../../components/UpdateScore";

const CourseRegisterPage = ({ authUser }) => {
  const {
    courseRegisters,
    getCourseRegister,
    gettingCourseRegister,
    pagination,
  } = useCourseRegisterStore();
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;

  useEffect(() => {
    getCourseRegister(page);
  }, [page]);

  if (!gettingCourseRegister && !courseRegisters)
    return (
      <div className="flex items-center justify-center h-screen">
        <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>
    );

  return (
    <div className="m-10">
      {/* createCourseRegisterPage */}
      <CreateStudent />
      {/* table */}
      {gettingCourseRegister ? (
        <div className="flex items-center justify-center h-screen">
          <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
        </div>
      ) : (
        <>
          <table className="table-auto w-full text-center mb-5 border-separate [border-spacing:0_10px]">
            <thead className="bg-[#6699ff] text-white h-16">
              <tr>
                <th>Course Number</th>
                <th>Course Code</th>
                <th>Amount of Student</th>
                <th>Teacher Name</th>
                <th>Teacher Email</th>
                <th>Subject NAME</th>
                <th>Number_of_credit</th>

                <th
                  className={`${authUser.role === "Teacher" ? "hidden" : ""}`}
                >
                  Status
                </th>
                <th>Action</th>
                <th className="max-md:hidden">Score</th>
              </tr>
            </thead>
            <tbody>
              {courseRegisters.map((courseRegister, index) => (
                <tr key={index} className=" w-full table-auto  ">
                  <td>{index + 1}</td>
                  <td>{courseRegister.courseInfo.course_code}</td>
                  <td className="max-md:hidden">
                    {courseRegister.courseInfo.amount}
                  </td>
                  <td>{courseRegister.teacherInfo.fullname}</td>
                  <td>{courseRegister.teacherInfo.email}</td>
                  <td>{courseRegister.subject_info.name}</td>
                  <td>{courseRegister.subject_info.number_of_credit}</td>
                  <td
                    className={`${
                      courseRegister.status === "Pending"
                        ? "bg-warning w-20 gap-2"
                        : "bg-success w-20 gap-2"
                    } ${authUser.role === "Teacher" ? "hidden" : ""}`}
                  >
                    {courseRegister.status}
                  </td>
                  <td className="relative h-16 w-auto p-0 text-center align-middle">
                    <div className="hidden sm:flex gap-2 justify-center items-center">
                      {authUser.role === "Student" ? (
                        <DeleteCourseRegister
                          courseRegister={courseRegister}
                          pagination={pagination}
                        />
                      ) : null}

                      {authUser.role === "Teacher" ? (
                        <UpdateScore
                          courseRegister={courseRegister}
                          pagination={pagination}
                        />
                      ) : null}

                      {authUser.role === "Admin" ? (
                        <>
                          <UpdateStatusCourseRegister
                            courseRegister={courseRegister}
                            pagination={pagination}
                          />

                          <DeleteCourseRegister
                            courseRegister={courseRegister}
                            pagination={pagination}
                          />
                        </>
                      ) : null}

                      {/* <EditStudent /> */}
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
                  <td>
                    {courseRegister.score === null
                      ? "N/A"
                      : courseRegister.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <span className="font-semibold block mb-5">
            Ammount of Student: {courseRegisters.length} /
          </span>
          {/* Pagination */}
          <Pagination pagination={pagination} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default CourseRegisterPage;
