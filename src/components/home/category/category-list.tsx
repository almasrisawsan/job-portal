import CategoryCard from "./category-card";
import type { Category } from "src/types/category.type";
import CategoriesNotFound from "./categories-not-found";

export default function CategoryList({
  categories,
}: {
  categories: Category[];
}) {
  const hasCategories = categories && categories.length > 0;

  return (
    <>
      {hasCategories ? (
        <div className="gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 sm:px-8 md:px-12 py-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} name={category.name} />
          ))}
        </div>
      ) : (
        <CategoriesNotFound />
      )}
    </>
  );
}
