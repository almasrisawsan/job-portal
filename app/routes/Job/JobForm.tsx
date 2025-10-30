import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Button from "~/Layouts/Button";

const JobForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyWebsite: "",
    jobTitle: "",
    jobCategory: "Technology",
    jobType: "Full Time",
    jobLocation: "",
    experience: "",
    salaryRange: "",
    featured: "No",
    jobDescription: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://68f8f8e8deff18f212b83fba.mockapi.io/jobs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Job created successfully:", result);
        // Reset form
        setFormData({
          companyName: "",
          companyWebsite: "",
          jobTitle: "",
          jobCategory: "Technology",
          jobType: "Full Time",
          jobLocation: "",
          experience: "",
          salaryRange: "",
          featured: "No",
          jobDescription: "",
        });
        alert("Job created successfully!");
      } else {
        throw new Error("Failed to create job");
      }
    } catch (error) {
      console.error("Error creating job:", error);
      alert("Error creating job. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="mx-auto bg-white rounded-lg overflow-hidden">
          <div className="bg-gray-200 py-4">
            <h1 className="text-xlg font-semibold text-black text-center">
              Create a Job
            </h1>
          </div>

          <form className="p-6 space-y-6 shadow-md m-2" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Company Name
                </h2>
                <input
                  required
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-3 py-2 text-sm border text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Company Website
                </h2>
                <input
                  required
                  type="text"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Website Link"
                />
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-800 mb-3">
                Job Title
              </h2>
              <input
                required
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Title"
                className="w-full px-3 py-2 text-sm border text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Job Category
                </h2>
                <select
                  name="jobCategory"
                  value={formData.jobCategory}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="w-full px-3 text-sm py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Hourly</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Job Location
                </h2>
                <input
                  required
                  type="text"
                  name="jobLocation"
                  value={formData.jobLocation}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full px-3 py-2 text-gray-800 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Experience
                </h2>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Experience"
                  className="w-full px-3 py-2 text-gray-800 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Salary Range
                </h2>
                <input
                  type="text"
                  name="salaryRange"
                  value={formData.salaryRange}
                  onChange={handleChange}
                  placeholder="Salary Range"
                  className="w-full px-3 py-2 text-sm text-gray-800 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800 mb-3">
                  Featured
                </h2>
                <select
                  name="featured"
                  value={formData.featured}
                  onChange={handleChange}
                  className="w-full px-3 text-sm py-2 border text-gray-800 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-800 mb-3">
                Job Description
              </h2>
              <textarea
                rows={4}
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                placeholder="Job Description"
                className="w-full h-[300px] px-3 text-gray-800 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="flex justify-end pt-4 mt-[20px]">
              <Button title="Post Job" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobForm;
