import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import Containar from "../Component/Containar";


type JobDetails = {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  salary: string;
  tags?: string[];
  description: string;
  requirements: string[];
  responsibilities?: string[];
  isFeatured?: boolean;
  categoryId?: number;
};

export default function JobDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataOfJop = async () => {
      try {
        const response = await fetch(
          `https://68f8f8e8deff18f212b83fba.mockapi.io/jobs/${id}`
        );
        
        if (!response.ok) {
          throw new Error("the error is occured while fetching the data of job from APi page  , !!!! ");
        }
        
        const data = await response.json();
        
        const jobData: JobDetails = {
          id: data.id,
          title: data.title || "Title is not available",
          company: data.company || "Company is not available",
          companyUrl: data.companyUrl,
          location: data.location || "Location",
          type: data.type || "Full-Time",
          salary: data.salary || "Salary not specified",
          tags: data.tags || [],
          description: data.description || "No description available.",
          requirements: data.requirements || [],
          responsibilities: data.responsibilities || [],
          isFeatured: data.isFeatured,
          categoryId: data.categoryId,
        };
        
        setJob(jobData);
        setLoading(false);
      } catch (error) {
        console.error("the error is :", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchDataOfJop();
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white h-[109px] flex items-center justify-center relative">
        <div className="absolute left-20 border-2 border-blue-300 rounded-sm p-2 hover:bg-blue-50 hover:boeder-2 transition-all duration-300">
          <button onClick={() => {navigate("/")}}  className="hover:cursor-pointer flex items-center gap-2 ">
            <svg 
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" 
              focusable="false" 
              style={{ width: '24px', height: '24px' }}
            >
              <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
            </svg>
            <span>Back</span>
          </button>
        </div>
        {loading ? (
                <div className="h-10 w-64 bg-gray-300 animate-pulse rounded"></div>
              ) : job ? (
          <h1 className="text-5xl font-bold text-center text-black">
            {job.title}
          </h1>
        ) : (
          <h1 className="text-5xl font-bold text-center text-red-500">
            Job not found
          </h1>
        )}
      </div>

      <div className="bg-white py-4 flex justify-center gap-4">
        <button
          onClick={() => {
            console.log("the button is clicked");
          }}
          className="bg-primary text-white px-6 py-2 rounded border-none cursor-pointer hover:bg-green-900 hover:scale-105 transition-all duration-300"
        >
          Apply this job
        </button>
        <button
          onClick={() => {
            console.log("the button is clicked");
          }}
          className="bg-white text-gray-700 px-6 py-2 rounded border border-gray-300 cursor-pointer  hover:border-primary hover:scale-105 transition-all duration-300"
        >
          View company
        </button>
      </div>

      <Containar>
        <div className="bg-white px-6 py-8 max-w-4xl mx-auto">
          <div className="space-y-2 mb-6">
            {loading ? (
              <>
                <div className="h-5 w-64 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-5 w-64 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-5 w-64 bg-gray-300 animate-pulse rounded"></div>
                <div className="h-5 w-64 bg-gray-300 animate-pulse rounded"></div>
              </>
            ) : job ? (
              <>
                <p className="text-left">
                  <span className="font-semibold">Company:</span> {job.company}
                </p>
                <p className="text-left">
                  <span className="font-semibold">Location:</span> {job.location}
                </p>
                <p className="text-left">
                  <span className="font-semibold">Type:</span> {job.type}
                </p>
                <p className="text-left">
                  <span className="font-semibold">Salary:</span> {job.salary}
                </p>
              </>
            ) : null}
          </div>

          <div className="border-b h-2 border-gray-300 my-6"></div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4"> Tags:</h2>
            {loading ? (
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-20 bg-gray-200 animate-pulse rounded-full"></div>
                <div className="h-8 w-24 bg-gray-200 animate-pulse rounded-full"></div>
                <div className="h-8 w-20 bg-gray-200 animate-pulse rounded-full"></div>
              </div>
            ) : job && job.tags && job.tags.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Job Description:</h2>
            {loading ? (
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
              </div>
            ) : job ? (
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            ) : null}
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Requirements:</h2>
            {loading ? (
              <ul className="space-y-2">
                <li className="h-4 w-full bg-gray-200 animate-pulse rounded"></li>
                <li className="h-4 w-full bg-gray-200 animate-pulse rounded"></li>
                <li className="h-4 w-5/6 bg-gray-200 animate-pulse rounded"></li>
              </ul>
            ) : job && job.requirements && job.requirements.length > 0 ? (
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Responsibilities:</h2>
            {loading ? (
              <ul className="space-y-2">
                <li className="h-4 w-full bg-gray-200 animate-pulse rounded"></li>
                <li className="h-4 w-full bg-gray-200 animate-pulse rounded"></li>
              </ul>
            ) : job && job.responsibilities && job.responsibilities.length > 0 ? (
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No responsibilities available</p>
            )}
          </div>
        </div>
      </Containar>
    </div>
  );
}

