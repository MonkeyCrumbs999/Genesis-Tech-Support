import React, { createContext, useState } from "react";
import { login, register, logout } from "../auth/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem("user");
    return localUser && localUser !== "undefined"
      ? JSON.parse(localUser)
      : null;
  });

  const [error, setError] = useState(null);

  const loginCallback = async (username, password) => {
    const result = await login(username, password, setUser, setError);
    return result !== false; // return the result of the login attempt
  };

  const registerCallback = async (
    username,
    email,
    password,
    firstName,
    lastName,
    address,
    phone,
    zipCode
  ) => {
    const result = await register(
      username,
      email,
      password,
      firstName,
      lastName,
      address,
      phone,
      zipCode,
      setUser,
      setError
    );
    return result !== false; // return the result of the register attempt
  };

  const logoutCallback = async () => {
    const isLoggedOut = await logout();
    if (isLoggedOut) setUser(null);
  };
  const resetError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: loginCallback,
        register: registerCallback,
        logout: logoutCallback,
        error,
        resetError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
