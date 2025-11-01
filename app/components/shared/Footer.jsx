import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-primary text-white py-6 mt-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto text-center ">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          &copy; 2025 Jobs Portal. Designed By Wilson Kinyua.
        </motion.p>
      </div>
    </motion.footer>
  );
}
