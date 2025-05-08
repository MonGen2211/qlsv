import React, { useEffect, useState } from "react";
import { useCourseRegisterStore } from "../store/useCourseRegisterStore";

const UpdateStatusCourseRegister = ({ courseRegister, pagination }) => {
  const page = pagination.currentPage;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const { updatingStatusCourseRegister } = useCourseRegisterStore();
  const handleSubmit = () => {
    const id = courseRegister._id;
    updatingStatusCourseRegister(id, page);
    setIsOpenModal(false);
  };

  useEffect(() => {
    setIsOpenModal(false);
  }, []);

  return (
    <div>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-700 "
        onClick={() => setIsOpenModal(true)}
      >
        Update Course
      </button>

      <div
        className={`${isOpenModal === true ? "relative" : "hidden"} z-10`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="fixed inset-0 bg-gray-500/75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <button
                className="absolute  right-3 text-gray-500 hover:text-gray-800 text-2xl"
                onClick={() => setIsOpenModal(false)}
              >
                &times;
              </button>
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:size-10">
                    <svg
                      class="size-6 text-yellow-800"
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
                        d="M12 9v3.75m0 3.75h.008v.008H12v-.008z"
                      />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>

                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      class="text-base font-semibold text-gray-900"
                      id="modal-title"
                    >
                      Register Course
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Are You Sure Update This Course for student
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
                  onClick={() => handleSubmit()}
                >
                  Register
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={() => setIsOpenModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatusCourseRegister;
