import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Index = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch("https://68f8f8e8deff18f212b83fba.mockapi.io/categories")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-[#F6F7FA] max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-xl font-semibold">Loading categories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#F6F7FA] max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-xl font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F6F7FA] max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Popular Categories</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id}>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-[#eff6f2] rounded-full p-5">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3353 16V7.99999C21.3349 7.64927 21.2408 7.3048 21.0625 7.00116C20.8842 6.69751 20.6279 6.44536 20.3193 6.26999L13.2075 2.26999C12.8987 2.09446 12.5483 2.00204 12.1916 2.00204C11.8349 2.00204 11.4845 2.09446 11.1756 2.26999L4.06386 6.26999C3.75527 6.44536 3.49896 6.69751 3.32064 7.00116C3.14232 7.3048 3.04826 7.64927 3.0479 7.99999V16C3.04826 16.3507 3.14232 16.6952 3.32064 16.9988C3.49896 17.3025 3.75527 17.5546 4.06386 17.73L11.1756 21.73C11.4845 21.9055 11.8349 21.9979 12.1916 21.9979C12.5483 21.9979 12.8987 21.9055 13.2075 21.73L20.3193 17.73C20.6279 17.5546 20.8842 17.3025 21.0625 16.9988C21.2408 16.6952 21.3349 16.3507 21.3353 16Z"
                    stroke="#338573"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.61974 4.20999L12.1916 6.80999L16.7634 4.20999"
                    stroke="#338573"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.61974 19.79V14.6L3.0479 12"
                    stroke="#338573"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.3353 12L16.7634 14.6V19.79"
                    stroke="#338573"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.32221 6.95999L12.1916 12.01L21.061 6.95999"
                    stroke="#338573"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.1916 22.08V12"
                    stroke="#338573"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-center">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
