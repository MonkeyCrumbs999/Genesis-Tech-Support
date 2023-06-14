import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      style={{ position: "fixed", bottom: "5%", right: "5%", zIndex: "1000" }}>
      <ArrowUpwardIcon />
    </IconButton>
  );
}

function Appointment() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Schedule an Appointment
      </h2>
      <p className="text-center mb-4">
        Use the booking interface provided by Square below to schedule your
        appointment. Click 'Sign In' if you already have a Square account.
      </p>
      <iframe
        title="Square Appointment"
        src="https://square.site/appointments/buyer/widget/fih96w2xgu6ntr/LBRYAMQHGS40M"
        width="100%"
        height="800px"
        style={{ border: "none", overflow: "hidden" }}
      />
      <ScrollTop />
    </div>
  );
}

export default Appointment;
