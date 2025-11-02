import { useState, useMemo, useEffect } from "react";
import Fuse from "fuse.js";
import Button from "./button";
import { useJobsStore } from "src/store/jobsStore";
import { ROUTES } from "src/content/constants";
import { useNavigate } from "react-router";
import { EnvironmentOutlined } from "@ant-design/icons";
import useDebounce from "src/hooks/useDebounce";

// Created by : eng. Mostafa Aljazar

export default function SearchBar() {
  const { jobs, setFilteredJobs } = useJobsStore();
  const [query, setQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const debouncedQuery = useDebounce(query, 1000);

  const fuse = useMemo(() => {
    return new Fuse(jobs, {
      keys: ["title", "jobTitle", "company", "companyName", "location"],
      threshold: 0.3,
    });
  }, [jobs]);

  const suggestions = useMemo(() => {
    if (!debouncedQuery.trim()) return jobs;
    return fuse.search(debouncedQuery).map((result) => result.item);
  }, [debouncedQuery, fuse, jobs]);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setFilteredJobs(jobs);
      return;
    }
    setFilteredJobs(fuse.search(debouncedQuery).map((result) => result.item));
  }, [debouncedQuery, jobs, setFilteredJobs, fuse]);

  const handleSelect = (value: string) => {
    setQuery(value);
    setShowOptions(false);
  };

  const handleSearch = () => {
    if (!query.trim()) {
      setFilteredJobs(jobs);
      return;
    }
    setFilteredJobs(fuse.search(query).map((result) => result.item));
  };

  const handleViewJob = (jobId: string) => {
    navigate(ROUTES.JOBS.INFO(jobId));
  };

  return (
    <div className="relative mx-auto w-[300px] md:w-full max-w-2xl">
      <div className="flex items-center bg-white shadow-md rounded-xl">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowOptions(true);
          }}
          onFocus={() => setShowOptions(true)}
          onBlur={() => setTimeout(() => setShowOptions(false), 150)}
          className="flex-1 px-2 border-none outline-none text-sm sm:text-base"
          placeholder="Search job title or company..."
        />
        <Button
          type="button"
          onClick={handleSearch}
          className="px-4 py-2 rounded-full text-sm sm:text-base"
        >
          Search
        </Button>
      </div>

      {showOptions && suggestions.length > 0 && (
        <div className="right-0 left-0 z-10 absolute bg-white shadow-lg mt-2 border border-gray-200 rounded-2xl max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {suggestions.map((job) => {
            const display =
              job.title || job.jobTitle || job.company || job.companyName || "";

            return (
              <div
                key={job.id}
                onMouseDown={() => handleSelect(display)}
                className="flex sm:flex-row flex-col justify-between sm:items-center gap-2 hover:bg-gray-50 px-4 py-3 border-gray-100 border-b last:border-none transition-all cursor-pointer"
              >
                {/* Left Section */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="flex justify-center items-center bg-primary rounded-full w-10 h-10 font-semibold text-white text-lg shrink-0">
                    {display.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-1">
                      {job.jobTitle || job.title || "Frontend Developer"}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-1">
                      {job.companyName || job.company || "Tech Co."}
                    </p>
                    <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
                      <EnvironmentOutlined className="text-gray-400" />
                      <span>{job.location || "Remote"}</span>
                    </div>
                  </div>
                </div>

                <button
                  onMouseDown={() => handleViewJob(job.id)}
                  className="bg-primary hover:bg-primary/90 px-3 py-1.5 rounded-md text-white text-xs sm:text-sm text-center transition-colors"
                >
                  View Job
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
