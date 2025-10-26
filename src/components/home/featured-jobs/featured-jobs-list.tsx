import type { Job } from "src/types/jobs.type";
import { FileSearchOutlined } from "@ant-design/icons";
import FeaturedJobCard from "./featured-job-card";
import FeaturedJobsNotFound from "./featured-jobs-not-found";

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
        <FeaturedJobsNotFound />
      )}
    </>
  );
}
