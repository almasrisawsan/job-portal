import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router";
import Button from "./Button";

export default function FeaturedJobs({ jobs, error, loading }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [jobs]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="bg-white py-10">
      <motion.h2
        className="text-center text-xl font-semibold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Jobs
      </motion.h2>
      {error != "" && <h1 className="text-center">Some thing be wrong </h1>}
      {loading ? (
        <div className="container mx-auto flex flex-col gap-5 px-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between animate-pulse"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

                <div className="flex flex-col gap-2">
                  <div className="h-4 bg-gray-300 rounded w-40"></div>
                  <div className="h-3 bg-gray-200 rounded w-24"></div>
                  <div className="flex gap-3 mt-2">
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                    <div className="h-3 bg-gray-200 rounded w-12"></div>
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 h-8 w-28 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="container mx-auto flex flex-col gap-5 px-4"
          >
            {currentJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                className="bg-white shadow-sm rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  {job.companyUrl ? (
                    <img
                      src={job.companyUrl}
                      alt={job.company}
                      className="w-12 h-12 rounded-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center"
                    style={{ display: job.companyUrl ? "none" : "flex" }}
                  >
                    <span className="text-gray-500 font-semibold text-sm">
                      {job.company ? job.company.charAt(0).toUpperCase() : "?"}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.company}</p>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-primary" />{" "}
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} className="text-primary" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={14} className="text-primary" />{" "}
                        {job.salary}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  className="rounded-md"
                  onClick={() => navigate(`/jobs/${job.id}`)}
                >
                  View Details
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {!loading && jobs.length > jobsPerPage && (
        <div className="container mx-auto px-4 mt-8 flex justify-center items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 rounded-md transition ${
                    currentPage === pageNum
                      ? "bg-primary text-white"
                      : "border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
}
