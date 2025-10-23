import React from 'react';
import { Box, type LucideProps } from 'lucide-react';
import { categories } from './constants';
import CategoryCard from './catCard';

const AllCats = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-poppins font-bold text-4xl text-center mb-12 text-gray-900">
          Popular Categories
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category: { icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> | undefined; title: string | undefined; bgColor: string | undefined; }, index: React.Key | null | undefined) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              bgColor={category.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCats;