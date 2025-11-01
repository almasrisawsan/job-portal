import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router";
import { CreateJob, UpdateJob } from "../api/api";
import JobForm from "../components/add-job/JobForm";
import Button from "../components/shared/Button";

export default function CreateJobPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { job, isEdit } = location.state || {};

  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(null);
  const [successJobId, setSuccessJobId] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log("CreateJobPage mounted - triggering animation");
    setIsMounted(true);
  }, []);

  const handleSubmit = async (formData) => {
    setCreating(true);
    setError(null);
    try {
      if (isEdit && job) {
        // Update existing job
        await UpdateJob(job.id, formData);
        setSuccessJobId(job.id);
      } else {
        // Create new job
        const response = await CreateJob(formData);
        setSuccessJobId(response.data.id);
      }
    } catch (err) {
      setError(err.message);
      console.error(isEdit ? "Error updating job:" : "Error creating job:", err);
    } finally {
      setCreating(false);
    }
  };
  return (
    <motion.div
      className="container mx-auto py-8 min-h-screen"
      initial={false}
      animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            className="bg-red-50 border border-red-500 text-red-700 px-4 py-3 rounded mb-4 max-w-xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <strong className="font-bold">Error: </strong>
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {successJobId && (
          <motion.div
            className="bg-teal-50 border border-teal-500 text-teal-700 px-6 py-4 rounded-lg mb-6 max-w-xl mx-auto mt-24"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <motion.h3
              className="font-bold text-lg mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {isEdit ? "Job Updated Successfully!" : "Job Created Successfully!"}
            </motion.h3>
            <motion.p
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {isEdit
                ? "Your job posting has been updated successfully."
                : "Your job posting has been created and is now live."}
            </motion.p>
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigate(`/jobs/${successJobId}`)}
                  className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-md text-white"
                >
                  View Job
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => {
                    if (isEdit) {
                      navigate(-1);
                    } else {
                      setSuccessJobId(null);
                      setError(null);
                    }
                  }}
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-700/70 px-6 py-2 rounded-md"
                >
                  {isEdit ? "Back to Jobs" : "Create Another Job"}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!successJobId && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <JobForm
            initialData={isEdit && job ? job : {}}
            onSubmit={handleSubmit}
            submitButtonText={
              creating
                ? isEdit
                  ? "Updating..."
                  : "Creating..."
                : isEdit
                ? "Update Job"
                : "Post Job"
            }
            title={isEdit ? "Edit Job" : "Create a Job"}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
