import { PopularCategories } from "components/home/PopularCategoriesSection";
import type { Route } from "./+types/home";
import { FeaturedJobs } from "components/home/FeaturedJobsSection";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>
    <PopularCategories />
    <FeaturedJobs />
  </div>;
}
