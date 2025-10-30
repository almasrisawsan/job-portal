import { useContext, useEffect, useRef, useState } from 'react'
import type { TJobForDisplay } from '~/@types';
import { JobContext } from '~/provider/job/jobContext';
import { normalize } from '../utils/search.util';

const useSearch = () => {
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

  return {
    query,
    setQuery,
    filtered,
    debouncing,
    handleImmediateSearch,
  }
}

export default useSearch