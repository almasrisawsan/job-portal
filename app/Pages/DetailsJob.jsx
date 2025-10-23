import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import Button from "../components/Button";

const DetailsJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(
          `https://68f8f8e8deff18f212b83fba.mockapi.io/jobs/${id}`
        );
        setJob(response.data);
      } catch (err) {
        setError("Failed to fetch job data");
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading)
    return (
      <div className="mt-10">
        <Loading />
      </div>
    );
  if (error)
    return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!job) return <div className="text-center py-10">No job found.</div>;

  return (
    <div className="bg-gray-50 min-h-screen mt-10 py-10">
      <div className="container mx-auto px-4 md:px-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          {job.title}
        </h1>

        <div className="mt-10 bg-white  text-black rounded-2xl shadow-md p-6 md:p-10 space-y-8">
          <div className="flex justify-center items-center">
            <div className=" flex gap-2 sm:flex-nowrap justify-center items-center flex-wrap">
              <Button className="rounded-md" variant="outline">
                View Company
              </Button>

              <Button className="rounded-md">Apply This Job</Button>
            </div>
          </div>
          <div>
            <h2 className="text-xl text-black font-semibold mb-3  pb-2">
              Job Description
            </h2>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3  pb-2">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          {job.tags && job.tags.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3  pb-2">Tags</h2>
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
