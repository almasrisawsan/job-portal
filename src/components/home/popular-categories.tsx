import type { Category } from "src/types/category.type";
import SectionTitle from "../ui/section-title";
import CategoryList from "./category-list";

export default function PopularCategories({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <section className="flex flex-col justify-center gap-5 bg-secondary-light py-8">
      <SectionTitle title="Popular Categories" />
      <CategoryList categories={categories} />
    </section>
  );
}
