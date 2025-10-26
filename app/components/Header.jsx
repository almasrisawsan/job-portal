import { Link } from "lucide-react";
import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 w-full fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary">JobsPortal</a>
        <div className="flex gap-2 items-center">
          <h2 className="text-primary text-sm font-medium">Dashboard</h2>
          <a href={'/jobs/new'} className="rounded-md bg-primary text-white p-3" size="md">
            Post a job
          </a>
        </div>
      </div>
    </header>
  );
}
