import React from "react";

interface JobLogoProps {
  companyUrl?: string;
  company: string;
}

export const JobLogo: React.FC<JobLogoProps> = ({ companyUrl, company }) => {
  return (
    <div className="flex justify-center items-center w-[91px] h-[91px] rounded-full border border-primary overflow-hidden bg-primary/10">
      {companyUrl ? (
        <img
          src={companyUrl}
          alt={company}
          className="object-cover w-full h-full rounded-full"
        />
      ) : (
        <span className="text-primary text-2xl font-bold">
          {company?.charAt(0) || "?"}
        </span>
      )}
    </div>
  );
};
