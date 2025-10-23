import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Job from "../../components/Jobs/Job";

export default function CategoryPage() {
  const { id } = useParams(); // id من الـ URL
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    fetch("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch jobs");
        return res.json();
      })
      .then((data) => {
        const filtered = data.filter(
          (job) => String(job.categoryId) === String(id)
        );
        setJobs(filtered);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Unknown error");
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="p-8 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Category ID: {id}</h1>

      {loading && <p>Loading jobs…</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && jobs.length === 0 && (
        <p>No jobs in this category.</p>
      )}

      {!loading && !error && jobs.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {jobs.map((job) => (
              <Job key={job.id} job={job}  />
          ))}
        </ul>
      )}
    </div>
  );
}
