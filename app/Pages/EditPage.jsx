import { useState } from 'react';
import axios from 'axios';
import JobForm from '../components/JobForm';

export default function EditPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = async (newJobData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        'https://68f8f8e8deff18f212b83fba.mockapi.io/jobs',
        newJobData
      );
      console.log('Job created successfully:', response.data);
      setSuccess(true);

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message);
      console.error('Error creating job:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Job</h1>
        <p className="text-gray-600">Post a new job opportunity</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-4">
          <strong className="font-bold">Error: </strong>
          <span>{error}</span>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg mb-4">
          <strong className="font-bold">Success! </strong>
          <span>Job created successfully</span>
        </div>
      )}

      {/* Job Form */}
      <JobForm
        onSubmit={handleSubmit}
        isLoading={loading}
      />
    </div>
  );
}
