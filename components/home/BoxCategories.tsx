import React from "react";
import { IconCategories } from "./IconCategories";

interface BoxCategoriesProps {
  title: string;
  id: number | string;
}

export const BoxCategories: React.FC<BoxCategoriesProps> = ({ id, title }) => {
  return (
    <div
      className="
        bg-white border border-light rounded-[10px] w-[232px] h-[191px] flex flex-col items-center justify-center gap-3 dark:border-gray-700
      "
    >
      <IconCategories id={id} title={title} />
    </div>
  );
};
