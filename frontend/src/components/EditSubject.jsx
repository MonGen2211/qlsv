import React, { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const EditSubject = ({ subject, pagination }) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const { editSubject } = useAuthStore();
  const page = pagination.currentPage;
  useEffect(() => {
    setIsOpenModalEdit(false);
  }, []);

  const [formData, setFormData] = useState({
    name: subject.name,
    number_of_credit: subject.number_of_credit,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    editSubject(subject._id, formData, page);
    setIsOpenModalEdit(false);
  };

  return (
    <>
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
            Edit Subject
          </h2>

          {/* Form */}
          <form className="space-y-4 text-left">
            <div>
              <label
                htmlFor="name"
                className="block  font-medium text-gray-700 text-xl"
              >
                Subject Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500
                 focus:border-blue-500"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="subject_credit"
                className="block font-medium text-gray-700 text-xl"
              >
                Subject Credit
              </label>
              <input
                type="text"
                id="number_of_credit"
                name="number_of_credit"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500
                focus:border-blue-500"
                value={formData.number_of_credit}
                onChange={(e) =>
                  setFormData({ ...formData, number_of_credit: e.target.value })
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

export default EditSubject;
