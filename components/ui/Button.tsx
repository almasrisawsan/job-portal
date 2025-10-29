interface ButtonProps {
    variant?: "default" | "ghost";
    children: React.ReactNode;
}

export default function Button({ variant, children }: ButtonProps) {
  return (
    <button
      className={`${variant === "ghost" ? "text-primary" : "bg-primary"} text-xl font-semibold px-9 py-3.5`}
    >
      {children}
    </button>
  );
}
