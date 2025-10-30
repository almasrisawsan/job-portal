import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import type { Job } from "src/types/jobs.type";

export default function JobsTable({ jobs }: { jobs: Job[] }) {
  return (
    <div className="bg-white mt-5 border border-gray-200 rounded-lg w-[90%] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50">
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
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-6 py-3 font-medium text-gray-900">
                  {job.title}
                </td>
                <td className="px-6 py-3 text-gray-500">{job.company}</td>
                <td className="px-6 py-3 text-gray-500">{job.location}</td>
                <td className="px-6 py-3 text-gray-500">{job.type}</td>
                <td className="px-6 py-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="text-green-500 hover:text-green-600 text-lg">
                      <Link to={`/jobs/job-info/${job.id}`}>
                        <EyeOutlined />
                      </Link>
                    </button>
                    <button className="text-blue-400 hover:text-blue-500 text-lg">
                      <EditOutlined />
                    </button>
                    <button className="text-red-500 hover:text-red-600 text-lg">
                      <DeleteOutlined />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
