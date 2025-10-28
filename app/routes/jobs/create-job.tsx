import { useState } from "react";
import JobForm from "../Component/JobForm";
import axios from "axios";

export default function CreateJobPage() {
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobCategory, setJobCategory] = useState("Technology");
  const [jobType, setJobType] = useState("Full Time");
  const [jobLocation, setJobLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [featured, setFeatured] = useState("Yes");
  const [jobDescription, setJobDescription] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const jobData = {
      companyName,
      companyWebsite,
      jobTitle,
      jobCategory,
      jobType,
      jobLocation,
      experience,
      salaryRange,
      featured,
      jobDescription,
    };

    console.log("Posting job data:", jobData);

    // ✅ Real API POST
    // const response = await fetch("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(jobData),
    // });
    const res = await axios.post("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs",jobData);
    console.log("API Response:", res.data);


    const result = res.data;
    console.log("✅ Fake API Response:", result);

    alert("✅ Job created successfully!");
  };

  return (
    <JobForm
      companyName={companyName}
      setCompanyName={setCompanyName}
      companyWebsite={companyWebsite}
      setCompanyWebsite={setCompanyWebsite}
      jobTitle={jobTitle}
      setJobTitle={setJobTitle}
      jobCategory={jobCategory}
      setJobCategory={setJobCategory}
      jobType={jobType}
      setJobType={setJobType}
      jobLocation={jobLocation}
      setJobLocation={setJobLocation}
      experience={experience}
      setExperience={setExperience}
      salaryRange={salaryRange}
      setSalaryRange={setSalaryRange}
      featured={featured}
      setFeatured={setFeatured}
      jobDescription={jobDescription}
      setJobDescription={setJobDescription}
      handleSubmit={handleSubmit}
    />
  );
}
