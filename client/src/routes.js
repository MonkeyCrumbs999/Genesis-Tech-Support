import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

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

export default function AppRoutes() {
  return (
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
    </Routes>
  );
}
