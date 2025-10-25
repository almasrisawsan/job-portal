import Hero from "components/home/Hero";
import type { Route } from "./+types/home";
import PopularCategories from "components/home/PopularCategories";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCategories />
    </>
  );
}
