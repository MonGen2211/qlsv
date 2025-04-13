import React from "react";
import { Link } from "react-router-dom";
import CreateSubject from "../../components/CreateSubject";
import EditSubject from "../../components/EditSubject";
import DeleteSubject from "../../components/DeleteSubject";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";

const SubjectPage = () => {
  return (
    <div className="m-10">
      {/* createStudentPage */}
      <CreateSubject />
      {/* table */}
      <table className="table-auto w-full  text-center mb-5 ">
        <thead className="bg-[#6699ff] text-white h-16">
          <tr>
            <th>SUBJECT ID</th>
            <th>SUBJECT NAME</th>
            <th className="max-md:hidden">SUBJECT CREDITS</th>
            <th>SUBJECT CLASS AVALIABLE</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-16  font-semibold ">
            <td>1</td>
            <td>Cấu Trúc Rời Rạc</td>
            <td className="max-md:hidden">4</td>
            <td>DCT120C1</td>
            <td className="relative h-16 w-auto p-0 text-center align-middle">
              <div className="hidden sm:flex gap-2 justify-center items-center">
                <EditSubject />
                <DeleteSubject />
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
            <td>Cấu Trúc Rời Rạc</td>
            <td className="max-md:hidden">4</td>
            <td>DCT120C1</td>
            <td className="relative h-16 w-auto p-0 text-center align-middle">
              <div className="hidden sm:flex gap-2 justify-center items-center">
                <EditSubject />
                <DeleteSubject />
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
          </tr>{" "}
          <tr className="h-16  font-semibold ">
            <td>1</td>
            <td>Cấu Trúc Rời Rạc</td>
            <td className="max-md:hidden">4</td>
            <td>DCT120C1</td>
            <td className="relative h-16 w-auto p-0 text-center align-middle">
              <div className="hidden sm:flex gap-2 justify-center items-center">
                <EditSubject />
                <DeleteSubject />
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
          </tr>{" "}
          <tr className="h-16  font-semibold ">
            <td>1</td>
            <td>Cấu Trúc Rời Rạc</td>
            <td className="max-md:hidden">4</td>
            <td>DCT120C1</td>
            <td className="relative h-16 w-auto p-0 text-center align-middle">
              <div className="hidden sm:flex gap-2 justify-center items-center">
                <EditSubject />
                <DeleteSubject />
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
          </tr>{" "}
          <tr className="h-16  font-semibold ">
            <td>1</td>
            <td>Cấu Trúc Rời Rạc</td>
            <td className="max-md:hidden">4</td>
            <td>DCT120C1</td>
            <td className="relative h-16 w-auto p-0 text-center align-middle">
              <div className="hidden sm:flex gap-2 justify-center items-center">
                <EditSubject />
                <DeleteSubject />
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

      <span className="font-semibold block mb-5">Ammount of Subject: 5</span>
      {/* Pagination */}
      <Pagination />

      <Footer />
    </div>
  );
};

export default SubjectPage;
