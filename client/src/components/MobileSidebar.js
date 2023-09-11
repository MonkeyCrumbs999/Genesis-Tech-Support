import React, { useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

// NavLink Component
function NavLink({ to, label, onClick }) {
  return (
    <li className="mx-2 my-4">
      <Link
        to={to}
        onClick={onClick}
        className="hover:text-genesis-orange transition ease-in-out duration-500">
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

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const sidebarRef = useRef(null); // Create a ref to the sidebar

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        toggleMenu(event);  // Remove setTimeout
      }
    }
    

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.nav
          ref={sidebarRef}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          exit="closed"
          variants={sidebar}
          transition={{ damping: 20, stiffness: 20 }}
          className={`fixed top-0 left-0 bottom-0 w-64 bg-white p-4 overflow-y-auto z-50 border-r-[3px] border-genesis-orange`}
          onClick={(event) => event.stopPropagation()}>
          <button onClick={toggleMenu} className="mb-4 ml-2 text-black">
            Close Menu
          </button>
          <ul className="mt-2 text-xl text-black font-aoboshi">
            <NavLink to="/" label="Home" onClick={toggleMenu} />
            <NavLink to="/services" label="Our Services" onClick={toggleMenu} />
            {user && (
              <NavLink
                to="/appointment"
                label="Schedule Appointment"
                onClick={toggleMenu}
              />
            )}
            <NavLink to="/contact-us" label="Contact Us" onClick={toggleMenu} />
            {user ? (
              <>
                <NavLink to="/my-account" label="My Account" onClick={toggleMenu} />
                <li className="mx-2 my-4 text-sm">
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
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
