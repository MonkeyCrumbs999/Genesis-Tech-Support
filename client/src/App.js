import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import MobileSidebar from "./components/MobileSidebar";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollToTop from "./ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes";
import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <ScrollProgressBar />
        <div className="flex flex-col min-h-screen">
          <Header toggleMenu={toggleMenu} />
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-50 ${
              isOpen
                ? "opacity-50 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          ></div>
          <MobileSidebar isOpen={isOpen} toggleMenu={toggleMenu} />
          <div className="flex-grow">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
