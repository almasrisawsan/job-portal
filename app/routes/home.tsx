import type { Route } from "./+types/home";
import { Link } from "react-router-dom"; 

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jobs Portal" },
    { name: "description", content: "Find your dream job easily." },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">

      <Link
        to="/job/1" 
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View Job Details
      </Link>
    </div>
  );
}
