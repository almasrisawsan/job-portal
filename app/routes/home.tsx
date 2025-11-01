import HeroSection from "src/components/home/hero-section";
import PopularCategories from "src/components/home/category/popular-categories";
import FeaturedJobs from "src/components/home/featured-jobs/featured-jobs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCategories />
      <FeaturedJobs />
    </>
  );
}
