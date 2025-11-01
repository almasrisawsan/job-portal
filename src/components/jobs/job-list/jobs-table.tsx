import { useState } from "react";
import Pagination from "src/components/ui/pagination";
import type { Job } from "src/types/jobs.type";
import JobActions from "./job-actions";

export default function JobsTable({ jobs: initialJobs }: { jobs: Job[] }) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 15;

  const totalJobs = jobs.length;
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  const handleDeleteJob = (id: string) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));

    // Adjust current page if deleting the last item on the page
    if (currentJobs.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const header = (
    <tr>
      <th className="px-6 py-3 w-1/5 font-semibold text-gray-700 text-left">
        Title
      </th>
      <th className="px-6 py-3 w-1/5 font-semibold text-gray-700 text-left">
        Company
      </th>
      <th className="px-6 py-3 w-1/5 font-semibold text-gray-700 text-left">
        Location
      </th>
      <th className="px-6 py-3 w-1/4 font-semibold text-gray-700 text-left">
        Type
      </th>
      <th className="px-6 py-3 w-1/6 font-semibold text-gray-700 text-center">
        Action
      </th>
    </tr>
  );

  const rows = currentJobs.map((job) => (
    <tr key={job.id} className="hover:bg-gray-50">
      <td className="px-6 py-3 font-medium text-gray-900">{job.title}</td>
      <td className="px-6 py-3 text-gray-500">{job.company}</td>
      <td className="px-6 py-3 text-gray-500">{job.location}</td>
      <td className="px-6 py-3 text-gray-500">{job.type}</td>
      <td className="px-6 py-3 text-center">
        <JobActions id={job.id} onDelete={handleDeleteJob} />
      </td>
    </tr>
  ));

  return (
    <div className="bg-white mt-5 border border-gray-200 rounded-lg w-[90%] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50">{header}</thead>
          <tbody>{rows}</tbody>
        </table>
      </div>

      <Pagination
        totalItems={totalJobs}
        itemsPerPage={jobsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
