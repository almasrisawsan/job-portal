import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router";
import Button from "../components/shared/Button";
import { GetJobsByid } from "../api/api";
import { useNavigate, useLocation } from "react-router";


const DetailsJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await GetJobsByid(id);
        setJob(response.data);
      } catch (err) {
        setError("Failed to fetch job data");
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading)
    return (
      <div className="bg-gray-50 min-h-screen py-10 animate-pulse">
        <div className="container mx-auto px-4 md:px-10">
         
          <div className="h-8 bg-gray-300 rounded w-2/3 mx-auto mb-10"></div>

          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 space-y-8">
            <div className="flex justify-center items-center gap-3">
              <div className="h-10 w-32 bg-gray-300 rounded"></div>
              <div className="h-10 w-36 bg-gray-300 rounded"></div>
            </div>

            <div>
              <div className="h-6 w-40 bg-gray-300 rounded mb-3"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-11/12"></div>
                <div className="h-3 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>

            <div>
              <div className="h-6 w-32 bg-gray-300 rounded mb-3"></div>
              <ul className="space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i} className="h-3 bg-gray-200 rounded w-3/4"></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="h-6 w-20 bg-gray-300 rounded mb-3"></div>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="bg-gray-300 h-6 w-16 rounded-full"
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  if (error)
    return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!job) return <div className="text-center py-10">No job found.</div>;

  return (
    <motion.div
      className="bg-gray-50 min-h-screen py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-10">
          <motion.button
                    onClick={() => navigate(-1)}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Back
                  </motion.button>
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {job.title}
        </motion.h1>

        <motion.div
          className="mt-10 bg-white text-black rounded-2xl shadow-md p-6 md:p-10 space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex gap-2 sm:flex-nowrap justify-center items-center flex-wrap">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="rounded-md" variant="outline">
                  View Company
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="rounded-md">Apply This Job</Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-xl text-black font-semibold mb-3 pb-2">
              Job Description
            </h2>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </motion.div>

          {job.requirements && job.requirements.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-xl font-semibold mb-3 pb-2">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    {req}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {job.tags && job.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2 className="text-xl font-semibold mb-3 pb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
                  >
                    #{tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DetailsJob;
