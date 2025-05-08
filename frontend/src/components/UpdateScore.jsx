import React, { useEffect, useState } from "react";
import { useCourseRegisterStore } from "../store/useCourseRegisterStore";

const UpdateScore = ({ courseRegister, pagination }) => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const { updateCourseRegisterScore } = useCourseRegisterStore();

  const page = pagination.currentPage;
  const [formData, setFormData] = useState({
    score: courseRegister.score,
  });
  useEffect(() => {
    setisOpenModal(false);
  }, []);

  const handleSubmit = () => {
    updateCourseRegisterScore(courseRegister._id, formData, page);
    setisOpenModal(false);
  };
  return (
    <>
      <button
        type="button"
        className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-700"
        onClick={() => setisOpenModal(true)}
      >
        Update Score
      </button>
      <div
        class={`${
          isOpenModal === true ? "fixed" : "hidden"
        } inset-0 bg-gray-500/75 transition-opacity`}
        aria-hidden="true"
      ></div>
      <div
        className={`fixed inset-0 z-50 items-center justify-center flex ${
          isOpenModal === true ? "flex" : "hidden"
        }`}
      >
        <div className="bg-[#ffffff]  rounded-lg shadow-lg w-full max-w-md p-6 relative">
          {/* Nút đóng modal */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            onClick={() => setisOpenModal(false)}
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
                htmlFor="name"
                className="block  font-medium text-gray-700 text-xl"
              >
                Score
              </label>
              <input
                type="text"
                id="score"
                name="score"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500
               focus:border-blue-500"
                value={formData.score}
                onChange={(e) =>
                  setFormData({ ...formData, score: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              onClick={(e) => handleSubmit(e)}
            >
              Update Subject
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateScore;
