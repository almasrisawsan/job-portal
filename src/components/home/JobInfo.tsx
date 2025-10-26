import React from "react";
import { JobMeta } from "./JobMeta";

interface JobInfoProps {
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
}

export const JobInfo: React.FC<JobInfoProps> = ({ title, company, location, type, salary }) => {
  return (
    <div className="flex flex-col justify-center p-4 rounded-lg">
      <span className="font-semibold text-[22px]">{title}</span>
      <span className="text-gray-500 text-sm">{company}</span>
      <JobMeta location={location} type={type} salary={salary} />
    </div>
  );
};
