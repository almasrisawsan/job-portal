import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, useLocation } from "react-router";
import { DeleteJobsByid, GetJobsByCatogriesId } from "../api/api";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function JobsList() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const categoryName = location.state?.categoryName || `Category #${id}`;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignot = false;
    const fetchJobs = async () => {
      try {
        const response = await GetJobsByCatogriesId(id);
        setJobs(response.data || response);
      } catch (error) {
        setError(error);
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    if (!ignot) fetchJobs();
    return () => {
      ignot = true;
    };
  }, [id]);

  const DeleteJob = async (jobid) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (!confirmDelete) return;

    try {
      await DeleteJobsByid(jobid);
      alert("Job deleted successfully!");
      setJobs((prev) => prev.filter((job) => job.id !== jobid));
    } catch (error) {
      setError(error);
      alert("Failed to delete job. Please try again.");
    }
  };

  const columns = ["Title", "Type", "Salary", "Location", "Action"];

  return (
    <motion.div
      className="container mx-auto py-4 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex justify-between items-center mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold">
          Jobs in {categoryName || `Category #${id}`}
        </h2>
        <motion.button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back
        </motion.button>
      </motion.div>
      {error != "" && <h1 className="text-center">Some thing be wrong </h1>}
      {loading ? (
        <div className="bg-white rounded-lg shadow overflow-hidden animate-pulse">
          <div className="bg-gray-50 border-b h-12"></div>
          <div className="divide-y divide-gray-100">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 px-6 py-4 items-center"
              >
                
                <div className="h-4 bg-gray-300 rounded w-32"></div>
                <div className="h-4 bg-gray-300 rounded w-20"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
                <div className="flex gap-3 justify-end">
                  <div className="h-5 w-5 bg-gray-300 rounded"></div>
                  <div className="h-5 w-5 bg-gray-300 rounded"></div>
                  <div className="h-5 w-5 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : jobs.length === 0 ? (
        <p className="text-center text-gray-500">
          No jobs found in this category.
        </p>
      ) : (
        <motion.div
          className="bg-white rounded-lg shadow overflow-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <motion.tbody
              className="divide-y divide-gray-200"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 },
                },
              }}
            >
              {jobs.map((job) => (
                <motion.tr
                  key={job.id}
                  className="hover:bg-gray-50"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                >
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {job.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {job.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {job.salary}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 flex ">
                    <div className="flex gap-3 ">
                      <AiOutlineEye
                        size={20}
                        className="text-blue-600 cursor-pointer hover:text-blue-800"
                        onClick={() => navigate(`/jobs/${job.id}`)}
                      />
                      <AiOutlineEdit
                        size={20}
                        className="text-yellow-600 cursor-pointer hover:text-yellow-800"
                        onClick={() => navigate('/jobs/new', { state: { job, isEdit: true } })}
                      />
                      <AiOutlineDelete
                        size={20}
                        className="text-red-600 cursor-pointer hover:text-red-800"
                        onClick={() => DeleteJob(job.id)}
                      />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      )}
    </motion.div>
  );
}
