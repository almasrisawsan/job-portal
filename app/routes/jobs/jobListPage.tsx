import JobList from "~/_components/job/jobs-list/jobList";
import type { Route } from "./+types/jobListPage";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jobs Portal | Job List" },
    { name: "description", content: "View All Jobs List on Jobs Portal." },
  ];
}
export default function JobListPage() {
  return <JobList />;
}
