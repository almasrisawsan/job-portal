import { useEffect, useState } from "react";
import JobTitle from "../../components/Jobs/JobTitle.jsx";
import JobDetails from "../../components/Jobs/JobDetails.jsx";
import JobDescription from "../../components/Jobs/JobDesc.jsx";
import JobRequirements from "../../components/Jobs/JobRequirements.jsx";
import JobResponsibilities from "../../components/Jobs/JobResponsibilities.jsx";
import { useParams } from "react-router";

export default function JobDetailPage() {
  const { id } = useParams();

  const baseURL = "https://68f8f8e8deff18f212b83fba.mockapi.io";
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [job, setJob] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseURL}/jobs/${id}`);
        if (!response.ok) throw "no job found";
        const job = await response.json();
        setJob(job);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [id]);
  if (error || !job) return <JobDetails />;

  //or add a loading page
  if (isLoading) return <h1>Loading job details...</h1>;
  return (
    <main className="job-container">
      <JobTitle title={job.title} type={job.type} company={job.company} />
      <JobDetails job={job} />
      <JobDescription desc={job.description} />
      <JobRequirements title={job.title} requirements={job.requirements} />
      <JobResponsibilities res={job.responsibilities} />
    </main>
  );
}
