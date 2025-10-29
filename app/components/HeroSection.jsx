import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Input from "./Input";
import SuggestionsList from "./SuggestionsList";

import woman2 from "../welcome/woman2.png";

export default function HeroSection({ jobs }) {
  const [suggestions, setSuggestions] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);
  const divsearch = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        divsearch.current &&
        inputRef.current &&
        !divsearch.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(searchInput.trim() != "");
      if (searchInput.trim().length > 0) {
        const filtered = jobs.filter(
          (job) =>
            job.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            job.company.toLowerCase().includes(searchInput.toLowerCase())
        );

        setSuggestions(filtered);
      } else {
        setSuggestions([]);
      } 
    }, [300]);
    return () => clearTimeout(timer);
  }, [searchInput]);

  return (
    <section className="bg-white w-screen relative">
      <div className=" flex flex-col-reverse justify-center lg:items-start items-center gap-10 container mx-auto md:h-screen h-[50vh]">
        <motion.div
          className="lg:w-1/2 z-10 relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="sm:text-4xl text-2xl md:text-7xl font-bold text-gray-900 md:mb-6 mb-3"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find A <span className="text-primary">Job</span> That{" "}
            <span className="text-primary">Matches</span> Your Passion
          </motion.h1>
          <motion.p
            className="text-gray-600 md:text-base text-sm md:mb-6 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hand-picked opportunities to work from home, remotely, freelance,
            full-time, part-time, contract and internships.
          </motion.p>
          <motion.div
            className="flex relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative w-full">
              <Input
                inputstyle="background"
                type="text"
                value={searchInput}
                className="rounded-l-md w-full"
                placeholder="Search by job title..."
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                ref={inputRef}
                onFocus={(e) => {
                  setActive(searchInput.trim() != "");
                  setSearchInput(e.target.value);
                }}
              />
              {active && (
                <SuggestionsList
                  ref={divsearch}
                  suggestions={suggestions}
                  searchTerm={searchInput}
                />
              )}
            </div>
            <Button size="lg" className="rounded-md absolute right-0">
              Search
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="w-full h-full object-cover flex absolute top-0 z-0 right-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={woman2} alt="Hero" className="w-full rounded-lg" />
      </motion.div>
    </section>
  );
}
