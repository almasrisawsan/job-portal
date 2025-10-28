// components/JobForm.jsx
import React from "react";
import Button from "./Button";
import Containar from "./Containar";
import Footer from "./Footer";
interface JobFormProps {
  companyName: string;
  companyWebsite: string;
  jobTitle: string;
  jobCategory: "Technology" | "Design" | "Marketing";
  jobType: "Full Time" | "Part Time" | "Hourly";
  jobLocation: string;
  experience: string;
  salaryRange: string;
  featured: "Yes" | "No";
  jobDescription: string;
  setCompanyName: React.Dispatch<React.SetStateAction<string>>;
  setCompanyWebsite: React.Dispatch<React.SetStateAction<string>>;
  setJobTitle: React.Dispatch<React.SetStateAction<string>>;
  setJobCategory: React.Dispatch<React.SetStateAction<string>>;
  setJobType: React.Dispatch<React.SetStateAction<string>>;
  setJobLocation: React.Dispatch<React.SetStateAction<string>>;
  setExperience: React.Dispatch<React.SetStateAction<string>>;
  setSalaryRange: React.Dispatch<React.SetStateAction<string>>;
  setFeatured: React.Dispatch<React.SetStateAction<string>>;
  setJobDescription: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

}
const JobForm: React.FC<JobFormProps> = ({
  companyName,
  setCompanyName,
  companyWebsite,
  setCompanyWebsite,
  jobTitle,
  setJobTitle,
  jobCategory,
  setJobCategory,
  jobType,
  setJobType,
  jobLocation,
  setJobLocation,
  experience,
  setExperience,
  salaryRange,
  setSalaryRange,
  featured,
  setFeatured,
  jobDescription,
  setJobDescription,
  handleSubmit,
}) => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="mx-auto bg-white rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gray-200 py-4">
            <h1 className="text-xlg font-semibold text-black text-center">
              Create a Job
            </h1>
          </div>

          {/* Form */}
          <Containar>
            <form onSubmit={handleSubmit} className="p-6 space-y-6 shadow-md m-2">
              {/* Company Name & Website */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Company Name
                  </h2>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Name"
                    className="w-full px-3 py-2 text-sm border text-gray-800  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Company Website
                  </h2>
                  <input
                    type="text"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    className="w-full px-3 py-2 text-sm border text-gray-800  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Website Link"
                  />
                </div>
              </div>

              {/* Job Title */}
              <div>
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Job Title
                </h2>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Title"
                  className="w-full px-3 py-2 text-sm border text-gray-800  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Job Category & Job Type */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Job Category
                  </h2>
                  <select
                    value={jobCategory}
                    onChange={(e) => setJobCategory(e.target.value)}
                    className="w-full px-3 py-2 text-sm border text-gray-800  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Technology</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                </div>

                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Job Type
                  </h2>
                  <select value={jobType}
              onChange={(e) => setJobType(e.target.value)} className="w-full px-3 text-sm py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Hourly</option>
                  </select>
                </div>
              </div>

              {/* Job Location & Experience */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Job Location
                  </h2>
                  <input
                    type="text"
                    value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
                    placeholder="Location"
                    className="w-full px-3 py-2 text-gray-800  text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Experience
                  </h2>
                  <input
                    type="text"
                    value={experience}
              onChange={(e) => setExperience(e.target.value)}
                    placeholder="Experience"
                    className="w-full px-3 py-2 text-gray-800  text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Salary & Featured */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Salary Range
                  </h2>
                  <input
                    type="text"
                    value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
                    placeholder="Salary Range"
                    className="w-full px-3 py-2 text-sm text-gray-800  border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Featured
                  </h2>
                  <select
                  value={featured}
              onChange={(e) => setFeatured(e.target.value)}
                   className="w-full px-3 text-sm py-2 border text-gray-800  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Job Description
                </h2>
                <textarea
                  rows={4}
                  value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Job Description"
                  className="w-full h-[300px] px-3  text-gray-800 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4 mt-[20px]">
                <button type="submit" className="cursor-pointer px-4 py-2 bg-[#338573] text-white rounded hover:bg-[#246154] active:scale-95 transition">Post Job</button>
              </div>
            </form>
          </Containar>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default JobForm;
