import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Subscription from "./components/Subscription";
import Appointment from "./components/Appointment";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import ScrollProgressBar from "./components/ScrollProgressBar";
import MobileSidebar from "./components/MobileSidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleResize() {
      // assuming 768px as the breakpoint between mobile and desktop
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    // clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]); // re-run the effect when isOpen changes

  return (
    <Router>
      <ScrollProgressBar />
      <Header toggleMenu={toggleMenu} />
      <MobileSidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
