import type { Route } from "./+types/home";
import Hero from "../components//Hero";
import Categories from "../components/Categories";
import Jobs from "../components/Jobs";
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
      <Categories />
      <Jobs />
    </>
  );
}
