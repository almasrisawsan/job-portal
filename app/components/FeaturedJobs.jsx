import React, { useEffect, useState } from "react";
import { MapPin, Clock, DollarSign } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "./Button";
import { GetJobs } from "../api/api";

export default function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await GetJobs();
        setJobs(response.data);
      } catch (error) {
        setError(error)
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-white py-10">
      <h2 className="text-center text-xl font-semibold mb-8">Featured Jobs</h2>
      {error != "" &&
        <h1 className="text-center">Some thing be wrong </h1>}
      {loading ? (
        // 🔹 Skeleton loader
        <div className="container mx-auto flex flex-col gap-5 px-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between animate-pulse"
            >
              <div className="flex items-center gap-4">
                {/* Company logo skeleton */}
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

                {/* Text section skeleton */}
                <div className="flex flex-col gap-2">
                  <div className="h-4 bg-gray-300 rounded w-40"></div>
                  <div className="h-3 bg-gray-200 rounded w-24"></div>
                  <div className="flex gap-3 mt-2">
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                    <div className="h-3 bg-gray-200 rounded w-12"></div>
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              </div>

              {/* Button skeleton */}
              <div className="mt-4 sm:mt-0 h-8 w-28 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="container mx-auto flex flex-col gap-5 px-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-sm rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                {job.companyUrl ? (
                  <img
                    src={job.companyUrl}
                    alt={job.company}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center"
                  style={{ display: job.companyUrl ? 'none' : 'flex' }}
                >
                  <span className="text-gray-500 font-semibold text-sm">
                    {job.company ? job.company.charAt(0).toUpperCase() : '?'}
                  </span>
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold">{job.title}</h3>
                  <p className="text-sm text-gray-500">{job.company}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-primary" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign size={14} className="text-primary" /> {job.salary}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                className="rounded-md"
                onClick={() => navigate(`/jobs/${job.id}`)}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
