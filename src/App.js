import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Subscription from "./components/Subscription";
import Appointment from "./components/Appointment";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Login from "./components/Login";
import ScrollProgressBar from "./components/ScrollProgressBar";
import MobileSidebar from "./components/MobileSidebar";
import Register from "./components/Register";
import MyAccount from "./components/MyAccount";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
