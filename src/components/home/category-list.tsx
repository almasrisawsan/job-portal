import CategoryCard from "../ui/category-card";
import type { Category } from "src/types/category.type";

export default function CategoryList({
  categories,
}: {
  categories: Category[];
}) {
  if (!categories) return <div className="p-4">Categories not found</div>;

  return (
    <div className="gap-5 lg:gap-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 container-box">
      {categories.map((category) => (
        <CategoryCard key={category.id} name={category.name} />
      ))}
    </div>
  );
}
