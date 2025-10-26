import type { Route } from "./+types/landingPage";
import Landing from "~/_components/landing/landing";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jobs Portal | Home" },
    { name: "description", content: "Find your dream job easily." },
  ];
}

export default function LandingPage() {
  return (    
    <>
        <Landing />
    </>

  );
}
