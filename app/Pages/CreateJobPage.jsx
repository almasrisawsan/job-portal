import { useState } from "react";
import { useNavigate } from "react-router";
import { CreateJob } from "../api/api";
import JobForm from "../components/JobForm";
import Button from "../components/Button";

export default function CreateJobPage() {
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(null);
  const [successJobId, setSuccessJobId] = useState(null);

  const handleSubmit = async (formData) => {
    setCreating(true);
    setError(null);
    try {
      const response = await CreateJob(formData);
      setSuccessJobId(response.data.id);
    } catch (err) {
      setError(err.message);
      console.error("Error creating job:", err);
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

      {/* Success Message */}
      {successJobId && (
        <div className="bg-teal-50 border border-teal-500 text-teal-700 px-6 py-4 rounded-lg mb-6 max-w-xl mx-auto mt-24">
          <h3 className="font-bold text-lg mb-2">Job Created Successfully!</h3>
          <p className="mb-4">Your job posting has been created and is now live.</p>
          <div className="flex gap-3">
            <Button
              onClick={() => navigate(`/jobs/${successJobId}`)}
              className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-md text-white"
            >
              View Job
            </Button>
            <Button
              onClick={() => {
                setSuccessJobId(null);
                setError(null);
              }}
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-700/70 px-6 py-2 rounded-md"
            >
              Create Another Job
            </Button>
          </div>
        </div>
      )}

      {!successJobId && (
        <JobForm
          onSubmit={handleSubmit}
          submitButtonText={creating ? "Creating..." : "Post Job"}
          title="Create a Job"
        />
      )}
    </div>
  );
}
