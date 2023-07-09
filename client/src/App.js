import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "./components/Header";
import MobileSidebar from "./components/MobileSidebar";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <ScrollProgressBar />
        <Header toggleMenu={toggleMenu} />
        <MobileSidebar isOpen={isOpen} toggleMenu={toggleMenu} />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}
