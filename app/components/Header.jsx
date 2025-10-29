import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 w-full fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <motion.h1
            className="text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            JobsPortal
          </motion.h1>
        </Link>

        <motion.div className="flex gap-2 items-center">
          <h2 className="text-primary text-sm font-medium">Dashboard</h2>

          <motion.a
            href={"/jobs/new"}
            className="rounded-md bg-primary text-white p-3"
            size="md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Post a job
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}
