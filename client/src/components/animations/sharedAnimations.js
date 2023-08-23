import { motion } from "framer-motion";

export const MotionMain = motion.main;

export const zoomIn = {
  hidden: { scale: 0.9 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
      ease: "easeInOut",
      staggerDirection: 1,
    },
  },
};