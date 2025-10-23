import DetailsJob from "../Pages/DetailsJob";

export function meta() {
  return [
    { title: "Job Details" },
    { name: "description", content: "View job details" },
  ];
}

export default function Details() {
  return <DetailsJob />;
}
