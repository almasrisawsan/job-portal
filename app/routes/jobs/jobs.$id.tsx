import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IJob {
  id :string,
  title: string;
  description: string;
  type: string;
  salary: string;
  company: string;
  location: string;
  applicationDeadline: string;
  minimumQualification?: string;
  experienceLevel?: string;
  responsibilities?: string[];
  requirements?: string[];
}

function JobDetails() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<IJob | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`https://68fb3f0394ec960660253db2.mockapi.io/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching job:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-gray-500 mt-16 text-lg">Loading</p>;
  if (!job) return <p className="text-center text-red-500 mt-16 text-lg">No job found</p>;

  return (
    <div className="max-w-[1200px] mx-auto bg-white p-8 mt-10 rounded-2xl shadow-md border border-gray-200">
      <div className="mb-6 flex items-center justify-center gap-2">
        <h1 className="text-3xl font-bold text-gray-800">
          {job.title} <span className="text-sm text-gray-500 font-normal">({job.type})</span>
        </h1>
        <h1 className="text-3xl font-bold text-gray-800">- {job.company}</h1>
      </div>

      <div className="flex gap-4 mb-10 flex items-center justify-center">
        <button className="bg-white text-black border-2 px-5 py-2 rounded-md text-sm font-medium transition-transform transform hover:scale-105 hover:bg-green-700">
          View Company
        </button>
        <button className="bg-green-900 text-white px-5 py-2 rounded-md text-sm font-medium transition-transform transform hover:scale-105 hover:bg-blue-700">
          Apply This Job
        </button>
      </div>

      <p className="text-gray-700 font-medium mb-2">
        Location: <span className="text-gray-500">{job.location}</span>
      </p>

      <p className="text-gray-700 font-medium mb-2">
        Minimum Qualification: <span className="text-gray-500">{job.minimumQualification || "N/A"}</span>
      </p>

      <p className="text-gray-700 font-medium mb-2">
        Experience Level: <span className="text-gray-500">{job.experienceLevel || "N/A"}</span>
      </p>

      <p className="text-gray-700 font-medium mb-2">
        Application Deadline: <span className="text-gray-500">{job.applicationDeadline || "N/A"}</span>
      </p>

      <p className="text-gray-700 font-medium mb-2">
        Salary Range: <span className="text-gray-500">{job.salary}</span>
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Job Description</h2>
      <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>

      {job.responsibilities && job.responsibilities.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 mt-8">Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {job.requirements && job.requirements.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 mt-8">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            {job.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default JobDetails;
