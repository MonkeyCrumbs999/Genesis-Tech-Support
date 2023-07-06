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
  const [firstName, setFirstName] = useState({
    value: "",
    isValid: null,
    message: "",
  });
  const [lastName, setLastName] = useState({
    value: "",
    isValid: null,
    message: "",
  });
  const [address, setAddress] = useState({
    value: "",
    isValid: null,
    message: "",
  });
  const [phone, setPhone] = useState({
    value: "",
    isValid: null,
    message: "",
  });

  const [zipCode, setZipCode] = useState({
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
      // Password must be at least 6 characters long, have at least one uppercase letter, one lowercase letter, and one number or special character
      const re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]|.*[!@#$%^&*()\-_=+{};:,<.>]).{6,}$/;
      if (value === "") {
        setPassword({ value, isValid: null, message: "" });
      } else if (!re.test(value)) {
        setPassword({
          value,
          isValid: false,
          message:
            "Password must be at least 6 characters, include at least 1 uppercase letter, 1 lowercase letter, and 1 number or symbol",
        });
      } else {
        setPassword({ value, isValid: true, message: "Valid" });
      }
    } else if (type === "zipCode") {
      const re = /^[0-9]{5}$/;
      if (value === "") {
        setZipCode({ value, isValid: null, message: "" });
      } else if (!re.test(value)) {
        setZipCode({
          value,
          isValid: false,
          message: "Invalid Zip Code format",
        });
      } else {
        setZipCode({ value, isValid: true, message: "Valid" });
      }
    }

    if (type === "firstName") {
      if (value === "") {
        setFirstName({ value, isValid: null, message: "" });
      } else if (value.length < 3) {
        setFirstName({
          value,
          isValid: false,
          message: "Must be at least 3 characters",
        });
      } else {
        setFirstName({ value, isValid: true, message: "Valid" });
      }
    } else if (type === "lastName") {
      if (value === "") {
        setLastName({ value, isValid: null, message: "" });
      } else if (value.length < 3) {
        setLastName({
          value,
          isValid: false,
          message: "Must be at least 3 characters",
        });
      } else {
        setLastName({ value, isValid: true, message: "Valid" });
      }
    } else if (type === "address") {
      if (value === "") {
        setAddress({ value, isValid: null, message: "" });
      } else if (value.length < 10) {
        setAddress({
          value,
          isValid: false,
          message: "Must be at least 10 characters",
        });
      } else {
        setAddress({ value, isValid: true, message: "Valid" });
      }
    } else if (type === "phone") {
      const re = /^[0-9]{10}$/;
      if (value === "") {
        setPhone({ value, isValid: null, message: "" });
      } else if (!re.test(value)) {
        setPhone({ value, isValid: false, message: "Invalid phone format" });
      } else {
        setPhone({ value, isValid: true, message: "Valid" });
      }
    }
  };

  const getInputClass = (isValid) => {
    if (isValid === null) return "";
    return isValid ? "border-green-500" : "border-red-500";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      username.isValid &&
      email.isValid &&
      password.isValid &&
      firstName.isValid &&
      lastName.isValid &&
      address.isValid &&
      phone.isValid &&
      zipCode.isValid
    ) {
      const data = {
        username: username.value,
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        phone: phone.value,
        zipCode: zipCode.value,
      };
      console.log(data); // Log the data being passed to the onSubmit function
      onSubmit(data);
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
          htmlFor="firstName"
          className="block text-sm font-medium leading-5 text-gray-700">
          First Name
        </label>
        <div className="mt-1 relative flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={firstName.value}
            onChange={(e) => validateInput(e.target.value, "firstName")}
            className={`w-full sm:w-auto sm:min-w-[400px] block rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-genesis-blue sm:text-sm sm:leading-10 ring-1 ring-inset ring-gray-300 ${getInputClass(
              firstName.isValid
            )}`}
          />
          <span
            className={`text-xs ${
              firstName.isValid === true ? "text-green-500" : "text-red-500"
            }`}>
            {firstName.message}
          </span>
        </div>
      </div>

      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium leading-5 text-gray-700">
          Last Name
        </label>
        <div className="mt-1 relative flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={lastName.value}
            onChange={(e) => validateInput(e.target.value, "lastName")}
            className={`w-full sm:w-auto sm:min-w-[400px] block rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-genesis-blue sm:text-sm sm:leading-10 ring-1 ring-inset ring-gray-300 ${getInputClass(
              lastName.isValid
            )}`}
          />
          <span
            className={`text-xs ${
              lastName.isValid === true ? "text-green-500" : "text-red-500"
            }`}>
            {lastName.message}
          </span>
        </div>
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium leading-5 text-gray-700">
          Address
        </label>
        <div className="mt-1 relative flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <input
            id="address"
            name="address"
            type="text"
            required
            value={address.value}
            onChange={(e) => validateInput(e.target.value, "address")}
            className={`w-full sm:w-auto sm:min-w-[400px] block rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-genesis-blue sm:text-sm sm:leading-10 ring-1 ring-inset ring-gray-300 ${getInputClass(
              address.isValid
            )}`}
          />
          <span
            className={`text-xs ${
              address.isValid === true ? "text-green-500" : "text-red-500"
            }`}>
            {address.message}
          </span>
        </div>
      </div>

      <div>
        <label
          htmlFor="zipCode"
          className="block text-sm font-medium leading-5 text-gray-700">
          Zip Code
        </label>
        <div className="mt-1 relative flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <input
            id="zipCode"
            name="zipCode"
            type="text"
            required
            value={zipCode.value}
            onChange={(e) => validateInput(e.target.value, "zipCode")}
            className={`w-full sm:w-auto sm:min-w-[400px] block rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-genesis-blue sm:text-sm sm:leading-10 ring-1 ring-inset ring-gray-300 ${getInputClass(
              zipCode.isValid
            )}`}
          />
          <span
            className={`text-xs ${
              zipCode.isValid === true ? "text-green-500" : "text-red-500"
            }`}>
            {zipCode.message}
          </span>
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium leading-5 text-gray-700">
          Phone Number
        </label>
        <div className="mt-1 relative flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={phone.value}
            onChange={(e) => validateInput(e.target.value, "phone")}
            className={`w-full sm:w-auto sm:min-w-[400px] block rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-genesis-blue sm:text-sm sm:leading-10 ring-1 ring-inset ring-gray-300 ${getInputClass(
              phone.isValid
            )}`}
          />
          <span
            className={`text-xs ${
              phone.isValid === true ? "text-green-500" : "text-red-500"
            }`}>
            {phone.message}
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
