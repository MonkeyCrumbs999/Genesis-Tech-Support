import { motion } from "framer-motion";

export const MotionMain = motion.main;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: .2,
      ease: "easeInOut",
    },
  },
};