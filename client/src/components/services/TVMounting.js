import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function TVMounting() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col items-start border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden py-8 container mx-auto px-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <motion.button
        onClick={() => navigate(-1)}
        className="mb-4 px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}>
        Go Back
      </motion.button>

      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-4 font-oswald uppercase"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}>
        TV Mounting & Setup
      </motion.h2>

      <motion.p
        className="text-base text-gray-600"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}>
        From helping you choose the perfect spot for your new smart TV, to
        expertly mounting it and setting it up with all your devices, we take
        the stress out of the process. We'll also guide you through its features
        and make sure you're comfortable using it before we leave.
      </motion.p>
    </motion.div>
  );
}
