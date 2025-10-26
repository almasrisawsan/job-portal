import type { Job } from "src/types/jobs.type";
import { useLoaderData, type LoaderFunctionArgs, Link } from "react-router";
import { AppAPI } from "src/services/api";
import HeaderSection from "src/components/jobs/job-info/header-section";
import ActionButtons from "src/components/jobs/job-info/action-buttons";
import JobDetailsSection from "src/components/jobs/job-info/job-details-section";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;
  if (!id) throw new Response("Job ID not provided", { status: 400 });

  try {
    const jobRes = await AppAPI.get(`/jobs/${id}`);
    const job = jobRes.data as Job;

    return job;
  } catch (error: any) {
    throw new Response(error.error || "Job not found", {
      status: error.status || 404,
    });
  }
}

export default function JobInfoPage() {
  const job = useLoaderData<typeof loader>();

  if (!job) return <div className="p-4">Job not found</div>;

  return (
    <div className="flex flex-col flex-1 bg-white min-h-screen text-black">
      <HeaderSection job={job} />
      <ActionButtons job={job} />
      <JobDetailsSection job={job} />
    </div>
  );
}
