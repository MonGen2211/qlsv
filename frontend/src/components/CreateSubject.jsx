import React, { useEffect, useState } from "react";

const CreateSubject = () => {
  const [isOpenModalCreate, setisOpenModalCreate] = useState(false);

  useEffect(() => {
    setisOpenModalCreate(false);
  }, []);

  return (
    <>
      <div className="flex  w-full max-md:block">
        <button
          type="button"
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-2xl px-5 py-2.5 
        me-2 mb-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 max-md:mb-5"
          onClick={() => setisOpenModalCreate(true)}
        >
          Create Subject
        </button>
        <div
          class={`${
            isOpenModalCreate === true ? "fixed" : "hidden"
          } inset-0 bg-gray-500/75 transition-opacity`}
          aria-hidden="true"
        ></div>

        <div
          className={`fixed inset-0 z-50 items-center justify-center bg-opacity-10 ${
            isOpenModalCreate === true ? "flex" : "hidden"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Nút đóng modal */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setisOpenModalCreate(false)}
            >
              &times;
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Create Subject
            </h2>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="subject_name"
                  className="block  font-medium text-gray-700 text-lg"
                >
                  Subject Name
                </label>
                <input
                  type="text"
                  id="subject_name"
                  name="subject_name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Gen"
                />
              </div>

              <div>
                <label
                  htmlFor="subject_credit"
                  className="block font-medium text-gray-700 text-lg"
                >
                  Subject Credits
                </label>
                <input
                  type="text"
                  id="subject_credit"
                  name="subject_credit"
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder=""
                />
              </div>

              <div>
                <label
                  htmlFor="subject_class"
                  className="block  font-medium text-gray-700 mb-1 text-lg"
                >
                  SUBJECT CLASS
                </label>
                <select
                  id="subject_class"
                  name="subject_class"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm 
               focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">-- SUBJECT CLASS --</option>
                  <option value="DCT120C1">DCT120C1</option>
                  <option value="DCT120C2">DCT120C2</option>
                  <option value="DCT120C3">DCT120C3</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Create Student
              </button>
            </form>
          </div>
        </div>

        <div className="w-full max-w-md md:ml-auto max-md:mr-auto max-md:mb-5 max-md:max-w-xs">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSubject;
