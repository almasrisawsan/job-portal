// src/components/home/FeaturedJobsSection.tsx
import { DetailsJobs } from "./DetailsJobs";
import type { Job } from "src/types/jobs.type";
import SectionTitle from "../ui/section-title";

interface FeaturedJobsProps {
  jobs: Job[];
}

export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ jobs }) => {

  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container-box">
        <SectionTitle title="Featured Jobs" />
        <DetailsJobs jobs={jobs} />
      </div>
    </div>
  );
};
