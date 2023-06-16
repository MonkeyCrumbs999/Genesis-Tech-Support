import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollTopArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "10px",
        left: "10px", // change this from right to left
      }}
      color="primary"
      aria-label="scroll to top">
      <ArrowUpwardIcon />
    </IconButton>
  );
};

export default ScrollTopArrow;
