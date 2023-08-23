import { motion } from "framer-motion";

export const MotionMain = motion.main;

export const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: .5, // Adjust the total duration as needed
      when: "beforeChildren",
      staggerChildren: 0.3,
      ease: "easeInOut",
      staggerDirection: 1,
    },
  },
};
