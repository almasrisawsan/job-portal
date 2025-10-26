import { useState } from "react";
import { useNavigate } from "react-router";
import { CreateJob } from "../api/api";
import JobForm from "../components/JobForm";

export default function CreateJobPage() {
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setCreating(true);
    setError(null);
    try {
      const newJob = {
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

      const response = await CreateJob(newJob);
      alert("Job created successfully!");
      navigate(`/jobs/${response.data.id}`);
    } catch (err) {
      setError(err.message);
      console.error("Error creating job:", err);
      alert("Failed to create job. Please try again.");
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-500 text-red-700 px-4 py-3 rounded mb-4 max-w-xl mx-auto">
          <strong className="font-bold">Error: </strong>
          <span>{error}</span>
        </div>
      )}

      {/* Job Form */}
      <JobForm
        onSubmit={handleSubmit}
        submitButtonText={creating ? "Creating..." : "Post Job"}
        title="Create a Job"
      />
    </div>
  );
}
