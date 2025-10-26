import React from "react";
import { JobLogo } from "./JobLogo";
import { JobInfo } from "./JobInfo";
import type { Job } from "src/types/jobs.type";
import Button from "src/components/ui/button";
import { NavLink } from "react-router";

interface DetailsJobsProps {
  jobs: Job[];
}

export const DetailsJobs: React.FC<DetailsJobsProps> = ({ jobs }) => {

  return (
    <div className="flex flex-col gap-8 my-10">
      {jobs && jobs.length > 0 ? (
        jobs.map((job) => (
          <div
            key={job.id}
            className="
              flex flex-col sm:flex-row justify-between items-center
             rounded-[10px]
              border border-light dark:border-gray-700
              shadow-[0px_2px_4px_0px_#00000026]
              p-6 gap-6 w-full
            "
          >
            {/* Left: Logo + Info */}
            <div className="flex items-center gap-6 w-full sm:w-auto">
              <JobLogo companyUrl={job.companyUrl} company={job.company} />
              <JobInfo
                title={job.title}
                company={job.company}
                location={job.location}
                type={job.type}
                salary={job.salary}
              />
            </div>

            {/* Right: Button */}
            <div className="w-full sm:w-auto flex justify-start sm:justify-end text-white">
              <Button  >
                <NavLink to={`/jobs/job-info/${job.id}`}> View Details</NavLink>

              </Button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No featured jobs available.</p>
      )}
    </div>
  );
};
