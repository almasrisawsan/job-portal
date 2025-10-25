import { Eye, Pencil, Trash2 } from "lucide-react";

const JobList = () => {
  return (
    <div>
      <div className="text-center p-10 text-4xl bg-gray-100 text-black">
        My Job List
      </div>

      <div className="px-20">
        <table className="table-auto border border-gray-300 w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 border-b border-gray-300">
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Job Type</th>
              <th className="px-4 py-2 text-left">Posted Date</th>
              <th className="px-4 py-2 text-left">Application Deadline</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2].map((i) => (
              <tr key={i} className="text-center border-b border-gray-300">
                <td className="px-4 py-2">test</td>
                <td className="px-4 py-2">test</td>
                <td className="px-4 py-2">20/20/2000</td>
                <td className="px-4 py-2">30/3/2000</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center gap-2">
                    <button
                      className="text-blue-600 hover:text-blue-700"
                      aria-label="View job"
                      title="View"
                    >
                      <Eye className="h-5 w-5" />
                    </button>

                    <button
                      className="text-green-600 hover:text-green-700"
                      aria-label="Edit job"
                      title="Edit"
                    >
                      <Pencil className="h-5 w-5" />
                    </button>

                    <button
                      className="text-red-600 hover:text-red-700"
                      aria-label="Delete job"
                      title="Delete"
                    >
                      <Trash2 className="h-5 w-5" />
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
};

export default JobList;
