import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; // Import AuthContext
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";

function MyAccount() {
  const { user } = useContext(AuthContext); // Use the context to get the user state

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5 },
    },
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
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <h2 className="text-3xl font-bold">
        Welcome to your Profile, {user.username}!
      </h2>
      <div className="mt-10 w-full max-w-md px-8 py-6 bg-gray-100 border border-gray-200 shadow-md rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Your Information</h2>
            <p className="mt-2 text-sm text-gray-600">
              Your registered email is: {user.email}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Your Appointments</h2>
          {/* Replace with user's appointments */}
          <p className="mt-2 text-sm text-gray-600">
            No appointments scheduled yet.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Your Schedules</h2>
          {/* Replace with user's schedules */}
          <p className="mt-2 text-sm text-gray-600">No schedules set yet.</p>
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
