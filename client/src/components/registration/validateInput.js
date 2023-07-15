export const validateInput = (value, type, setState) => {
  let isValid = true;
  let message = "Valid";

  if (value === "") {
    isValid = null;
    message = "";
  } else if (type === "username" && value.length < 3) {
    isValid = false;
    message = "Must be at least 3 characters";
  } else if (type === "email" && !/\S+@\S+\.\S+/.test(value)) {
    isValid = false;
    message = "Invalid email format";
  } else if (
    type === "password" &&
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]|.*[!@#$%^&*()\-_=+{};:,<.>]).{6,}$/.test(
      value
    )
  ) {
    isValid = false;
    message =
      "Password must be at least 6 characters, include at least 1 uppercase letter, 1 lowercase letter, and 1 number or symbol";
  } else if (type === "zipCode" && !/^[0-9]{5}$/.test(value)) {
    isValid = false;
    message = "Invalid Zip Code format";
  } else if (type === "firstName" && value.length < 3) {
    isValid = false;
    message = "Must be at least 3 characters";
  } else if (type === "lastName" && value.length < 3) {
    isValid = false;
    message = "Must be at least 3 characters";
  } else if (type === "address" && value.length < 10) {
    isValid = false;
    message = "Must be at least 10 characters";
  } else if (type === "phone" && !/^[0-9]{10}$/.test(value)) {
    isValid = false;
    message = "Invalid phone format";
  } else if (type === "city" && value.length < 2) {
    isValid = false;
    message = "Must be at least 2 characters";
  } else if (type === "state" && !/^[A-Z]{2}$/.test(value)) {
    isValid = false;
    message = "Invalid state format. Must be 2 uppercase letters";
  }

  // Update the state using the setState function passed as an argument
  setState({ value, isValid, message });
};
