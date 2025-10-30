import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Catogoies";
import FeaturedJobs from "../components/FeaturedJobs";
import { GetJobs } from "../api/api";

export default function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignot = false;
    const fetchJobs = async () => {
      try {
        const response = await GetJobs();
        setJobs(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    if (!ignot) fetchJobs();
    return () => {
      ignot = true;
    };
  }, []);
  return (
    <div>
      <HeroSection jobs={jobs} />
      <Categories />
      <FeaturedJobs jobs={jobs} error={error} loading={loading} />
    </div>
  );
}
