import React, { useMemo } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useViewportScroll();
  const barWidth = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const progressBarStyle = useMemo(() => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: barWidth,
    height: "4px",
    backgroundColor: "#ff6f3d",
    zIndex: 9999,
  }), [barWidth]);

  return (
    <motion.div
      style={progressBarStyle}
    />
  );
};

export default React.memo(ScrollProgressBar);
