import { useEffect, useState } from "react";
import { Package } from "lucide-react";
function PopularCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://68f8f8e8deff18f212b83fba.mockapi.io/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-8">
          Popular Categories
        </h2>
        {loading ? <CategorySkeleton /> : <CategoryList categories={categories} />}
      </div>
    </section>
  );
}

function CategorySkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-sm animate-pulse"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
      ))}
    </div>
  );
}

function CategoryList({ categories }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
function CategoryItem({ category }) {
  return (
    <div
      key={category.id}
      className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#e6fffa] text-[#338573] mb-3">
        <Package size={28} strokeWidth={2.5} />
      </div>
      <p className="text-gray-700 font-medium">{category.name}</p>
    </div>
  );
}
export default PopularCategories;
