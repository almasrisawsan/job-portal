import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "Job Portal" },
    { name: "description", content: "Welcome to Job Portal!" },
  ];
}

export default function Home() {
  return <Welcome />;
}