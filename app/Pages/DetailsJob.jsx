import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Button from "../components/Button";
import { GetJobsByid } from "../api/api";

const DetailsJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await GetJobsByid(id);
        setJob(response.data);
      } catch (err) {
        setError("Failed to fetch job data");
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  // 🔹 Skeleton Loader while loading
  if (loading)
    return (
      <div className="bg-gray-50 min-h-screen py-10 animate-pulse">
        <div className="container mx-auto px-4 md:px-10">
          {/* Title skeleton */}
          <div className="h-8 bg-gray-300 rounded w-2/3 mx-auto mb-10"></div>

          {/* Card skeleton */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 space-y-8">
            <div className="flex justify-center items-center gap-3">
              <div className="h-10 w-32 bg-gray-300 rounded"></div>
              <div className="h-10 w-36 bg-gray-300 rounded"></div>
            </div>

            <div>
              <div className="h-6 w-40 bg-gray-300 rounded mb-3"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-11/12"></div>
                <div className="h-3 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>

            <div>
              <div className="h-6 w-32 bg-gray-300 rounded mb-3"></div>
              <ul className="space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i} className="h-3 bg-gray-200 rounded w-3/4"></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="h-6 w-20 bg-gray-300 rounded mb-3"></div>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="bg-gray-300 h-6 w-16 rounded-full"
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  if (error)
    return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!job) return <div className="text-center py-10">No job found.</div>;

  return (
    <div className="bg-gray-50 min-h-screen mt-15 py-10">
      <div className="container mx-auto px-4 md:px-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          {job.title}
        </h1>

        <div className="mt-10 bg-white text-black rounded-2xl shadow-md p-6 md:p-10 space-y-8">
          <div className="flex justify-center items-center">
            <div className="flex gap-2 sm:flex-nowrap justify-center items-center flex-wrap">
              <Button className="rounded-md" variant="outline">
                View Company
              </Button>

              <Button className="rounded-md">Apply This Job</Button>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-black font-semibold mb-3 pb-2">
              Job Description
            </h2>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          {job.requirements && job.requirements.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3 pb-2">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {job.tags && job.tags.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3 pb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsJob;
