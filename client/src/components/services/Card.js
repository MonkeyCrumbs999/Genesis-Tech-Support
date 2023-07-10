//these are used in the rest of the 'services' components. this is the visual card modularity offered to them

import React from "react";
import { motion } from "framer-motion";

const Card = ({ navigateBack, title, description }) => (
  <motion.div
    className="flex justify-center items-start min-h-screen py-32 px-4"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}>
    <div className="w-full max-w-lg min-h-[400px] p-8 border-2 border-gray-200 rounded-lg shadow-lg bg-white">
      <motion.button
        onClick={navigateBack}
        className="mb-4 px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}>
        Go Back
      </motion.button>

      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-4 font-oswald uppercase"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}>
        {title}
      </motion.h2>

      <motion.p
        className="text-base text-gray-600"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}>
        {description}
      </motion.p>
    </div>
  </motion.div>
);

export default Card;
