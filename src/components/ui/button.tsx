import React from "react";

interface ButtonProps {
  variant?: "default" | "ghost";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "default",
  children,
  className = "",
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`
        ${variant === "ghost"
          ? "text-primary bg-transparent hover:bg-primary/10"
          : "bg-primary text-white hover:bg-primary/90"
        }
        text-sm md:text-base
        font-semibold
        px-3 md:px-5
        py-2 md:py-3
        rounded-md
        w-fit sm:w-auto
        transition-colors duration-150
        ${className}
      `}
    >
      {children}
    </button>
  );
}
