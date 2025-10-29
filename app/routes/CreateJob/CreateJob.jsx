import { useState } from "react";
import JobForm from "./components/JobForm";
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
  const handleSubmit = async (e) => {
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

    const res = await axios.post("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs",jobData);
    console.log("API Response:", res.data);


    const result = res.data;

    if (result) {
      alert("Job posted successfully!");
      // Clear form fields
      setCompanyName("");
      setCompanyWebsite("");
      setJobTitle("");
      setJobCategory("Technology");
      setJobType("Full Time");
      setJobLocation("");
      setExperience("");
      setSalaryRange("");
      setFeatured("Yes");
      setJobDescription("");
    }
    else {
      alert("Failed to post job. Please try again.");
    }

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
