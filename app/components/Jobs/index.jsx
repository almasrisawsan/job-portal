import React, { useEffect, useState } from "react";
import Job from "./Job";

const Index = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return res.json();
      })
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-xl font-semibold">Loading jobs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-xl font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Featured Jobs</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {jobs.map((job, index) => (
          <Job key={job.id} job={job} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Index;
