import { useEffect } from "react";
import { useFetch } from "src/hooks/useFetch";
import { useJobsStore } from "src/store/jobsStore";
import type { Job } from "src/types/jobs.type";

export default function FetchJobs() {
  const { jobs, setJobs, setLoading, setError } = useJobsStore();
  const { data, loading, error, refetch } = useFetch<Job[]>("/jobs");

  useEffect(() => {
    setLoading(loading);

    if (error) setError(error || "Failed to fetch jobs");
    else setError(null);

    if (data && data.length > 0 && jobs.length === 0) setJobs(data);
  }, [data, loading, error, jobs, setJobs, setLoading, setError]);

  // Retry fetching if store becomes empty later
  useEffect(() => {
    if (jobs.length === 0 && !loading) refetch?.();
  }, [jobs, loading, refetch]);

  return null;
}
