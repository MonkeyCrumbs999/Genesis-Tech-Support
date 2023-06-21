import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/genesis-text.png";
import MobileSidebar from "./MobileSidebar";

function Header({ isOpen, toggleMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    setIsScrolled(window.pageYOffset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
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
            className="w-auto h-8 md:h-12 ml-4 transition-all duration-300 ease-in-out"></img>
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
          <li className="mx-2 hover:text-genesis-orange transition ease-in-out duration-500">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 hover:text-genesis-orange transition ease-in-out duration-500">
            <Link to="/services">Our Services</Link>
          </li>
          {/* <li className="mx-2 hover:text-genesis-orange transition ease-in-out duration-500">
            <Link to="/subscription">My Subscription</Link>
          </li> this will most likely be removed in final production */}
          <li className="mx-2 hover:text-genesis-orange transition ease-in-out duration-500">
            <Link to="/appointment">Schedule Appointment</Link>
          </li>
          <li className="mx-2 hover:text-genesis-orange transition ease-in-out duration-500">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="mx-2 hover:text-genesis-orange transition ease-in-out duration-500">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <MobileSidebar isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
