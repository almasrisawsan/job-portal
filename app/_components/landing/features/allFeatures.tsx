import { useEffect, useState } from "react";
import { jobs } from "./constants";
import JobCard from "./featureCard";
import type { IJobFromAPI, TJobForDisplay } from "~/@types";
import { mapJobsToDisplay } from "~/_components/job/utils/resMapper.util";
import FullPageLoader from "~/_components/full-page-loader/fullPageLoader";

const AllFeatures = () => {
  const [jobs, setJobs] = useState<TJobForDisplay[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
    
    let ignore = false;

    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs", {
          headers: {
            "Content-Type": "application/json",
          },
          "cache": "force-cache"
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: IJobFromAPI[] = await res.json();
        const mapped = mapJobsToDisplay(Array.isArray(json) ? json : []);
        mapped.length = 5;
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
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {loading && (
          <FullPageLoader />
        )}
      <div className="max-w-7xl mx-auto">
        <h2 className="font-poppins font-bold text-4xl text-center mb-12 text-gray-900">
          Featured jobs
        </h2>
        
        <div className="flex flex-col gap-5">
          {jobs.map((job, index) => (
            <JobCard
              jobId={job.id}
              key={index}
              companyName={job.company}
              jobTitle={job.title}
              location={job.location}
              jobType={job.type}
              salary={job.salary}
              companyInitial={job.company.charAt(0) || "C"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllFeatures;