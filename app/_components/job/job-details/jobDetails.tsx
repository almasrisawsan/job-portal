import { useEffect, useState } from "react";
import type { IJobFromAPI, TJobForDisplay } from "~/@types";
import JobDetailsCard from "./jobDetailsCard";
import { useParams } from "react-router-dom";
import { mapJobToDisplay } from "../utils/resMapper.util";
import FullPageLoader from "~/_components/full-page-loader/fullPageLoader";

function JobDetails() {
  const {id} = useParams();
  const [job, setJob] = useState<TJobForDisplay | null>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  let ignore = false;

  const load = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://68f8f8e8deff18f212b83fba.mockapi.io/jobs/${id}`);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      
      const data: IJobFromAPI = await res.json();

      const dataMapForDisplay = mapJobToDisplay(data);

      if (!ignore) setJob(dataMapForDisplay);
    } catch (err) {
      console.error(err);
    } finally {
      if (!ignore) setLoading(false);
    }
  };

  load();

  return () => {
    ignore = true;
  };
}, []);


  if (loading)
    return <FullPageLoader />
  if (!job)
    return (
      <p className="text-center text-red-500 mt-16 text-lg">No job found</p>
    );
  
  return (
    <JobDetailsCard {...job}/>
  );
}

export default JobDetails;
