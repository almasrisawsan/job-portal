import Button from "components/common/ui/Button";
import { useState } from "react";
type formData = {
  companyName: string;
};
export default function CreateJobPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyWebsite: "",
    jobTitle: "",
    jobCategory: "",
    jobType: "",
    jobLocation: "",
    salaryRange: "",
    experience: "",
    featured: "",
    description: "",
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const inputs = [
    {
      label: "Company Name",
      key: "companyName",
      input: (
        <input
          onChange={(e) => handleChange("companyName", e.target.value)}
          className="border border-gray-200 rounded-md px-5 py-2"
          type="text"
          placeholder="Name"
          value={formData.companyName}
        />
      ),
    },
    {
      label: "Company Website",
      key: "companyWebsite",
      input: (
        <input
          onChange={(e) => handleChange("companyWebsite", e.target.value)}
          className="border border-gray-200 rounded-md px-5 py-2"
          type="text"
          placeholder="Website Link"
          value={formData.companyWebsite}
        />
      ),
    },
    {
      label: "Job Title",
      key: "jobTitle",
      input: (
        <input
          onChange={(e) => handleChange("jobTitle", e.target.value)}
          className="border border-gray-200 rounded-md px-5 py-2"
          type="text"
          placeholder="Title"
          value={formData.jobTitle}
        />
      ),
    },
    {
      label: "Job Category",
      key: "jobCategory",
      input: (
        <select
          className="border border-gray-200 rounded-md px-5 py-2"
          onChange={(e) => handleChange("jobCategory", e.target.value)}
          value={formData.jobCategory}
        >
          <option value="">Select Category</option>
          <option value="Marketing">Marketing</option>
          <option value="Design">Design</option>
          <option value="Content Creation">Content Creation</option>
        </select>
      ),
    },
    {
      label: "Job Type",
      key: "jobType",
      input: (
        <select
          className="border border-gray-200 rounded-md px-5 py-2"
          onChange={(e) => handleChange("jobType", e.target.value)}
          value={formData.jobType}
        >
          <option value="">Select Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Project Based">Project Based</option>
        </select>
      ),
    },
    {
      label: "Job Location",
      key: "jobLocation",
      input: (
        <input
          onChange={(e) => handleChange("jobLocation", e.target.value)}
          className="border border-gray-200 rounded-md px-5 py-2"
          type="text"
          placeholder="Location"
          value={formData.jobLocation}
        />
      ),
    },
    {
      label: "Salary Range",
      key: "salaryRange",
      input: (
        <input
          onChange={(e) => handleChange("salaryRange", e.target.value)}
          className="border border-gray-200 rounded-md px-5 py-2"
          type="text"
          placeholder="Salary Range"
          value={formData.salaryRange}
        />
      ),
    },
    {
      label: "Experience",
      key: "experience",
      input: (
        <input
          onChange={(e) => handleChange("experience", e.target.value)}
          className="border border-gray-200 rounded-md px-5 py-2"
          type="text"
          placeholder="Experience"
          value={formData.experience}
        />
      ),
    },
    {
      label: "Featured",
      key: "featured",
      input: (
        <select
          className="border border-gray-200 rounded-md px-5 py-2"
          onChange={(e) => handleChange("featured", e.target.value)}
          value={formData.featured}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      ),
    },
    {
      label: "Description",
      key: "description",
      input: (
        <textarea
          placeholder="Job Description"
          className="border border-gray-200 rounded-md px-5 py-2 w-full min-h-[150px] h-[300px]"
          onChange={(e) => handleChange("description", e.target.value)}
          value={formData.description}
        />
      ),
    },
  ];
  return (
    <div className="pb-5">
      <div className="py-8 bg-gray-100 text-center font-medium text-2xl">
        Create a Job
      </div>
      <div className="px-5">
        <div className="border border-gray-200 rounded-md mt-5">
          <div className="py-5 px-5 grid lg:grid-cols-2 grid-cols-1 max-lg:gap-5 lg:space-y-5 lg:space-x-8">
            {inputs.map((input, i) => (
              <div
                key={i}
                className={`flex flex-col gap-2 ${i === inputs.length - 1 ? "col-span-full" : ""} ${input.label === "Job Title" ? "col-span-full" : ""}`}
              >
                <div className="font-bold">{input.label}</div>
                {input.input}
              </div>
            ))}
          </div>
          <div
            onClick={() => {
              // Handle post job request
            }}
            className="text-white md:min-h-[300px] flex items-end justify-end p-8"
          >
            <Button children="Post Job" />
          </div>
        </div>
      </div>
    </div>
  );
}
