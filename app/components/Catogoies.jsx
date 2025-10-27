import React, { useEffect, useState } from "react";
import icon from "../welcome/icon.png";
import { useNavigate } from "react-router";
import { GetCatogries } from "../api/api";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError]=useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await GetCatogries();
        setCategories(response.data);
      } catch (error) {
        setError(error)
        console.error("Error0 fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-center text-xl mb-8 text-black font-bold">
        Popular Categories
      </h2>
    {error!=""&&
    <h1>Some thing be wrong </h1>}
      {loading ? (
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 container md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center animate-pulse"
            >
              <div className="bg-gray-300 h-16 w-16 rounded-full mb-4"></div>
              <div className="bg-gray-300 h-4 w-24 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 container md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div
              onClick={() => navigate(`/jobsbycatogries/${cat.id}`)}
              key={cat.id}
              className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition flex flex-col items-center justify-center"
            >
              <div className="bg-primary/35 p-4 rounded-full mb-4">
                <img src={icon} alt="category icon" />
              </div>
              <p className="text-gray-800 font-medium text-center">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
