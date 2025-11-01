import type { Job } from "src/types/jobs.type";
import JobsTable from "./jobs-table";
import JobsNotFound from "./jobs-not-found";
import { useFetch } from "src/hooks/useFetch";
import LoadingSection from "src/components/common/loading-section";
import ErrorSection from "src/components/common/error-section";

export default function JobListSection() {
  const { data: jobs, loading, error } = useFetch<Job[]>("/jobs");

  const hasJobs = jobs && jobs.length > 0;

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
