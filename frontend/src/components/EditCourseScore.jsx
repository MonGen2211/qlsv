import React, { useEffect, useState } from "react";

const EditCourseScore = () => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);

  useEffect(() => {
    setIsOpenModalEdit(false);
  }, []);

  return (
    <>
      <button
        type="button"
        className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-700"
        onClick={() => setIsOpenModalEdit(true)}
      >
        Update Score
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
            Update Score
          </h2>

          {/* Form */}
          <form className="space-y-4 text-left">
            <div>
              <label
                htmlFor="subject_name"
                className="block  font-medium text-gray-700 text-xl"
              >
                Subject Name
              </label>
              <input
                type="text"
                name="student_name"
                value="Hồ Sơn Vũ"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500
                 text-gray-400 italic"
              />
            </div>

            <div>
              <label
                htmlFor="subject_credit"
                className="block font-medium text-gray-700 text-xl"
              >
                Subject Name
              </label>
              <input
                type="text"
                name="subject_name"
                value="Cấu trúc rời rạc"
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500
                 text-gray-400 italic"
              />
            </div>

            <div>
              <label
                htmlFor="subject_class"
                className="block  font-medium text-gray-700 mb-1 text-xl"
              >
                Score
              </label>
              <input
                type="text"
                name="subject_name"
                value=""
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500
                 "
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
            >
              Update Score
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCourseScore;
