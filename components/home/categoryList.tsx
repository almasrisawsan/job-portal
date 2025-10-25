import { useEffect, useState } from "react";
import { type Category } from "types/category.type";
import CategoryCard from "../common/ui/categoryCard";

export default function CategoryList() {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(
        "https://68f8f8e8deff18f212b83fba.mockapi.io/categories"
      );
      const data = await res.json();
      setCategory(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-12 gap-5 container-box">
      {[
        {
          id: 1,
          name: "Frontend Development",
        },
        {
          id: 2,
          name: "Backend Development",
        },
        {
          id: 3,
          name: "Full Stack Engineering",
        },
        {
          id: 4,
          name: "DevOps / Cloud",
        },
        {
          id: 5,
          name: "UI/UX Design",
        },
        {
          id: 6,
          name: "Data Science / AI",
        },
        {
          id: 7,
          name: "Mobile Development",
        },
        {
          id: 8,
          name: "Quality Assurance (QA)",
        },
        {
          createdAt: "2025-10-22T16:24:11.852Z",
          name: "Khaled Development",
          id: "9",
        },
      ].map((category) => (
        <CategoryCard key={category.id} name={category.name} />
      ))}
    </div>
  );
}
