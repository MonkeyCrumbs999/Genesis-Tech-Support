// TVMounting.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TVMounting() {
  return (
    <motion.div
      className="flex flex-col h-full border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden py-20 container mx-auto px-8 py-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="flex-1 p-6 sm:p-6">
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
          the stress out of the process. We'll also guide you through its
          features and make sure you're comfortable using it before we leave.
        </motion.p>
      </div>
      <div className="p-6">
        <Link
          to="/services/tv-mounting"
          className="inline-block w-full bg-genesis-blue text-white text-center px-4 py-2 rounded transition-colors duration-800 ease-in-out hover:bg-genesis-blue-hover">
          Explore
        </Link>
      </div>
    </motion.div>
  );
}
