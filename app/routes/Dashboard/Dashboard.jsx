import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = (id, title) => {
    const confirm = window.confirm(`Are You Sure to Delete ${title} Job?`);
    if (confirm) {
      axios
        .delete("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs/" + id)
        .then(() => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-medium m-6">Jobs List</h1>
      <div className="bg-white p-6 flex justify-between flex-col">
        <table className="w-dvw border p-4 rounded-l-4xl rounded-r-4xl">
          <thead className="border-b-black border-b-2">
            <tr className="text-left">
              <th className="p-3">Title</th>
              <th>Company</th>
              <th>Job Type</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // Loading skeleton
              [...Array(itemsPerPage)].map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td className="p-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </td>
                  <td>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </td>
                  <td>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </td>
                  <td>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </td>
                  <td className="flex pt-3">
                    <div className="h-6 w-6 bg-gray-200 rounded"></div>
                    <div className="h-6 w-6 bg-gray-200 rounded ml-4"></div>
                    <div className="h-6 w-6 bg-gray-200 rounded ml-4"></div>
                  </td>
                </tr>
              ))
            ) : (
              // Actual data
              currentItems.map((item, i) => (
                <tr key={i}>
                  <td className="p-3">{item.title}</td>
                  <td>{item.company}</td>
                  <td>{item.type}</td>
                  <td>{item.salary}</td>
                  <td className="flex pt-3">
                    <Link to={`/job/${item.id}`}>
                      <EyeIcon className="size-6 text-green-700" />
                    </Link>
                    <Link to={`/update/${item.id}`}>
                      <PencilIcon className="size-6 text-teal-400 ml-4" />
                    </Link>
                    <button onClick={() => handleDelete(item.id, item.title)}>
                      <TrashIcon className="size-6 text-red-700 ml-4 cursor-pointer" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#338573] text-white hover:bg-[#52998a]"
              }`}
            >
              Previous
            </button>

            <div className="flex gap-1">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === pageNumber
                        ? "bg-[#338573] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#338573] text-white hover:bg-[#52998a]"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
