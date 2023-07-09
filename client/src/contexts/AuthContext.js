import React, { createContext, useState } from "react";
import { login, register, logout } from "../services/auth";

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
    const result = await login(username, password);

    // If there's an error, set it in state
    if (result.error) {
      setError(result.error);
    } else {
      setUser(result);
    }
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
    if (result) {
      setUser(result);
    }
  };

  const logoutCallback = () => logout(setUser);

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

export default AuthProvider;
