import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { MotionMain, fadeIn } from "./animations/sharedAnimations";
import { motion, AnimatePresence } from "framer-motion";

function Appointment() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showRedirectMessage, setShowRedirectMessage] = useState(false); // Added state for redirect message

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
    setShowRedirectMessage(true); // Show redirect message when modal is closed
  };

  return (
    <MotionMain variants={fadeIn} initial="hidden" animate="visible">
      <main className="pt-[10rem] p-4 min-h-[50vh]">
        <h2 className="text-4xl text-center mb-4">Schedule an Appointment</h2>
        <p className="text-center mb-4">
          Use the booking interface provided by Square below to schedule your appointment.
        </p>
        <div className="flex justify-center">
          <button
            className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full"
            onClick={() => {
              setShowModal(true);
              setLoading(true);
              setShowRedirectMessage(false); // Hide redirect message when modal is opened
            }}
          >
            Open
          </button>
        </div>
        {showRedirectMessage && (
  <p className="text-center mt-4">
    Please visit the <a className="text-blue-500" href="/my-account">My Account</a> page to view your appointments.
  </p>
)}

        <AnimatePresence>
          {showModal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              onClick={handleCloseModal}
            >
              <motion.div
                className="relative bg-white rounded-lg w-full h-full md:w-3/4 md:h-3/4"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
              >
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-white">
                    <CircularProgress />
                  </div>
                )}
                <button
                  className={`absolute top-2 left-1/2 md:top-[-2rem] md:left-auto md:right-[-2rem] transform md:transform-none -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-red-600 text-white focus:outline-none focus:ring focus:ring-offset-2 focus:ring-black`}
                  onClick={handleCloseModal}
                >
                  X
                </button>
                <iframe
                  title="Square Appointment"
                  src="https://square.site/appointments/buyer/widget/fih96w2xgu6ntr/LBRYAMQHGS40M"
                  className="w-full h-full"
                  style={{
                    border: "none",
                    display: loading ? "none" : "block",
                  }}
                  onLoad={() => setLoading(false)}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </MotionMain>
  );
}

export default Appointment;
