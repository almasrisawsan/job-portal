import React from "react";
import type { Job } from "src/types/jobs.type";

export default function HeaderSection({ job }: { job: Job }) {
  return (
    <div className="flex flex-col justify-center items-center bg-secondary px-4 w-full h-20 md:h-[100px] lg:h-[110px]">
      <div className="font-medium text-black text-xl md:text-2xl lg:text-3xl text-center leading-tight">
        {job.title}{" "}
        <span className="text-gray-700 text-sm md:text-base lg:text-lg">
          ({job.type})
        </span>{" "}
        - {job.company}
      </div>
    </div>
  );
}
