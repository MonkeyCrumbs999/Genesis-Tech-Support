import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"; // Import ProtectedRoute from the src folder

import Home from "./components/Home";
import Subscription from "./components/Subscription";
import Appointment from "./components/Appointment";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Login from "./components/registration/Login";
import Register from "./components/registration/Register";
import MyAccount from "./components/MyAccount";
import TVMounting from "./components/services/TVMounting";
import TechEducation from "./components/services/TechEducation";
import SoftwareTroubleshooting from "./components/services/SoftwareTroubleshooting";
import InHomeSupport from "./components/services/InHomeSupport";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subscription" element={<Subscription />} />
      <ProtectedRoute path="/appointment" element={<Appointment />} />{" "}
      {/* Protected route */}
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/tv-mounting" element={<TVMounting />} />
      <Route path="/services/tech-education" element={<TechEducation />} />
      <Route
        path="/services/software-troubleshooting"
        element={<SoftwareTroubleshooting />}
      />
      <Route path="/services/in-home-support" element={<InHomeSupport />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <ProtectedRoute path="/my-account" element={<MyAccount />} />{" "}
      {/* Protected route */}
    </Routes>
  );
}
