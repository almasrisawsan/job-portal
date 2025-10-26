
import JobDetails from '~/_components/job/job-details/jobDetails'
import type { Route } from './+types/jobDetailsPage';
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jobs Portal | Job Details" },
    { name: "description", content: "View Job Details on Jobs Portal." },
  ];
}
const JobDetailsPage = () => {
  return (
    <JobDetails />
  )
}

export default JobDetailsPage