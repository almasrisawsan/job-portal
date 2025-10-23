import { FaTrash, FaEdit, FaEye } from "react-icons/fa";

const JopList = () => {
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
            <tr className="text-center border-b border-gray-300">
              <td className="px-4 py-2">test</td>
              <td className="px-4 py-2">test</td>
              <td className="px-4 py-2">20/20/2000</td>
              <td className="px-4 py-2">30/3/2000</td>
              <td className="px-4 py-2 flex justify-center gap-2">
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
            <tr className="text-center border-b border-gray-300">
              <td className="px-4 py-2">test</td>
              <td className="px-4 py-2">test</td>
              <td className="px-4 py-2">20/20/2000</td>
              <td className="px-4 py-2">30/3/2000</td>
              <td className="px-4 py-2 flex justify-center gap-2">
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
