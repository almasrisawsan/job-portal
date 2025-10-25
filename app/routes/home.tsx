import Hero from "components/home/Hero";
import type { Route } from "./+types/home";
import { FeaturedJobs } from "components/home/FeaturedJobsSection";
import { PopularCategories } from "components/home/PopularCategoriesSection";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>
    <Hero />
    <PopularCategories />
    <FeaturedJobs />
    </div>;
}
