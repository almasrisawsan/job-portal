import EditPage from "../Pages/EditPage";

export function meta() {
  return [
    { title: "Job Form" },
    { name: "description", content: "Add or edit a job" },
  ];
}

export default function Form() {
  return <EditPage />;
}