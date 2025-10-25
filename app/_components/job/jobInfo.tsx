import { useParams } from "react-router";
import { useEffect, useState } from "react";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
};

export default function JobInfo() {
  const { id } = useParams();
  console.log("🚀 ~ JobPage ~ id:", id);
  const [job, setJob] = useState<Job | null>(null);

  //   useEffect(() => {
  //     // Example: fetch from API
  //     async function fetchJob() {
  //       const res = await fetch(`/api/jobs/${id}`);
  //       const data = await res.json();
  //       setJob(data);
  //     }

  //     fetchJob();
  //   }, [id]);

  //   if (!job) return <p>Loading job...</p>;

  return (
    <div className="">
      JobPage ~ id: {id}
      {/* <h1 className="mb-2 font-bold text-2xl">{job.title}</h1>
      <p className="mb-4 text-gray-600">
        {job.company} – {job.location}
      </p>
      <div className="pt-4 border-t">
        <p>{job.description}</p>
      </div> */}
    </div>
  );
}
