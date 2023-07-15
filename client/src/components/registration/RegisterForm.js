import React, { useState } from "react";
import FormField from "./FormField";
import { validateInput } from "./validateInput";

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
  const [city, setCity] = useState({
    value: "",
    isValid: null,
    message: "",
  });
  const [state, setState] = useState({
    value: "",
    isValid: null,
    message: "",
  });
  const [zipCode, setZipCode] = useState({
    value: "",
    isValid: null,
    message: "",
  });
  const [phone, setPhone] = useState({
    value: "",
    isValid: null,
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      username.isValid &&
      email.isValid &&
      password.isValid &&
      firstName.isValid &&
      lastName.isValid &&
      address.isValid &&
      city.isValid &&
      state.isValid &&
      zipCode.isValid &&
      phone.isValid
    ) {
      const data = {
        username: username.value,
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        state: state.value,
        zipCode: zipCode.value,
        phone: phone.value,
      };
      console.log(data); // Log the data being passed to the onSubmit function
      onSubmit(data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="Username"
        id="username"
        type="text"
        value={username.value}
        isValid={username.isValid}
        message={username.message}
        onChange={(e) => validateInput(e.target.value, "username", setUsername)}
      />

      <FormField
        label="Email"
        id="email"
        type="email"
        value={email.value}
        isValid={email.isValid}
        message={email.message}
        onChange={(e) => validateInput(e.target.value, "email", setEmail)}
      />

      <FormField
        label="Password"
        id="password"
        type="password"
        value={password.value}
        isValid={password.isValid}
        message={password.message}
        onChange={(e) => validateInput(e.target.value, "password", setPassword)}
      />

      <FormField
        label="First Name"
        id="firstName"
        type="text"
        value={firstName.value}
        isValid={firstName.isValid}
        message={firstName.message}
        onChange={(e) =>
          validateInput(e.target.value, "firstName", setFirstName)
        }
      />

      <FormField
        label="Last Name"
        id="lastName"
        type="text"
        value={lastName.value}
        isValid={lastName.isValid}
        message={lastName.message}
        onChange={(e) => validateInput(e.target.value, "lastName", setLastName)}
      />

      <FormField
        label="Address"
        id="address"
        type="text"
        value={address.value}
        isValid={address.isValid}
        message={address.message}
        onChange={(e) => validateInput(e.target.value, "address", setAddress)}
      />

      <FormField
        label="City"
        id="city"
        type="text"
        value={city.value}
        isValid={city.isValid}
        message={city.message}
        onChange={(e) => validateInput(e.target.value, "city", setCity)}
      />

      <FormField
        label="State"
        id="state"
        type="text"
        value={state.value}
        isValid={state.isValid}
        message={state.message}
        onChange={(e) => validateInput(e.target.value, "state", setState)}
      />

      <FormField
        label="Zip Code"
        id="zipCode"
        type="text"
        value={zipCode.value}
        isValid={zipCode.isValid}
        message={zipCode.message}
        onChange={(e) => validateInput(e.target.value, "zipCode", setZipCode)}
      />

      <FormField
        label="Phone Number"
        id="phone"
        type="tel"
        value={phone.value}
        isValid={phone.isValid}
        message={phone.message}
        onChange={(e) => validateInput(e.target.value, "phone", setPhone)}
      />

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
