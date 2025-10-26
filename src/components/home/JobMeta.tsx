import React from "react";
import { JobMetaItem } from "./JobMetaItem";

interface JobMetaProps {
  location: string;
  type: string;
  salary: string;
}

export const JobMeta: React.FC<JobMetaProps> = ({ location, type, salary }) => {
  return (
    <div className="flex flex-wrap items-center gap-6 mt-3">
      <JobMetaItem icon="📍" label={location} />
      <JobMetaItem icon="🕒" label={type} />
      <JobMetaItem icon="💰" label={salary} />
    </div>
  );
};
