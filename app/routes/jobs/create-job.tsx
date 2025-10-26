import { useState } from "react";
import Button from "src/components/ui/button";
import { getJobInputs } from "src/content/create-job";

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

  const inputs = getJobInputs({ formData, handleChange });

  return (
    <div className="pb-5">
      <div className="bg-gray-100 py-4 md:py-6 lg:py-8 font-medium text-2xl text-center">
        Create a Job
      </div>
      <div className="px-5">
        <div className="mt-5 border border-gray-200 rounded-md">
          <div className="max-lg:gap-5 lg:space-x-8 lg:space-y-5 grid grid-cols-1 lg:grid-cols-2 px-5 py-5">
            {inputs.map((input, i) => (
              <div
                key={i}
                className={`flex flex-col gap-2 ${i === inputs.length - 1 ? "col-span-full" : ""} ${input.label === "Job Title" ? "col-span-full" : ""}`}
              >
                <div className="font-medium">{input.label}</div>
                {input.input}
              </div>
            ))}
          </div>
          <div
            onClick={() => {}}
            className="flex justify-end items-end p-8 md:min-h-[300px] text-white"
          >
            <Button children="Post Job" />
          </div>
        </div>
      </div>
    </div>
  );
}
