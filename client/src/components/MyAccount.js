import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "../contexts/AuthContext";
import { HiChevronDown } from "react-icons/hi";

function MyAccount() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [lastTuneup, setLastTuneup] = useState(null);
  const [expandAppointments, setExpandAppointments] = useState(false);
  const [expandGuides, setExpandGuides] = useState(false);
  const [expandInfo, setExpandInfo] = useState(false);
  const [expandHome, setExpandHome] = useState(false);

  useEffect(() => {
    setLastTuneup("2022-05-15");

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const tuneupDifference = lastTuneup
    ? (new Date().getTime() - new Date(lastTuneup).getTime()) /
      (1000 * 60 * 60 * 24 * 30)
    : null;

  const renderTuneupSection = () => {
    if (tuneupDifference === null) {
      return "Schedule Your First PC Tuneup!";
    } else if (tuneupDifference >= 3) {
      return `Looks like your last tuneup was ${Math.floor(
        tuneupDifference
      )} months ago, I think it's time to schedule a PC tuneup!`;
    } else {
      return "Looks like your computer is freshly tuned up, no need for service at this time!";
    }
  };

  const handleExpandAppointments = () => {
    setExpandAppointments(!expandAppointments);
  };

  const handleExpandGuides = () => {
    setExpandGuides(!expandGuides);
  };

  const handleExpandInfo = () => {
    setExpandInfo(!expandInfo);
  };

  const handleExpandHome = () => {
    setExpandHome(!expandHome);
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
      className="flex flex-row items-start h-screen p-12 pt-32 pr-32 gap-32"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.5 } },
      }}
      initial="hidden"
      animate="visible">
      {/* left column */}
      <div className="w-1/8 bg-gray-100 border border-gray-200 shadow-md rounded-lg flex flex-col min-h-full">
        <ul className="p-8 flex flex-col justify-between space-y-8 h-full text-xl font-aoboshi">
          <li className="pt-8">Account Dashboard</li>
          <li
            className={`${expandAppointments ? "pb-2" : "pb-2"}`}
            onClick={handleExpandAppointments}>
            <div className="flex items-center">
              My Appointments
              <HiChevronDown
                className={`ml-auto transition-transform ${
                  expandAppointments ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {expandAppointments && (
              <motion.ul
                className={`space-y-8 pl-8`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ ease: "easeInOut", duration: 0.3 }}>
                <li className="pt-2 text-sm">Upcoming Appointments</li>
                <li className="text-sm">Previous Appointments</li>
              </motion.ul>
            )}
          </li>
          <li
            className={`${expandGuides ? "pb-2" : "pb-2"}`}
            onClick={handleExpandGuides}>
            <div className="flex items-center">
              My Personal Guides
              <HiChevronDown
                className={`ml-auto transition-transform ${
                  expandGuides ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {expandGuides && (
              <motion.ul
                className={`space-y-8 pl-8`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ ease: "easeInOut", duration: 0.3 }}>
                <li className="pt-2 text-sm">Guide 1</li>
                <li className="text-sm">Guide 2</li>
              </motion.ul>
            )}
          </li>
          <li
            className={`${expandInfo ? "pb-2" : "pb-2"}`}
            onClick={handleExpandInfo}>
            <div className="flex items-center">
              My Info
              <HiChevronDown
                className={`ml-auto transition-transform ${
                  expandInfo ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {expandInfo && (
              <motion.ul
                className={`space-y-8 pl-8`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ ease: "easeInOut", duration: 0.3 }}>
                <li className="pt-2 text-sm">Info 1</li>
                <li className="text-sm">Info 2</li>
              </motion.ul>
            )}
          </li>
          <li
            className={`${expandHome ? "pb-2" : "pb-2"}`}
            onClick={handleExpandHome}>
            <div className="flex items-center">
              My Home
              <HiChevronDown
                className={`ml-auto transition-transform ${
                  expandHome ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {expandHome && (
              <motion.ul
                className={`space-y-8 pl-8 ${expandHome ? "block" : "hidden"}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ ease: "easeInOut", duration: 0.3 }}>
                <li className="pt-2 text-sm">Home 1</li>
                <li className="text-sm">Home 2</li>
              </motion.ul>
            )}
          </li>
        </ul>
      </div>
      {/* main container */}
      <div className="w-1/2 flex flex-col items-start justify-start">
        <h2 className="text-4xl font-bold">
          Welcome to your Profile, {user.username}!
        </h2>
        <div className="mt-10 w-full max-w-xl px-8 py-6 bg-gray-100 border border-gray-200 shadow-md rounded-lg min-w-full">
          <div>
            <h2 className="text-3xl font-semibold">
              Your Upcoming Appointments
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              No upcoming appointments scheduled yet.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-semibold">
              Your Previous Appointments
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              No previous appointments available.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-semibold">
              Is It Time For A PC Tuneup?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {renderTuneupSection()}
            </p>
            {tuneupDifference === null || tuneupDifference >= 3 ? (
              <div className="mt-10">
                <Link
                  to="/appointment"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                  Schedule Appointment
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* right column for chatbot */}
      <div className="w-1/8 bg-gray-100 border border-gray-200 shadow-md rounded-lg flex flex-col min-h-full p-4">
        <h2 className="text-xl font-bold mb-4">Genesis Support</h2>
        <p className="text-sm text-gray-600 mb-4">
          Have any questions or need support? Chat with us here!
        </p>
        <div className="bg-white border border-gray-200 rounded-lg flex flex-col p-4 flex-grow">
          <p className="text-sm text-gray-600 mb-2">
            Chatbot widget will be here.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default MyAccount;
