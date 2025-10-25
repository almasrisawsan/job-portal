import React from "react";

interface JobMetaItemProps {
  icon: string;
  label: string;
}

export const JobMetaItem: React.FC<JobMetaItemProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-2">
      {/* Icon */}
      <i className="flex justify-center items-center text-[12px]">
        {icon}
      </i>

      {/* Label */}
      <span className="text-[15px] tracking-[0px] text-gray-800 dark:text-light">
        {label}
      </span>
    </div>
  );
};
