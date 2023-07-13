import React, { useState, useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/img/genesis-text.png";
import { MotionMain, fadeIn } from "./animations/sharedAnimations";
import { AuthContext } from "../contexts/AuthContext";
import Alert from "./login-errors/Alert"; // Import the Alert component

const MotionLink = motion(RouterLink);

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    authContext.resetError(); // Reset the error state before login attempt

    const loginSuccessful = await authContext.login(username, password);
    if (loginSuccessful) {
      navigate("/my-account");
    }
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-genesis-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-genesis-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              {authContext.error && (
                <Alert message={authContext.error} type="error" />
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
                type="submit"
                className="flex w-full justify-center rounded-md bg-genesis-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-genesis-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-genesis-blue">
                Sign in
              </motion.button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <MotionLink
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
              className="font-semibold leading-6 text-genesis-blue hover:text-cyan-600"
              to="/register">
              Register
            </MotionLink>
          </p>
        </div>
      </div>
    </MotionMain>
  );
}

export default Login;
