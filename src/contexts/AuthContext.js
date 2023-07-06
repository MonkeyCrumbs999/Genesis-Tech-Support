import React, { createContext, useState } from "react";
import { login, register, logout } from "../services/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem("user");
    return localUser ? JSON.parse(localUser) : null;
  });

  const [error, setError] = useState(null);

  const loginCallback = (username, password) =>
    login(username, password, setUser, setError);
  const registerCallback = (
    username,
    email,
    password,
    firstName,
    lastName,
    address,
    phone,
    zipCode
  ) =>
    register(
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
