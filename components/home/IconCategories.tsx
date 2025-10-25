import React from "react";

interface IconCategoriesProps {
  id: number | string;
  title: string;
}

export const IconCategories: React.FC<IconCategoriesProps> = ({ id, title }) => {
  return (
    <div className="flex flex-col items-center gap-[10px] mt-[10px]">
      {/* Icon circle */}
      <div
        className="
          bg-primary/30 w-[75px] h-[73px]
          flex justify-center items-center rounded-full
          text-primary text-[22px] font-bold
        "
      >
        {/* Show first letter of title if available */}
        {title?.charAt(0)?.toUpperCase() || id}
      </div>

      {/* Title */}
      <div className="font-semibold text-[18px] text-gray-800 dark:text-light text-center">
        {title || "Untitled"}
      </div>
    </div>
  );
};
