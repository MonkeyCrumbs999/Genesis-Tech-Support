import React, { useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

// NavLink Component
function NavLink({ to, label, onClick }) {
  return (
    <li className="mx-2 my-4">
      <Link to={to} onClick={onClick}>
        {label}
      </Link>
    </li>
  );
}

// MobileSidebar Component
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
        setTimeout(() => toggleMenu(event), 0);
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
          className={`fixed top-0 left-0 bottom-0 w-64 bg-white p-4 overflow-y-auto z-50 border-r-[3px] border-genesis-orange`}
          onClick={(event) => event.stopPropagation()}>
          <button onClick={toggleMenu} className="mb-4 ml-2 text-black">
            Close Menu
          </button>
          <ul className="mt-2 text-xl text-black font-aoboshi">
            <NavLink to="/" label="Home" onClick={toggleMenu} />
            <NavLink to="/services" label="Our Services" onClick={toggleMenu} />
            <NavLink
              to="/appointment"
              label="Schedule Appointment"
              onClick={toggleMenu}
            />
            <NavLink to="/contact-us" label="Contact Us" onClick={toggleMenu} />
            {user ? (
              <NavLink
                to="/my-account"
                label="My Account"
                onClick={toggleMenu}
              />
            ) : (
              <NavLink to="/login" label="Login" onClick={toggleMenu} />
            )}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default MobileSidebar;
