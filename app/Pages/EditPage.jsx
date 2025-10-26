import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { GetJobsByid, UpdateJob } from "../api/api";
import JobForm from "../components/JobForm";

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await GetJobsByid(id);
        setJob(response.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching job:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleSubmit = async (formData) => {
    setUpdating(true);
    setError(null);
    try {
      const updatedJob = {
        company: formData.companyName,
        companyUrl: formData.companyWebsite,
        title: formData.jobTitle,
        category: formData.category,
        type: formData.jobType,
        location: formData.location,
        salary: formData.salary,
        experience: formData.experience,
        featured: formData.featured,
        description: formData.description,
      };

      await UpdateJob(id, updatedJob);
      alert("Job updated successfully!");
      navigate(`/jobs/${id}`);
    } catch (err) {
      setError(err.message);
      console.error("Error updating job:", err);
      alert("Failed to update job. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      {/* Loading State */}
      {loading && (
        <div className="bg-teal-50 border border-teal-500 text-teal-700 px-4 py-3 rounded mb-4 flex items-center gap-2">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Loading job data...</span>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-500 text-red-700 px-4 py-3 rounded mb-4">
          <strong className="font-bold">Error: </strong>
          <span>{error}</span>
        </div>
      )}

      {/* Job Form */}
      {!loading && !error && job && (
        <JobForm
          initialData={job}
          onSubmit={handleSubmit}
          submitButtonText={updating ? "Updating..." : "Update Job"}
          title="Edit Job"
        />
      )}
    </div>
  );
}
