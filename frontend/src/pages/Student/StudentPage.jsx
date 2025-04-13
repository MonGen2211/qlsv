import React from "react";
import { Link } from "react-router-dom";
import CreateStudent from "../../components/CreateStudent";
import EditStudent from "../../components/EditStudent";
import DeleteStudent from "../../components/DeleteStudent";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";

const StudentPage = () => {
  return (
    <div className="m-10">
      {/* createStudentPage */}
      <CreateStudent />
      {/* table */}
      <table className="table-auto w-full  text-center mb-5 ">
        <thead className="bg-[#6699ff] text-white h-16">
          <tr>
            <th>STUDENT ID</th>
            <th>STUDENT NAME</th>
            <th className="max-md:hidden">D.O.B</th>
            <th>GENDER</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-16  font-semibold ">
            <td>1</td>
            <td>Hồ Sơn Vũ</td>
            <td className="max-md:hidden">22/11/2002</td>
            <td>Male</td>
            <td className="relative h-16 w-auto p-0 text-center align-middle">
              <div className="hidden sm:flex gap-2 justify-center items-center">
                <EditStudent />
                <DeleteStudent />
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
          <tr className="h-16  font-semibold ">
            <td>1</td>
            <td>Hồ Sơn Vũ</td>
            <td className="max-md:hidden">22/11/2002</td>
            <td>Male</td>
            <td className="relative h-16 w-auto p-0 text-center align-middle">
              <div className="hidden sm:flex gap-2 justify-center items-center">
                <EditStudent />
                <DeleteStudent />
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
          <tr className="h-16  font-semibold ">
            <td>1</td>
            <td>Hồ Sơn Vũ</td>
            <td className="max-md:hidden">22/11/2002</td>
            <td>Male</td>
            <td className="relative h-16 w-auto p-0 text-center align-middle">
              <div className="hidden sm:flex gap-2 justify-center items-center">
                <EditStudent />
                <DeleteStudent />
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
          <tr className="h-16  font-semibold ">
            <td>1</td>
            <td>Hồ Sơn Vũ</td>
            <td className="max-md:hidden">22/11/2002</td>
            <td>Male</td>
            <td className="relative h-16 w-auto p-0 text-center align-middle">
              <div className="hidden sm:flex gap-2 justify-center items-center">
                <EditStudent />
                <DeleteStudent />
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
          <tr className="h-16  font-semibold ">
            <td>1</td>
            <td>Hồ Sơn Vũ</td>
            <td className="max-md:hidden">22/11/2002</td>
            <td>Male</td>
            <td className="relative h-16 w-auto p-0 text-center align-middle">
              <div className="hidden sm:flex gap-2 justify-center items-center">
                <EditStudent />
                <DeleteStudent />
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
        </tbody>
      </table>

      <span className="font-semibold block mb-5">Ammount of Student: 4</span>
      {/* Pagination */}
      <Pagination />

      <Footer />
    </div>
  );
};

export default StudentPage;
