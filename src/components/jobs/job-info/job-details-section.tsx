import React from "react";
import type { Job } from "src/types/jobs.type";

export default function JobDetailsSection({ job }: { job: Job }) {
  const tags = Array.isArray(job.tags) ? job.tags.filter(Boolean) : [];
  const requirements = Array.isArray(job.requirements)
    ? job.requirements.filter(Boolean)
    : [];

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
            {tags.length > 0 ? (
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-50 px-3 py-1 rounded-full font-medium text-blue-700 text-base md:text-lg lg:text-xl"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-base md:text-lg lg:text-xl">
                No tags listed
              </span>
            )}
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
          {requirements.length > 0 ? (
            requirements.map((req, index) => (
              <li
                key={index}
                className="font-normal text-base md:text-lg lg:text-xl leading-relaxed"
              >
                {req}
              </li>
            ))
          ) : (
            <li className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-gray-500">
              No requirements listed
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
