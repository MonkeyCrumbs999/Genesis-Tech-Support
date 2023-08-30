import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import axios from 'axios';

const BASE_URL = window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://genesis-tech-support-2159e5e25391.herokuapp.com";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Required")
    .test("username", "Username already exists", async (value) => {
      try {
        const response = await axios.post(`${BASE_URL}/user/checkUsername`, { username: value }, { withCredentials: true});
        return !response.data.exists;
      } catch (error) {
        console.error(error);
        return false;
      }
    }),
  email: Yup.string()
    .email("Invalid email format")
    .required("Required")
    .test("email", "Email already exists", async (value) => {
      try {
        const response = await axios.post(`${BASE_URL}/user/checkEmail`, { email: value }, {withCredentials: true});
        return !response.data.exists;
      } catch (error) {
        console.error(error);
        return false;
      }
    }),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]|.*[!@#$%^&*()\-_=+{};:,<.>]).{6,}$/,
      "Password must be at least 6 characters, include at least 1 uppercase letter, 1 lowercase letter, and 1 number or symbol"
    )
    .required("Required"),
  firstName: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  address: Yup.string()
    .min(10, "Must be at least 10 characters")
    .required("Required"),
  city: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Required"),
  state: Yup.string()
    .matches(/^[A-Z]{2}$/, "Invalid state format. Must be 2 uppercase letters")
    .required("Required"),
  zipCode: Yup.string()
    .matches(/^[0-9]{5}$/, "Invalid Zip Code format")
    .required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone format")
    .required("Required"),
});

function RegisterForm({ onSubmit }) {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {() => (
        <Form className="space-y-6 w-full mx-auto text-left">
          <FormField name="username" label="Username" type="text" />
          <FormField name="email" label="Email" type="email" />
          <FormField name="password" label="Password" type="password" />
          <FormField name="firstName" label="First Name" type="text" />
          <FormField name="lastName" label="Last Name" type="text" />
          <FormField name="address" label="Address" type="text" />
          <FormField name="city" label="City" type="text" />
          <FormField name="state" label="State" type="text" />
          <FormField name="zipCode" label="Zip Code" type="text" />
          <FormField name="phone" label="Phone Number" type="text" />

          <button
            type="submit"
            className="flex w-full justify-center mt-6 rounded-md bg-genesis-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-genesis-blue-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-genesis-blue transition-transform transform hover:scale-105">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;