import React, { useEffect, useState } from "react";
import { Box } from "lucide-react";
import CategoryCard from "./catCard";

type Category = {
  id: string;
  name: string;
};

const AllCats = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://68fb3f0394ec960660253db2.mockapi.io/categories")
      .then(res => res.json())
      .then((data: Category[]) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-poppins font-bold text-4xl text-center mb-12 text-gray-900">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}       
              title={category.name}   
              icon={Box}              
              bgColor="bg-teal-100"  
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCats;