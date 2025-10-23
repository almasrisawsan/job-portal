interface ButtonProps {
    variant?: "default" | "ghost";
    children: React.ReactNode;
}

export default function Button({ variant, children }: ButtonProps) {
  return (
    <button
      className={`${variant === "ghost" ? "text-primary" : "bg-primary text-white"} md:text-xl text-sm font-semibold px-5 md:px-9 py-3.5 rounded-lg`}
    >
      {children}
    </button>
  );
}
