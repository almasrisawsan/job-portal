import { FileSearchOutlined } from "@ant-design/icons";
import CategoryCard from "../ui/category-card";
import type { Category } from "src/types/category.type";

export default function CategoryList({
  categories,
}: {
  categories: Category[];
}) {
  const hasCategories = categories && categories.length > 0;

  return (
    <>
      {hasCategories ? (
        <div className="gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 px-4 sm:px-8 md:px-12 py-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} name={category.name} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center bg-gray-50 py-12 border border-gray-200 border-dashed rounded-md text-center">
          <FileSearchOutlined className="mb-3 text-primary text-5xl" />
          <p className="font-semibold text-gray-700 text-lg">
            No categories found
          </p>
          <p className="mt-1 text-gray-500 text-sm">
            Check back later for new opportunities.
          </p>
        </div>
      )}
    </>
  );
}
