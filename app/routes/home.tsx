import HeroSection from "src/components/home/hero-section";
import PopularCategories from "src/components/home/popular-categories";
import FeaturedJobs from "src/components/home/featured-jobs";
import { AppAPI } from "src/services/api";
import { useLoaderData } from "react-router";
import type { Category } from "src/types/category.type";
import type { Job } from "src/types/jobs.type";

export async function loader() {
  try {
    const [categoriesRes, jobsRes] = await Promise.all([
      AppAPI.get("/categories/"),
      AppAPI.get("/jobs"),
    ]);

    const categories = categoriesRes.data as Category[];
    const jobs = jobsRes.data as Job[];

    return { categories, jobs };
  } catch (error: any) {
    throw new Response(error.error || "Failed to load data", {
      status: error.status || 500,
    });
  }
}

export default function Home() {
  const { categories, jobs } = useLoaderData<typeof loader>();

  return (
    <>
      <HeroSection />
      <PopularCategories categories={categories} />
      <FeaturedJobs jobs={jobs} />
    </>
  );
}
