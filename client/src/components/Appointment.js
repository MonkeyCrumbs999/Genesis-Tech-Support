import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { MotionMain, fadeIn } from "./animations/sharedAnimations";

function Appointment() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionMain variants={fadeIn} initial="hidden" animate="visible">
      <main className="pt-28 p-4">
        <h2 className="text-4xl text-center mb-4">Schedule an Appointment</h2>
        <p className="text-center mb-4">
          Use the booking interface provided by Square below to schedule your
          appointment. Click 'Sign In' if you already have a Square account.
        </p>
        {loading && (
          <div className="flex justify-center items-center h-screen">
            <CircularProgress />
          </div>
        )}
        <div className="pt-4">
          <iframe
            title="Square Appointment"
            src="https://square.site/appointments/buyer/widget/fih96w2xgu6ntr/LBRYAMQHGS40M"
            width="100%"
            height="1400px"
            style={{
              border: "none",
              overflow: "hidden",
              display: loading ? "none" : "block",
            }}
            onLoad={() => setLoading(false)}
          />
        </div>
      </main>
    </MotionMain>
  );
}

export default Appointment;
