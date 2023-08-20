import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";

function MyAccount() {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState([]); // To store appointments
  const [pdfGuides, setPdfGuides] = useState([]); // To store PDF guides

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Fetch user's appointments from API
    // fetchAppointments();

    // Fetch user's PDF guides from API
    // fetchPdfGuides();

    return () => clearTimeout(timer);
  }, []);

  // Example function to fetch appointments
  const fetchAppointments = () => {
    // Call the Square Bookings API or your own API to fetch appointments
    // setAppointments(appointmentsData);
  };

  // Example function to fetch PDF guides
  const fetchPdfGuides = () => {
    // Call your API to fetch PDF guides
    // setPdfGuides(pdfGuidesData);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-start h-screen p-4 pt-32"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.5 } },
      }}
      initial="hidden"
      animate="visible">
      <h2 className="text-3xl font-bold">
        Welcome to your Profile, {user.username}!
      </h2>
      <div className="mt-10 w-full max-w-md px-8 py-6 bg-gray-100 border border-gray-200 shadow-md rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Your Information</h2>
          <p className="mt-2 text-sm text-gray-600">
            Your registered email is: {user.email}
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Your Appointments</h2>
          {/* Display user's appointments */}
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <div key={appointment.id}>
                {/* Display appointment details */}
                <button
                  onClick={() => {
                    /* Reschedule logic */
                  }}>
                  Reschedule
                </button>
                <button
                  onClick={() => {
                    /* Cancel logic */
                  }}>
                  Cancel
                </button>
              </div>
            ))
          ) : (
            <p className="mt-2 text-sm text-gray-600">
              No appointments scheduled yet.
            </p>
          )}
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Your PDF Guides</h2>
          {/* Display user's PDF guides */}
          {pdfGuides.length > 0 ? (
            pdfGuides.map((guide) => (
              <div key={guide.id}>
                {/* Display PDF guide details */}
                <a href={guide.url} download>
                  Download
                </a>
              </div>
            ))
          ) : (
            <p className="mt-2 text-sm text-gray-600">
              No PDF guides available yet.
            </p>
          )}
        </div>
        <div className="mt-10">
          <Link
            to="/appointment"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Schedule Appointment
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default MyAccount;
