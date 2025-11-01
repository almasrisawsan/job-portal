import { useState } from "react";
import type { Job } from "src/types/jobs.type";
import FeaturedJobCard from "./featured-job-card";
import Pagination from "src/components/ui/pagination";

export default function FeaturedJobsList({ jobs }: { jobs: Job[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  const totalJobs = jobs.length;
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        {currentJobs.map((job) => (
          <FeaturedJobCard key={job.id} job={job} />
        ))}
      </div>

      <Pagination
        totalItems={totalJobs}
        itemsPerPage={jobsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
