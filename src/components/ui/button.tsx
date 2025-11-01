interface ButtonProps {
  variant?: "default" | "ghost";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  variant = "default",
  children,
  className = "",
  disabled = false,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${
          variant === "ghost"
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
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
