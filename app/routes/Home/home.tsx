import type { Route } from "./+types/home";
import HeroSection from "./components/HeroSection";
import FeaturedJobs from "./components/FeaturedJobs";
import PopularCategories from "./components/PopularCategories";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PopularCategories />
      <FeaturedJobs />
    </div>
  );
}
