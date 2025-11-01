import CreateJobPage from "../Pages/CreateJobPage"

export function meta() {
  return [
    { title: "Create Job" },
    { name: "description", content: "Create a new job posting" },
  ];
}

export default function Form() {
  return <CreateJobPage />;
}