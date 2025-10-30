
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import type { TJobForDisplay } from "~/@types";
import { JobContext } from "~/provider/job/jobContext";
import SearchJobCard from "./jobForSearch";
import { normalize } from "./utils/search.util";

const SearchBox = () => {
  const { jobs } = useContext(JobContext); 

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<TJobForDisplay[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [debouncing, setDebouncing] = useState(false);
  
  const filterJobs = () => {
    const q = normalize(query);
    if (!q) {
      return [];
    };
    return jobs.filter(j => normalize(j.title ?? "").includes(q));
  }

  
  useEffect(() => {
    
    if (timerRef.current) clearTimeout(timerRef.current);

    setDebouncing(true);

    timerRef.current = setTimeout(() => {
      setDebouncing(false);
      
      setFiltered(filterJobs());
      

    }, 300);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query, jobs]);

   const handleImmediateSearch = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setFiltered(filterJobs());
  };


 return (
    <div className="relative w-full max-w-xl">
      {/* Search controls */}
      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <input
          type="text"
          placeholder="Search by job title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            flex-1 px-5 py-3 
            rounded-lg 
            border border-gray-200 
            focus:outline-none focus:ring-2 focus:ring-[#338573] focus:border-transparent
            bg-white
            text-gray-700
            placeholder:text-gray-400
            font-poppins
          "
        />
        <button
          type="button"
          onClick={handleImmediateSearch}
          className="
            bg-[#338573] 
            text-white 
            px-8 py-3 
            rounded-lg 
            font-poppins font-medium 
            hover:bg-[#2a6b5c] 
            transition-colors
            whitespace-nowrap
          "
        >
          Search
        </button>
      </div>

      {query && (
        <div className="absolute z-20 mt-2 w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl ring-1 ring-gray-200">
            {
              filtered.length > 0 && (
                <ul className="max-h-96 overflow-auto p-2 space-y-2">
                  {
                    filtered.map((j) => (
                      <li key={j.id}>
                        <SearchJobCard
                          jobId={j.id}
                          jobTitle={j.title ?? "Untitled"}
                          companyName={j.company ?? "—"}
                        />
                      </li>
                    ))
                  }
                </ul>
              )
            }
            {
              filtered.length === 0 && !debouncing && query.length > 0 && (
                <div className="p-4 text-sm text-gray-600 font-poppins">
                  No results for <span className="font-medium">“{query}”</span>
                </div>
              )
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
