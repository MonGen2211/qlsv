import React, { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const EditStudent = ({ student }) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);

  const { editStudent } = useAuthStore();

  const [formData, setformData] = useState({
    fullname: student.fullname,
    birthday: student.birthday,
    gender: student.gender,
  });
  useEffect(() => {
    setIsOpenModalEdit(false);
  }, []);

  const handleSubmit = () => {
    editStudent(formData, student._id);
  };

  return (
    <div>
      <button
        type="button"
        className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-700"
        onClick={() => setIsOpenModalEdit(true)}
      >
        Edit
      </button>
      <div
        class={`${
          isOpenModalEdit === true ? "fixed" : "hidden"
        } inset-0 bg-gray-500/75 transition-opacity`}
        aria-hidden="true"
      ></div>
      <div
        className={`fixed inset-0 z-50 items-center justify-center flex ${
          isOpenModalEdit === true ? "flex" : "hidden"
        }`}
      >
        <div className="bg-[#ffffff]  rounded-lg shadow-lg w-full max-w-md p-6 relative">
          {/* Nút đóng modal */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            onClick={() => setIsOpenModalEdit(false)}
          >
            &times;
          </button>

          {/* Header */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Edit Student
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label
                htmlFor="fullName"
                className="block  font-medium text-gray-700 text-xl"
              >
                fullName
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullname}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Gen"
                onChange={(e) =>
                  setformData({ ...formData, fullname: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="birthday"
                className="block font-medium text-gray-700 text-xl"
              >
                D.O.B
              </label>
              <input
                type="date"
                id="birthday"
                value={formData.birthday}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) =>
                  setformData({ ...formData, birthday: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block  font-medium text-gray-700 mb-1 text-xl"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm 
               focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={formData.gender}
                onChange={(e) =>
                  setformData({ ...formData, gender: e.target.value })
                }
              >
                <option value="">-- Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
            >
              Update Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
