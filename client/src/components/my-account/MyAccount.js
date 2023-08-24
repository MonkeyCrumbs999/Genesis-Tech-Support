import AccountNavigation from "./AccountNavigation";
import AccountMainContent from "./AccountMainContent";
import Chatbot from "./Chatbot";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "../../contexts/AuthContext";

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
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start p-4 sm:p-6 md:p-8 lg:p-12 pt-28 sm:pt-24 md:pt-28 lg:pt-32 gap-8 sm:gap-6 md:gap-8 lg:gap-24 xl:gap-32"
    variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.5 } },
      }}
      initial="hidden"
      animate="visible">
      <AccountNavigation
        expandAppointments={expandAppointments}
        handleExpandAppointments={handleExpandAppointments}
        expandGuides={expandGuides}
        handleExpandGuides={handleExpandGuides}
        expandInfo={expandInfo}
        handleExpandInfo={handleExpandInfo}
        expandHome={expandHome}
        handleExpandHome={handleExpandHome}
      />
     <AccountMainContent
  user={user}
  renderTuneupSection={renderTuneupSection}
  tuneupDifference={tuneupDifference}
/>
      <Chatbot />
    </motion.div>
  );
}

export default MyAccount;
