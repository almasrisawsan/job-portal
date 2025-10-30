import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "~/components/ui/pagination";

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

  const handleDelete = (id) => {
    axios
      .delete("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs/" + id)
      .then(() => {
        // Remove the deleted item from state
        setData((prevData) => prevData.filter((item) => item.id !== id));

        // Adjust current page if the last item on a page was deleted
        const newDataLength = data.length - 1;
        const newTotalPages = Math.ceil(newDataLength / itemsPerPage);
        if (currentPage > newTotalPages && newTotalPages > 0) {
          setCurrentPage(newTotalPages);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-medium m-6">Jobs List</h1>
      <div className="bg-white p-6 flex justify-between flex-col">
        <table className="w-full border p-4 rounded-l-4xl rounded-r-4xl">
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
            {loading
              ? // Loading skeleton
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
              : // Actual data
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
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button>
                            <TrashIcon className="size-6 text-red-700 ml-4 cursor-pointer" />
                          </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Job</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{item.title}"?
                              This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(item.id)}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        {!loading && totalPages > 1 && (
          <Pagination className="mt-6">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                // Show first page, last page, current page, and pages around current
                const showPage =
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 &&
                    pageNumber <= currentPage + 1);

                // Show ellipsis before current page range
                const showEllipsisBefore =
                  pageNumber === currentPage - 2 && currentPage > 3;

                // Show ellipsis after current page range
                const showEllipsisAfter =
                  pageNumber === currentPage + 2 &&
                  currentPage < totalPages - 2;

                if (showEllipsisBefore || showEllipsisAfter) {
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }

                if (!showPage) return null;

                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      onClick={() => handlePageChange(pageNumber)}
                      isActive={currentPage === pageNumber}
                      className="cursor-pointer"
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
