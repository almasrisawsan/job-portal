import Hero from "src/components/home/hero-section";
import type { Route } from "./+types/home";
import PopularCategories from "src/components/home/popular-categories";
import { AppAPI } from "src/services/api";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import type { Category } from "src/types/category.type";
import HeroSection from "src/components/home/hero-section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  try {
    const category = (await AppAPI.get(`/categories/`)) as Category[];
    return category;
  } catch (error: any) {
    throw new Response(error.error || "Category not found", {
      status: error.status || 404,
    });
  }
}

export default function Home() {
  const categories: Category[] = useLoaderData<typeof loader>();

  return (
    <>
      <HeroSection />
      <PopularCategories categories={categories} />
    </>
  );
}
