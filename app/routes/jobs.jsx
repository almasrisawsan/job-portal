import JobsList from "../Pages/JobsList";

export function meta() {
  return [
    { title: "Jobs List" },
    { name: "description", content: "Browse all available jobs" },
  ];
}

export default function Jobs() {
  return <JobsList />;
}