import React from "react";
import { Link } from "react-router";
import type { Job } from "src/types/jobs.type";

export default function ActionButtons({ job }: { job: Job }) {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-6 mt-6 px-4 w-full">
      <Link
        to={job.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center bg-white border border-gray-300 rounded-md w-full md:w-48 h-12 md:h-14 text-base md:text-lg lg:text-xl text-center hover:cursor-pointer"
      >
        View Company
      </Link>

      <button className="bg-primary rounded-md w-full md:w-48 h-12 md:h-14 text-white text-base md:text-lg lg:text-xl hover:cursor-pointer">
        Apply This Job
      </button>
    </div>
  );
}
