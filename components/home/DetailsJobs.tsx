import React from "react";
import Button from "components/common/ui/Button";
import { JobLogo } from "./JobLogo";
import { JobInfo } from "./JobInfo";
import { featuredJobs } from "./fackData"; 
import type { Job } from "../../types/jobs";

export const DetailsJobs: React.FC = () => {
  const jobs: Job[] = featuredJobs;

  // const { data, isLoading, error } = useApi<Job>("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs");

  return (
    <div className="flex flex-col gap-8 my-10">
      {jobs.length > 0 ? (
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
              <Button>View Details</Button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No featured jobs available.</p>
      )}
    </div>
  );
};
