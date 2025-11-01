import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import icon from "../../welcome/icon.png";
import { useNavigate } from "react-router";
import { GetCatogries } from "../../api/api";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let ignor = false;
    const fetchCategories = async () => {
      try {
        const response = await GetCatogries();
        setCategories(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (!ignor) fetchCategories();
    return () => {
      ignor = true;
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="bg-gray-100 py-10">
      <motion.h2
        className="text-center text-xl mb-8 text-black font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Popular Categories
      </motion.h2>
      {error != "" && <h1 className="text-center">Some thing be wrong </h1>}
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
        <motion.div
          className="mx-auto grid grid-cols-2 sm:grid-cols-3 container md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.div
              onClick={() => navigate(`/jobsbycatogries/${cat.id}`, { state: { categoryName: cat.name } })}
              key={cat.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition flex flex-col items-center justify-center"
            >
              <motion.div
                className="bg-primary/35 p-4 rounded-full mb-4"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img src={icon} alt="category icon" />
              </motion.div>
              <p className="text-gray-800 font-medium text-center">
                {cat.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
