import React, { useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/img/genesis-black.png";
import { MotionMain, fadeIn } from "../animations/sharedAnimations";
import { AuthContext } from "../../contexts/AuthContext";
import Alert from "../login-errors/Alert"; // Import the Alert component
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";

const MotionLink = motion(RouterLink);

// Define a validation schema with Yup
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]|.*[!@#$%^&*()\-_=+{};:,<.>]).{6,}$/,
      "Password must be at least 6 characters, include at least 1 uppercase letter, 1 lowercase letter, and 1 number or symbol"
    )
    .required("Required"),
});

function Login() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [stayLoggedIn, setStayLoggedIn] = useState(false); // Modify this line

  const handleSubmit = async (values) => {
    authContext.resetError(); // Reset the error state before login attempt

    // Modify the below line
    const loginSuccessful = await authContext.login(values.username, values.password, stayLoggedIn);
    if (loginSuccessful) {
      navigate("/my-account");
    }
  };

  // Initial form values
  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <MotionMain variants={fadeIn} initial="hidden" animate="visible">
      <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={Logo}
            alt="Genesis Tech Support/Install"
          />
          <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="space-y-6">
                <FormField name="username" label="Username" type="text" />
                <FormField name="password" label="Password" type="password" />
                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    id="stayLoggedIn"
                    name="stayLoggedIn"
                    checked={stayLoggedIn}
                    onChange={() => setStayLoggedIn(!stayLoggedIn)}
                  />
                  <label htmlFor="stayLoggedIn" className="ml-2">
                    Stay Logged In
                  </label>
                </div>
                <div>
                  {authContext.error && (
                    <Alert message={authContext.error} type="error" />
                  )}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1 }}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-genesis-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-genesis-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-genesis-blue"
                  >
                    Sign in
                  </motion.button>
                </div>
              </Form>
            )}
          </Formik>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <MotionLink
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
              className="font-semibold leading-6 text-genesis-blue hover:text-cyan-600"
              to="/register"
            >
              Register
            </MotionLink>
          </p>
        </div>
      </div>
    </MotionMain>
  );
}

export default Login;