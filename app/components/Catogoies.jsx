import React, { useEffect, useState } from "react";
import axios from "axios";
import icon from "../welcome/icon.png";
import Loading from "./Loading";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://68f8f8e8deff18f212b83fba.mockapi.io/categories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-center text-xl  mb-8 text-black font-bold">
        Popular Categories
      </h2>

      {loading ? (
        <Loading />
      ) : (
        <div className=" mx-auto grid grid-cols-2 sm:grid-cols-3 container md:grid-cols-4 lg:grid-cols-5 gap-6 ">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center justify-center"
            >
              <div className="bg-primary/35 p-4 rounded-full mb-4">
                <img src={icon} />
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
