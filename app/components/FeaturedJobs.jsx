import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapPin, Clock, DollarSign } from "lucide-react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { GetJobs } from "../api/api";

export default function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await GetJobs();
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
  }, []);

  return (
    <section className="bg-white py-10">
      <h2 className="text-center text-xl font-semibold mb-8">Featured Jobs</h2>

      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto flex flex-col gap-5 px-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-sm rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={job.companyUrl}
                  alt={job.company}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-gray-900 font-semibold">{job.title}</h3>
                  <p className="text-sm text-gray-500">{job.company}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign size={14} /> {job.salary}
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
