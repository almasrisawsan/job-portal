import type { Job } from "src/types/jobs.type";
import { useParams } from "react-router";
import HeaderSection from "src/components/jobs/job-info/header-section";
import ActionButtons from "src/components/jobs/job-info/action-buttons";
import JobDetailsSection from "src/components/jobs/job-info/job-details-section";
import { useFetch } from "src/hooks/useFetch";
import LoadingSection from "src/components/common/loading-section";
import NotFoundSection from "src/components/common/not-found-section";
import ErrorSection from "src/components/common/error-section";

export default function JobInfoPage() {
  const { id } = useParams<{ id: string }>();

  const { data: job, loading, error } = useFetch<Job>(`/jobs/${id}`);

  if (loading) return <LoadingSection text="Loading job details..." />;
  if (error) return <ErrorSection error={error} />;
  if (!job) return <NotFoundSection text="Job not found" />;

  return (
    <div className="flex flex-col flex-1 bg-white min-h-screen text-black">
      <HeaderSection job={job} />
      <ActionButtons job={job} />
      <JobDetailsSection job={job} />
    </div>
  );
}
