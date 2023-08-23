import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import MobileSidebar from "./components/MobileSidebar";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes";
import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // You can adjust the loading time as per your needs

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="fadeIn">
    <AuthProvider>
      <Router>
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
    </div>
  );
}
