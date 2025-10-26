import type { Job } from "src/types/jobs.type";
import { FileSearchOutlined } from "@ant-design/icons";
import FeaturedJobCard from "./featured-job-card";

export default function FeaturedJobsList({ jobs }: { jobs: Job[] }) {
  const hasJobs = jobs && jobs.length > 0;

  return (
    <>
      {hasJobs ? (
        <div className="flex flex-col gap-5">
          {jobs.map((job) => (
            <FeaturedJobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center bg-gray-50 py-12 border border-gray-200 border-dashed rounded-md text-center">
          <FileSearchOutlined className="mb-3 text-primary text-5xl" />
          <p className="font-semibold text-gray-700 text-lg">No jobs found</p>
          <p className="mt-1 text-gray-500 text-sm">
            Check back later for new opportunities.
          </p>
        </div>
      )}
    </>
  );
}
