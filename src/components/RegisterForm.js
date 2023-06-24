import React, { useState } from "react";

function RegisterForm({ onSubmit }) {
  const [username, setUsername] = useState({
    value: "",
    isValid: null,
    message: "",
  });
  const [email, setEmail] = useState({ value: "", isValid: null, message: "" });
  const [password, setPassword] = useState({
    value: "",
    isValid: null,
    message: "",
  });

  const validateInput = (value, type) => {
    if (type === "username") {
      if (value === "") {
        setUsername({ value, isValid: null, message: "" });
      } else if (value.length < 3) {
        setUsername({
          value,
          isValid: false,
          message: "Must be at least 3 characters",
        });
      } else {
        setUsername({ value, isValid: true, message: "Valid" });
      }
    } else if (type === "email") {
      const re = /\S+@\S+\.\S+/;
      if (value === "") {
        setEmail({ value, isValid: null, message: "" });
      } else if (!re.test(value)) {
        setEmail({ value, isValid: false, message: "Invalid email format" });
      } else {
        setEmail({ value, isValid: true, message: "Valid" });
      }
    } else if (type === "password") {
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      if (value === "") {
        setPassword({ value, isValid: null, message: "" });
      } else if (!re.test(value)) {
        setPassword({
          value,
          isValid: false,
          message: "Must contain at least 6 characters, one letter, one number",
        });
      } else {
        setPassword({ value, isValid: true, message: "Valid" });
      }
    }
  };

  const getInputClass = (isValid) => {
    if (isValid === null) return "";
    return isValid ? "border-green-500" : "border-red-500";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.isValid && email.isValid && password.isValid) {
      onSubmit({
        username: username.value,
        email: email.value,
        password: password.value,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-5 text-gray-700">
          Username
        </label>
        <div className="mt-1 relative flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <input
            id="username"
            name="username"
            type="text"
            required
            value={username.value}
            onChange={(e) => validateInput(e.target.value, "username")}
            className={`w-full sm:w-auto sm:min-w-[400px] block rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-genesis-blue sm:text-sm sm:leading-10 ring-1 ring-inset ring-gray-300 ${getInputClass(
              username.isValid
            )}`}
          />
          <span
            className={`text-xs ${
              username.isValid === true ? "text-green-500" : "text-red-500"
            }`}>
            {username.message}
          </span>
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-5 text-gray-700">
          Email
        </label>
        <div className="mt-1 relative flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email.value}
            onChange={(e) => validateInput(e.target.value, "email")}
            className={`w-full sm:w-auto sm:min-w-[400px] block rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-genesis-blue sm:text-sm sm:leading-10 ring-1 ring-inset ring-gray-300 ${getInputClass(
              email.isValid
            )}`}
          />
          <span
            className={`text-xs ${
              email.isValid === true ? "text-green-500" : "text-red-500"
            }`}>
            {email.message}
          </span>
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-5 text-gray-700">
          Password
        </label>
        <div className="mt-1 relative flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <input
            id="password"
            name="password"
            type="password"
            required
            value={password.value}
            onChange={(e) => validateInput(e.target.value, "password")}
            className={`w-full sm:w-auto sm:min-w-[400px] block rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-genesis-blue sm:text-sm sm:leading-10 ring-1 ring-inset ring-gray-300 ${getInputClass(
              password.isValid
            )}`}
          />
          <span
            className={`text-xs min-w-[150px] ${
              password.isValid === true ? "text-green-500" : "text-red-500"
            }`}>
            {password.message}
          </span>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-genesis-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-genesis-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-genesis-blue">
          Register
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
