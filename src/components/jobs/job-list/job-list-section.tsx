import type { Job } from "src/types/jobs.type";
import JobsTable from "./jobs-table";
import JobsNotFound from "./jobs-not-found";
import LoadingSection from "src/components/common/loading-section";
import ErrorSection from "src/components/common/error-section";
import { useJobsStore } from "src/store/jobsStore";

export default function JobListSection() {
  const { jobs, loading, error } = useJobsStore();
  const hasJobs = jobs.length > 0;

  if (loading) return <LoadingSection text="Loading jobs..." />;
  if (error) return <ErrorSection error={error} />;

  return (
    <div className="flex flex-col items-center pb-10 min-h-screen">
      <h1 className="bg-gray-100 py-8 w-full font-semibold text-gray-800 text-2xl text-center">
        My Jobs List
      </h1>

      {!hasJobs ? <JobsNotFound /> : <JobsTable jobs={jobs} />}
    </div>
  );
}
