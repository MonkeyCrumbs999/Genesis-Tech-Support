import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function AccountNavigation() {
  const [expandAppointments, setExpandAppointments] = useState(false);
  const [expandGuides, setExpandGuides] = useState(false);
  const [expandInfo, setExpandInfo] = useState(false);
  const [expandHome, setExpandHome] = useState(false);

  const handleExpandAppointments = () =>
    setExpandAppointments(!expandAppointments);
  const handleExpandGuides = () => setExpandGuides(!expandGuides);
  const handleExpandInfo = () => setExpandInfo(!expandInfo);
  const handleExpandHome = () => setExpandHome(!expandHome);

  return (
    <div className="w-full bg-gray-100 border border-gray-200 shadow-md rounded-lg flex flex-col min-h-full hidden lg:flex">
      <ul className="p-3 xl:p-8 flex flex-col justify-between space-y-8 h-full text-sm xl:text-lg font-aoboshi">
        <li>Account Dashboard</li>
        <ExpandableSection
          title="Appointments"
          expanded={expandAppointments}
          onExpand={handleExpandAppointments}
          items={["Upcoming Appointments", "Previous Appointments"]}
        />
        <ExpandableSection
          title="My Personal Guides"
          expanded={expandGuides}
          onExpand={handleExpandGuides}
          items={["Guide 1", "Guide 2"]}
        />
        <ExpandableSection
          title="Personal Info"
          expanded={expandInfo}
          onExpand={handleExpandInfo}
          items={["Info 1", "Info 2"]}
        />
        <ExpandableSection
          title="My Home"
          expanded={expandHome}
          onExpand={handleExpandHome}
          items={["Home 1", "Home 2"]}
        />
      </ul>
    </div>
  );
}

const ExpandableSection = ({ title, expanded, onExpand, items }) => (
  <li className={`${expanded ? "pb-2" : "pb-2"}`} onClick={onExpand}>
    <div className="flex items-center cursor-pointer">
      {title}
      <HiChevronDown
        className={`ml-auto transition-transform ${
          expanded ? "transform rotate-180" : ""
        }`}
      />
    </div>
    <AnimatePresence>
      {expanded && (
        <motion.ul
          className={`space-y-8 pl-8`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            opacity: { duration: 0.1 }, // Quicker fade
            height: { duration: 0.3 },
          }}>
          {items.map((item, index) => (
            <li key={index} className="pt-6 text-sm">
              {item}
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </li>
);

export default AccountNavigation;
