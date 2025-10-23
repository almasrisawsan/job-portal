import { FaTrash, FaEdit, FaEye } from "react-icons/fa";

const JopList = () => {
  return (
    <div>
      <div className="text-center p-10 text-4xl bg-gray-100 text-black">
        My Job List
      </div>
      <div className="px-20">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Job Type</th>
              <th className="border px-4 py-2">Posted Date</th>
              <th className="border px-4 py-2">Application Deadline</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border px-4 py-2">test</td>
              <td className="border px-4 py-2">test</td>
              <td className="border px-4 py-2">20/20/2000</td>
              <td className="border px-4 py-2">30/3/2000</td>
              <td className="border px-4 py-2 flex justify-center gap-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEye />
                </button>
                <button className="text-green-500 hover:text-green-700">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">test</td>
              <td className="border px-4 py-2">test</td>
              <td className="border px-4 py-2">20/20/2000</td>
              <td className="border px-4 py-2">30/3/2000</td>
              <td className="border px-4 py-2 flex justify-center gap-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEye />
                </button>
                <button className="text-green-500 hover:text-green-700">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default JopList;
