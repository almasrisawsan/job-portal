import EditPage from "../Pages/EditPage";

export function meta() {
  return [
    { title: "Edit Job" },
    { name: "description", content: "Edit job posting" },
  ];
}

export default function Edit() {
  return <EditPage />;
}
