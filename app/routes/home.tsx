// src/routes/home.tsx
import type { Route } from "./+types/home";
import PopularCategories from "src/components/home/popular-categories";
import HeroSection from "src/components/home/hero-section";
import { FeaturedJobs } from "src/components/home/FeaturedJobsSection";
import { AppAPI } from "src/services/api";
import { useLoaderData } from "react-router";
import type { Category } from "src/types/category.type";
import type { Job } from "src/types/jobs.type";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Job Finder | Home" },
    { name: "description", content: "Browse featured jobs and popular categories." },
  ];
}

// ✅ Tell TypeScript what this loader returns
export async function loader() {
  try {
    const [categories, jobs] = await Promise.all([
      AppAPI.get(`/categories/`),
      AppAPI.get(`/jobs/`),
    ]);

    // Explicitly return with correct structure
    return { categories, jobs } as { categories: Category[]; jobs: Job[] };
  } catch (error: any) {
    throw new Response(error.error || "Data not found", {
      status: error.status || 404,
    });
  }
}

export default function Home() {
  // ✅ Type-safe loader data
  const { categories, jobs } = useLoaderData<typeof loader>();

  return (
    <>
      <HeroSection />
      <PopularCategories categories={categories} />
      <FeaturedJobs jobs={jobs} />
    </>
  );
}
