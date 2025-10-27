import React, { useEffect, useState } from "react";
import JobTableHeader from "./JobTableHeader";
import JobTableRow from "./JobTableRow";
// import { d } from "node_modules/@react-router/dev/dist/routes-CZR-bKRt";
const Base_URL = "https://68f8f8e8deff18f212b83fba.mockapi.io/jobs";
// Mock data
const jobs = [
  {
    id: 1,
    title: "Laravel Developer",
    jobType: "Full Time",
    postedDate: "2022-06-12",
    deadline: "2022-07-01",
  },
  {
    id: 2,
    title: "Frontend Developer",
    jobType: "Part Time",
    postedDate: "2022-06-15",
    deadline: "2022-07-10",
  },
];

const JobTable = ({ onView, onEdit, onDelete }: any) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(Base_URL)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="overflow-x-auto rounded-3xl p-6">
      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <JobTableHeader />
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job: any) => <JobTableRow key={job.id} job={job} />)
            ) : (
              <tr>
                <td className="text-center py-4 text-gray-500" colSpan={5}>
                  No jobs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobTable;
