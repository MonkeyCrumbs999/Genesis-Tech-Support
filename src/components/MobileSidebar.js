import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function MobileSidebar({ isOpen, toggleMenu }) {
  const sidebar = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const { user } = useContext(AuthContext);

  const sidebarRef = useRef(null); // Create a ref to the sidebar

  useEffect(() => {
    function handleClickOutside(event) {
      // If sidebar is open and click was outside of the sidebar, then close it
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        toggleMenu(event);
      }
    }

    // Attach the listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          ref={sidebarRef} // Attach the ref to the sidebar
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          exit="closed"
          variants={sidebar}
          transition={{ damping: 20, stiffness: 400 }}
          className={`fixed top-0 left-0 bottom-0 w-64 bg-white p-4 overflow-y-auto z-50 border-r-[5px] border-genesis-orange`}
          onClick={(event) => event.stopPropagation()}>
          <button onClick={toggleMenu} className="mb-4 ml-2 text-black">
            Close Menu
          </button>
          <ul className="mt-2 text-xl text-black font-aoboshi">
            <li className="mx-2 my-4">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="mx-2 my-4">
              <Link to="/services" onClick={toggleMenu}>
                Our Services
              </Link>
            </li>
            {/* <li className="mx-2 my-4">
              <Link to="/subscription" onClick={toggleMenu}>
                My Subscription
              </Link>
            </li> */}
            <li className="mx-2 my-4">
              <Link to="/appointment" onClick={toggleMenu}>
                Schedule Appointment
              </Link>
            </li>
            <li className="mx-2 my-4">
              <Link to="/contact-us" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
            <li className="mx-2 hover:text-genesis-orange transition ease-in-out duration-500">
              {user ? (
                <Link to="/my-account">My Account</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default MobileSidebar;
