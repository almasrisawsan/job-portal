import React, { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import SuggestionsList from "./SuggestionsList";
import { useSearch } from "../hooks/useSearch";
import { GetJobs } from "../api/api";

// import womman from "../welcome/womman.png";
import woman2 from "../welcome/woman2.png";

export default function HeroSection() {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { updateSearchTerm, debouncedSearchTerm } = useSearch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        setLoading(true);
        const response = await GetJobs();
        setAllJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllJobs();
  }, []);

  useEffect(() => {
    if (searchInput.trim().length > 0) {
      const filtered = allJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          job.company.toLowerCase().includes(searchInput.toLowerCase())
      );

      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchInput, allJobs]);

  useEffect(() => {
    updateSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm, updateSearchTerm]);

  const handleSearch = () => {
    updateSearchTerm(searchInput);
    setShowSuggestions(false);
  };

  const handleSuggestionSelect = (job) => {
    setSearchInput(job.title);
    setShowSuggestions(false);
    updateSearchTerm(job.title);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleInputFocus = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <section className="bg-white w-screen relative">
      <div className=" flex flex-col-reverse justify-center lg:items-start items-center gap-10 container mx-auto md:h-screen h-[50vh]">
        <div className="lg:w-1/2 z-10 relative">
          <h1 className="sm:text-4xl text-2xl md:text-7xl font-bold text-gray-900 md:mb-6 mb-3">
            Find A <span className="text-primary">Job</span> That{" "}
            <span className="text-primary">Matches</span> Your Passion
          </h1>
          <p className="text-gray-600 md:text-base text-sm md:mb-6 mb-3">
            Hand-picked opportunities to work from home, remotely, freelance,
            full-time, part-time, contract and internships.
          </p>
          <div className="flex relative">
            <div className="relative w-full">
              <Input
                inputstyle="background"
                type="text"
                className="rounded-l-md w-full"
                placeholder="Search by job title..."
                value={searchInput}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <SuggestionsList
                suggestions={suggestions}
                isVisible={showSuggestions}
                onSelect={handleSuggestionSelect}
                onClose={() => setShowSuggestions(false)}
                searchTerm={searchInput}
              />
            </div>
            <Button
              size="lg"
              className="rounded-md absolute right-0"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-full object-cover flex absolute top-0 z-0 right-0">
        <img src={woman2} alt="Hero" className="w-full rounded-lg" />
      </div>
    </section>
  );
}
