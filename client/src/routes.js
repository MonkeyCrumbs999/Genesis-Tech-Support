// routes.js
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Subscription from "./components/Subscription";
import Appointment from "./components/Appointment";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Login from "./components/Login";
import Register from "./components/Register";
import MyAccount from "./components/MyAccount";
import TVMounting from "./components/services/TVMounting";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/tv-mounting" element={<TVMounting />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/my-account" element={<MyAccount />} />
    </Routes>
  );
}
