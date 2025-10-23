import type { Route } from "./+types/home";
import Navbar from "../components//Navbar";
import Hero from "../components//Hero";
import Categories from "../components//Categories";
import Jobs from "../components//Jobs";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Jobs />
    </>
  );
}
