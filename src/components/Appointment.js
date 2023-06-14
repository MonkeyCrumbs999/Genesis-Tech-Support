import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CircularProgress from "@mui/material/CircularProgress";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "5%",
        right: "5%",
        zIndex: "2000",
        display: isVisible ? "flex" : "none",
      }}>
      <ArrowUpwardIcon />
    </IconButton>
  );
}

function Appointment() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Schedule an Appointment
      </h2>
      <p className="text-center mb-4">
        Use the booking interface provided by Square below to schedule your
        appointment. Click 'Sign In' if you already have a Square account.
      </p>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "800px",
          }}>
          <CircularProgress />
        </div>
      )}
      <iframe
        title="Square Appointment"
        src="https://square.site/appointments/buyer/widget/fih96w2xgu6ntr/LBRYAMQHGS40M"
        width="100%"
        height="800px"
        style={{
          border: "none",
          overflow: "hidden",
          display: loading ? "none" : "block",
        }}
        onLoad={() => setLoading(false)}
      />
      <ScrollTop />
    </div>
  );
}

export default Appointment;
