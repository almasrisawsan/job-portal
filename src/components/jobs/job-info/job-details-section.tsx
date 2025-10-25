import React from "react";
import type { Job } from "src/types/jobs.type";

export default function JobDetailsSection({ job }: { job: Job }) {
  return (
    <div className="space-y-10 px-4 md:px-10 lg:px-24 py-8">
      <div className="flex flex-col gap-0">
        <div className="flex flex-row items-baseline gap-2">
          <p className="font-semibold text-lg md:text-xl lg:text-2xl">
            Location:
          </p>
          <p className="font-normal text-gray-700 text-base md:text-lg lg:text-xl">
            {job.location}
          </p>
        </div>

        <div className="flex flex-row items-baseline gap-2">
          <p className="font-semibold text-lg md:text-xl lg:text-2xl">
            Salary:
          </p>
          <p className="font-normal text-gray-700 text-base md:text-lg lg:text-xl">
            {job.salary}
          </p>
        </div>

        <div className="flex flex-row items-baseline gap-2">
          <p className="font-semibold text-lg md:text-xl lg:text-2xl">
            Featured:
          </p>
          <p className="font-normal text-gray-700 text-base md:text-lg lg:text-xl">
            {job.isFeatured ? "Yes" : "No"}
          </p>
        </div>

        <div className="flex flex-row items-baseline gap-2">
          <p className="font-semibold text-lg md:text-xl lg:text-2xl">Tags:</p>
          <div className="flex flex-wrap gap-2">
            {job.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-50 px-3 py-1 rounded-full font-medium text-blue-700 text-base md:text-lg lg:text-xl"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-bold text-xl md:text-2xl lg:text-3xl">
          Job Description:
        </p>
        <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed">
          {job.description}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-semibold text-lg md:text-xl lg:text-2xl">
          {job.title} Requirements:
        </p>
        <ul className="space-y-2 pl-6 list-disc">
          {job.requirements.map((req, index) => (
            <li
              key={index}
              className="font-normal text-base md:text-lg lg:text-xl leading-relaxed"
            >
              {req}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
