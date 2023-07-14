import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/genesis-text.png";
import MobileSidebar from "./MobileSidebar";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

function Header({ isOpen, toggleMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAccountHovered, setIsAccountHovered] = useState(false);
  const timeoutId = useRef(null);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const checkScroll = () => {
    setIsScrolled(window.pageYOffset > 50);
  };

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsAccountHovered(true);
  };

  const handleMouseLeave = () => {
    // Regular expression for Firefox user agent string
    const isFirefox = /Firefox/i.test(navigator.userAgent);

    if (isFirefox) {
      timeoutId.current = setTimeout(() => setIsAccountHovered(false), 1000);
    } else {
      setIsAccountHovered(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <header
      className={`p-4 bg-genesis-blue text-white flex flex-wrap items-center justify-between ${
        isScrolled ? "min-h-16" : "min-h-24"
      } font-aoboshi fixed w-full z-50 transition-all duration-300 ease-in-out`}
      style={{
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)",
      }}>
      <h1>
        <Link to="/">
          <img
            src={Logo}
            alt="Genesis"
            className="w-auto h-8 md:h-12 ml-4 transition-all duration-300 ease-in-out"
          />
        </Link>
      </h1>
      <button id="hamburger-button" onClick={toggleMenu} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6">
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <nav className="hidden md:flex">
        <ul className="mt-2 text-md custom-nav:text-sm lg:text-xl md:flex md:justify-around md:items-center">
          <li className="mx-2">
            <Link
              className="hover:text-genesis-orange transition ease-in-out duration-500"
              to="/">
              Home
            </Link>
          </li>
          <li className="mx-2">
            <Link
              className="hover:text-genesis-orange transition ease-in-out duration-500"
              to="/services">
              Our Services
            </Link>
          </li>
          <li className="mx-2">
            <Link
              className="hover:text-genesis-orange transition ease-in-out duration-500"
              to="/appointment">
              Schedule Appointment
            </Link>
          </li>
          <li className="mx-2">
            <Link
              className="hover:text-genesis-orange transition ease-in-out duration-500"
              to="/contact-us">
              Contact Us
            </Link>
          </li>
          <li
            className="mx-2 relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {user ? (
              <div className="inline-block relative">
                <Link
                  to="/my-account"
                  className="block hover:text-genesis-orange transition ease-in-out duration-500">
                  My Account
                </Link>
                <div
                  className="absolute top-full left-0 mt-6 transform rounded-lg shadow-lg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <AnimatePresence>
                    {isAccountHovered && (
                      <motion.button
                        key="logout"
                        onClick={handleLogout}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 py-4 px-4 text-xs text-white text-left bg-genesis-orange hover:bg-orange-600 transition duration-200 ease-in-out transform rounded-lg shadow-lg w-32">
                        Logout
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="hover:text-genesis-orange transition ease-in-out duration-500">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <MobileSidebar isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
