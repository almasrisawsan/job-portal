import { Link } from "react-router";
import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={'/'} className="text-2xl font-bold text-primary">JobsPortal</Link>
        <Link to={'/jobs/new'} variant="primary" size="md">
          Post a job
        </Link>
      </div>
    </header>
  );
}
