import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ pagination }) => {
  const nums = [];
  let currentPage = pagination.currentPage;
  const totalPages = pagination.totalPages;

  for (let i = 1; i <= totalPages; i++) {
    nums.push(i);
  }

  return (
    <nav
      class="isolate flex  justify-center -space-x-px rounded-md shadow-xs mb-5"
      aria-label="Pagination"
    >
      {currentPage > 1 ? (
        <Link
          to={`?page=${currentPage - 1}`}
          class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="size-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
      ) : null}

      {nums.map((num, index) => (
        <Link
          key={index}
          to={`?page=${num}`}
          aria-current="page"
          class={`${
            Number(currentPage) === Number(num)
              ? "bg-indigo-600 text-white"
              : "text-black"
          }  relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          {num}
        </Link>
      ))}

      {currentPage < totalPages ? (
        <Link
          to={`?page=${currentPage + 1}`}
          class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span class="sr-only">Next</span>
          <svg
            class="size-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
      ) : null}
    </nav>
  );
};

export default Pagination;
