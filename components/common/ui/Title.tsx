import React from "react";

interface TitleProps {
    title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className="flex justify-center items-center font-poppins font-semibold text-[30px]  text-gray-800 dark:text-light">
            {title}
        </div>
    );
};
