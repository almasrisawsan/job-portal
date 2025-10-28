// import { Link } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 w-full fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
        <h1 className="text-2xl font-bold text-primary">JobsPortal</h1>
        </Link>

        <div className="flex gap-2 items-center">
          <a href={'/'} className="text-primary hover:text-white hover:bg-primary/95 p-3 rounded-md text-sm font-medium">Dashboard</a>
          <a href={'/jobs/new'} className="rounded-md bg-primary text-white p-3" size="md">
            Post a job
          </a>
        </div>
      </div>
    </header>
  );
}
