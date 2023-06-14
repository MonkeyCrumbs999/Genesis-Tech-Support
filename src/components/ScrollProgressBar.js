import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useViewportScroll();
  const barWidth = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: barWidth,
        height: "4px",
        backgroundColor: "#ff6f3d",
        zIndex: 9999,
      }}
    />
  );
};

export default ScrollProgressBar;
