import React from "react";
import { Link } from "react-router";

const Job = ({ job }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center shadow p-5 rounded-lg hover:shadow-lg transition">
      <div className="flex items-center mb-4 sm:mb-0">
        <div className="flex justify-center items-center bg-[#338573] w-20 h-20 rounded-full flex-shrink-0">
          <span className="text-white text-3xl font-bold">
            {job.company[0] || "J"}
          </span>
        </div>

        <div className="ml-4">
          <span className="text-gray-500">{job.company}</span>
          <h3 className="text-lg font-semibold">{job.title}</h3>

          <div className="flex flex-wrap mt-2 text-gray-600 text-sm">
            <div className="flex items-center mr-4 mb-2 sm:mb-0">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_48_67)">
                  <path
                    d="M17.6366 8.33337C17.6366 14.1667 10.078 19.1667 10.078 19.1667C10.078 19.1667 2.51953 14.1667 2.51953 8.33337C2.51953 6.34425 3.31587 4.4366 4.73337 3.03007C6.15086 1.62355 8.0734 0.833374 10.078 0.833374C12.0827 0.833374 14.0052 1.62355 15.4227 3.03007C16.8402 4.4366 17.6366 6.34425 17.6366 8.33337Z"
                    stroke="#338573"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.078 10.8334C11.4695 10.8334 12.5975 9.71409 12.5975 8.33337C12.5975 6.95266 11.4695 5.83337 10.078 5.83337C8.68655 5.83337 7.55853 6.95266 7.55853 8.33337C7.55853 9.71409 8.68655 10.8334 10.078 10.8334Z"
                    stroke="#338573"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_48_67">
                    <rect width="20.156" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-1">{job.location}</span>
            </div>

            <div className="flex items-center mr-4 mb-2 sm:mb-0">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.64548 14H5.29096C5.75871 14 6.2073 14.1844 6.53805 14.5126C6.8688 14.8408 7.05461 15.2859 7.05461 15.75V18.375M7.05461 2.625V5.25C7.05461 5.71413 6.8688 6.15925 6.53805 6.48744C6.2073 6.81563 5.75871 7 5.29096 7H2.64548L7.05461 2.625ZM18.5183 7H15.8729C15.4051 7 14.9565 6.81563 14.6258 6.48744C14.295 6.15925 14.1092 5.71413 14.1092 5.25V2.625L18.5183 7ZM14.1092 18.375V15.75C14.1092 15.2859 14.295 14.8408 14.6258 14.5126C14.9565 14.1844 15.4051 14 15.8729 14H18.5183L14.1092 18.375Z"
                  stroke="#338573"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-1">{job.type}</span>
            </div>

            <div className="mb-2 sm:mb-0">{job.salary}</div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 mt-4 sm:mt-0">
        <Link
          to={`/job/${job.id}`}
          className="bg-[#338573] text-white px-4 py-2 rounded hover:bg-[#2a6b5d] transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Job;
