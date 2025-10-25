import { useEffect, useState } from "react";
import { mapJobsToDisplay } from "../utils/resMapper.util";
import type { IJobFromAPI, TJobForDisplay } from "~/@types";
import { JobTable } from "./jobsTable";
import FullPageLoader from "../../full-page-loader/fullPageLoader";


const JobList = () => {
  const [jobs, setJobs] = useState<TJobForDisplay[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    let ignore = false;

    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: IJobFromAPI[] = await res.json();
        const mapped = mapJobsToDisplay(Array.isArray(json) ? json : []);
        if (!ignore) setJobs(mapped);
      } catch {
        TODO: "Handle error";
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    load();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="relative">
      {loading && (
        <FullPageLoader />
      )}

      <div className="text-center p-10 text-4xl bg-gray-100 text-black text-bold">My Job List</div>

      <JobTable items={jobs} />
    </div>
  );
};

export default JobList;
