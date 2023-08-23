import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "./components/Header";
import MobileSidebar from "./components/MobileSidebar";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Detect Microsoft Edge
    const isEdge = window.navigator.userAgent.indexOf("Edg") > -1;

    if (isEdge && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, []);

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
        <Header toggleMenu={toggleMenu} />
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-50 ${
            isOpen
              ? "opacity-50 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}></div>

        <MobileSidebar isOpen={isOpen} toggleMenu={toggleMenu} />
        <AppRoutes />
        <Footer />
      </Router>
    </AuthProvider>
  );
}
