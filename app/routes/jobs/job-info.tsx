import type { Job } from "src/types/jobs.type";
import { useParams } from "react-router";
import HeaderSection from "src/components/jobs/job-info/header-section";
import ActionButtons from "src/components/jobs/job-info/action-buttons";
import JobDetailsSection from "src/components/jobs/job-info/job-details-section";
import NotFoundSection from "src/components/common/not-found-section";
import { useJobsStore } from "src/store/jobsStore";

export default function JobInfoPage() {
  const { id } = useParams<{ id: string }>();
  const { getJob } = useJobsStore();

  // Get the job from the store
  if (!id) return <NotFoundSection text="Job id is unknown" />;

  const job = getJob(id);

  if (!job) return <NotFoundSection text="Job not found" />;

  return (
    <div className="flex flex-col flex-1 bg-white min-h-screen text-black">
      <HeaderSection job={job} />
      <ActionButtons job={job} />
      <JobDetailsSection job={job} />
    </div>
  );
}
