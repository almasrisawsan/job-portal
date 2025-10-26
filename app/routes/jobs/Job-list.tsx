import { useLoaderData } from "react-router";
import JobListSection from "src/components/jobs/job-list/job-list-section";
import { AppAPI } from "src/services/api";
import type { Job } from "src/types/jobs.type";

export async function loader() {
  try {
    const jobs = (await AppAPI.get(`/jobs`)) as Job[];
    return jobs;
  } catch (error: any) {
    throw new Response(error.error || "Jobs not found", {
      status: error.status || 404,
    });
  }
}

export default function JobListPage() {
  const jobs: Job[] = useLoaderData<typeof loader>();

  return <JobListSection jobs={jobs} />;
}
