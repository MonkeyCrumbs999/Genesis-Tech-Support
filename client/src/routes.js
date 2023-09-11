import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute";
import ScrollProgressBar from "./components/ScrollProgressBar";

import Home from "./components/Home";
import Subscription from "./components/Subscription";
import Appointment from "./components/Appointment";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Login from "./components/registration/Login";
import Register from "./components/registration/Register";
import MyAccount from "./components/my-account/MyAccount";
import TVMounting from "./components/services/TVMounting";
import TechEducation from "./components/services/TechEducation";
import SoftwareTroubleshooting from "./components/services/SoftwareTroubleshooting";
import InHomeSupport from "./components/services/InHomeSupport";
import GeneralTroubleshooting from "./components/services/GeneralTroubleshooting";
import PCMacSetup from "./components/services/PCMacSetup";
import PrinterSetup from "./components/services/PrinterSetup"; // Import the PrinterSetup component

import NotFound from "./components/NotFound";

function useConditionalHideScrollbars() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/appointment") {
      document.body.classList.add("scroll-hide-chrome", "scroll-hide-firefox");
    } else {
      document.body.classList.remove(
        "scroll-hide-chrome",
        "scroll-hide-firefox"
      );
    }
  }, [location]);
}

export default function AppRoutes() {
  const location = useLocation();
  const shouldDisplayProgressBar = location.pathname !== "/appointment";

  useConditionalHideScrollbars();

  return (
    <>
      <ScrollProgressBar shouldDisplay={shouldDisplayProgressBar} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          }
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/tv-mounting" element={<TVMounting />} />
        <Route path="/services/tech-education" element={<TechEducation />} />
        <Route
          path="/services/software-troubleshooting"
          element={<SoftwareTroubleshooting />}
        />
        <Route path="/services/in-home-support" element={<InHomeSupport />} />
        <Route
          path="/services/general-troubleshooting"
          element={<GeneralTroubleshooting />}
        />
        <Route path="/services/pc-mac-setup" element={<PCMacSetup />} />
        <Route
          path="/services/printer-setup"
          element={<PrinterSetup />} // Add the PrinterSetup route
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/my-account"
          element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
