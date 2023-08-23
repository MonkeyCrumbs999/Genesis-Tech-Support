//this is essentially the wrapper for the Register page, the RegisterForm is the form itself, FormField is the form styling/layout and valideInput is a function for validation

import React, { useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/img/genesis-black.png";
import { MotionMain, zoomIn } from "../animations/sharedAnimations";
import RegisterForm from "./RegisterForm";
import { AuthContext } from "../../contexts/AuthContext";

const MotionLink = motion(RouterLink);

function Register() {
  const navigate = useNavigate();

  // Access register function from context
  const { register } = useContext(AuthContext);

  const handleSubmit = async (formData) => {
    const {
      username,
      email,
      password,
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      phone,
    } = formData;

    console.log("Submitting registration form with data:", formData);

    // Pass credentials to register function from AuthContext
    const success = await register(
      username,
      email,
      password,
      firstName,
      lastName,
      address,
      city, // passed city to the register function
      state, // passed state to the register function
      zipCode,
      phone
    );

    console.log("Registration result:", success);

    if (success) {
      console.log("Registration successful, navigating to /my-account");
      navigate("/my-account");
    } else {
      console.error("Registration error");
      // Handle error during registration, like showing an error message to the user
    }
  };

  return (
    <MotionMain variants={zoomIn} initial="hidden" animate="visible">
      <div className="flex min-h-screen flex-col justify-center px-6 py-28 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={Logo}
            alt="Genesis Tech Support/Install"
          />
          <h2 className="mt-10 text-center text-2xl  leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <RegisterForm onSubmit={handleSubmit} />

          <p className="mt-12 text-center text-sm leading-5 text-gray-600">
            Already have an account?{" "}
            <MotionLink
              to="/login"
              className="font-medium text-genesis-blue hover:text-genesis-blue-hover">
              Login
            </MotionLink>
          </p>
        </div>
      </div>
    </MotionMain>
  );
}

export default Register;
