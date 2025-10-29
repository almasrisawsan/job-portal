import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { DeleteJobsByid, GetJobsByCatogriesId, UpdateJob } from "../api/api";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function JobsList() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingJob, setEditingJob] = useState(null);
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

  const handleEditSave = async (updatedJob) => {
    await UpdateJob(updatedJob.id, updatedJob);
    setJobs((prev) =>
      prev.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
    setEditingJob(null);
  };

  return (
    <div className="container mx-auto py-10 pt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Jobs in Category #{id}</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition cursor-pointer"
        >
          ← Back
        </button>
      </div>
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
        <div className="bg-white rounded-lg shadow overflow-auto">
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
            <tbody className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
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
                        onClick={() => setEditingJob(job)}
                      />
                      <AiOutlineDelete
                        size={20}
                        className="text-red-600 cursor-pointer hover:text-red-800"
                        onClick={() => DeleteJob(job.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editingJob && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-40"
            onClick={() => setEditingJob(null)}
          ></div>

          <div className="bg-white rounded-lg p-6 w-full max-w-md relative z-10 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Edit Job</h3>
            <div className="space-y-3">
              {["title", "type", "salary", "location"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {field}
                  </label>
                  <input
                    type="text"
                    value={editingJob[field]}
                    onChange={(e) =>
                      setEditingJob({ ...editingJob, [field]: e.target.value })
                    }
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setEditingJob(null)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleEditSave(editingJob)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
