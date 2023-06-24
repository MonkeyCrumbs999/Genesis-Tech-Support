import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/img/genesis-text.png";
import { MotionMain, fadeIn } from "./animations/sharedAnimations";
import RegisterForm from "./RegisterForm";

const MotionLink = motion(RouterLink);

function Register() {
  const handleSubmit = async (formData) => {
    console.log(formData);
    // Perform the logic to submit the form data
  };

  return (
    <MotionMain variants={fadeIn} initial="hidden" animate="visible">
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
