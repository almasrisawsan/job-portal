import type { Job } from "src/types/jobs.type";
import JobsTable from "./jobs-table";
import JobsNotFound from "./jobs-not-found";

export default function JobListSection({ jobs }: { jobs: Job[] }) {
  return (
    <div className="flex flex-col items-center pb-10 min-h-screen">
      <h1 className="bg-gray-100 py-8 w-full font-semibold text-gray-800 text-2xl text-center">
        My Jobs List
      </h1>

      {!jobs || jobs.length === 0 ? (
        <JobsNotFound />
      ) : (
        <JobsTable jobs={jobs} />
      )}
    </div>
  );
}
