import { useState } from "react";

const JobForm = ({
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
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!companyWebsite.trim()) {
      newErrors.companyWebsite = "Company website is required";
    } else {
      // URL validation
      const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
      if (!urlPattern.test(companyWebsite)) {
        newErrors.companyWebsite = "Please enter a valid URL";
      }
    }

    if (!jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
    }

    if (!jobLocation.trim()) {
      newErrors.jobLocation = "Job location is required";
    }

    if (!experience.trim()) {
      newErrors.experience = "Experience is required";
    }

    if (!salaryRange.trim()) {
      newErrors.salaryRange = "Salary range is required";
    }

    if (!jobDescription.trim()) {
      newErrors.jobDescription = "Job description is required";
    } else if (jobDescription.trim().length < 50) {
      newErrors.jobDescription = "Job description must be at least 50 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto bg-white overflow-hidden">
          {/* Header */}
          <div className="bg-gray-200 py-4">
            <h1 className="text-xlg font-semibold text-black text-center">
              Create a Job
            </h1>
          </div>

          {/* Form */}
          {/* <Containar> */}
          <form onSubmit={handleFormSubmit} className="p-6 space-y-6 shadow-md m-2">
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
                  className={`w-full px-3 py-2 text-sm border text-gray-800 rounded focus:outline-none focus:ring-1 ${
                    errors.companyName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
                )}
              </div>

              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Company Website
                </h2>
                <input
                  type="text"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                  className={`w-full px-3 py-2 text-sm border text-gray-800 rounded focus:outline-none focus:ring-1 ${
                    errors.companyWebsite
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="Website Link"
                />
                {errors.companyWebsite && (
                  <p className="text-red-500 text-xs mt-1">{errors.companyWebsite}</p>
                )}
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
                className={`w-full px-3 py-2 text-sm border text-gray-800 rounded focus:outline-none focus:ring-1 ${
                  errors.jobTitle
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>
              )}
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
                  className="w-full px-3 py-2 text-sm border text-gray-800  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>Technology</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </div>

              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Job Type
                </h2>
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="w-full px-3 text-sm py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
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
                  className={`w-full px-3 py-2 text-gray-800 text-sm border rounded focus:outline-none focus:ring-1 ${
                    errors.jobLocation
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.jobLocation && (
                  <p className="text-red-500 text-xs mt-1">{errors.jobLocation}</p>
                )}
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
                  className={`w-full px-3 py-2 text-gray-800 text-sm border rounded focus:outline-none focus:ring-1 ${
                    errors.experience
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.experience && (
                  <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
                )}
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
                  className={`w-full px-3 py-2 text-sm text-gray-800 border rounded focus:outline-none focus:ring-1 ${
                    errors.salaryRange
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.salaryRange && (
                  <p className="text-red-500 text-xs mt-1">{errors.salaryRange}</p>
                )}
              </div>

              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Featured
                </h2>
                <select
                  value={featured}
                  onChange={(e) => setFeatured(e.target.value)}
                  className="w-full px-3 text-sm py-2 border text-gray-800  border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
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
                className={`w-full h-[300px] px-3 text-gray-800 py-2 text-sm border rounded focus:outline-none focus:ring-1 ${
                  errors.jobDescription
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              ></textarea>
              {errors.jobDescription && (
                <p className="text-red-500 text-xs mt-1">{errors.jobDescription}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4 mt-[20px]">
              <button
                type="submit"
                className="cursor-pointer px-4 py-2 bg-[#338573] text-white rounded hover:bg-[#246154] active:scale-95 transition"
              >
                Post Job
              </button>
            </div>
          </form>
          {/* </Containar> */}
        </div>
      </div>
    </>
  );
};

export default JobForm;
