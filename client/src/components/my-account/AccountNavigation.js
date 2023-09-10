import React, { useState } from "react";
import { HiChevronDown, HiX } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Drawer, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";

function AccountNavigation() {
  const [expandAppointments, setExpandAppointments] = useState(false);
  const [expandGuides, setExpandGuides] = useState(false);
  const [expandInfo, setExpandInfo] = useState(false);
  const [expandHome, setExpandHome] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleExpandAppointments = () =>
    setExpandAppointments(!expandAppointments);
  const handleExpandGuides = () => setExpandGuides(!expandGuides);
  const handleExpandInfo = () => setExpandInfo(!expandInfo);
  const handleExpandHome = () => setExpandHome(!expandHome);

  return (
    <div className="w-full col-span-5 lg:col-span-2 flex flex-col h-full">
      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden w-full flex flex-col col-span-5 items-center">
        <Button onClick={() => setDrawerOpen(true)} className="flex items-center">
          <Menu />
          <span className="pl-2">CLICK FOR ACCOUNT NAVIGATION</span>
        </Button>
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ style: { width: '100%', maxWidth: '400px', overflow: 'hidden' } }}
      >
        <div className="w-full bg-gray-100 border border-gray-200 shadow-md rounded-lg flex flex-col col-span-2 min-h-full py-8 overflow-y-auto">
          {/* Close Button */}
          <Button onClick={() => setDrawerOpen(false)} className="absolute top-2 right-2">
            <HiX size={24} />
          </Button>

          <ul className="p-3 xl:p-8 flex flex-col justify-evenly h-full text-sm xl:text-lg font-aoboshi" style={{flexGrow: 1}}>
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
              title={<> My Home<FaHome className="ml-2" /></>}
              expanded={expandHome}
              onExpand={handleExpandHome}
              items={["Home 1", "Home 2"]}
            />
          </ul>
        </div>
      </Drawer>

      {/* Original Component for Larger Screens */}
      <div className="hidden lg:flex w-full bg-gray-100 border border-gray-200 shadow-md rounded-lg flex flex-col min-h-full">
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
            title={<> My Home<FaHome className="ml-2" /></>}
            expanded={expandHome}
            onExpand={handleExpandHome}
            items={["Home 1", "Home 2"]}
          />
        </ul>
      </div>
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
    <AnimatePresence mode="wait">
      {expanded && (
        <motion.ul
          className={`space-y-2 pl-8`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            opacity: { duration: 0.2 },
            height: { duration: 0.4 },
          }}
        >
          {items.map((item, index) => (
            <motion.li
              key={index}
              className="pt-6 text-sm"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{
                duration: 0.2,
                delay: expanded ? 0.1 * index : 0.1 * (items.length - 1 - index), // cascade effect
              }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </li>
);

export default AccountNavigation;
