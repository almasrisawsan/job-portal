import React from "react";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Catogoies";
import FeaturedJobs from "../components/FeaturedJobs";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <FeaturedJobs />
    </div>
  );
}
