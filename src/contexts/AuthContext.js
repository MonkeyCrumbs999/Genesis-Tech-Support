import React, { createContext, useState } from "react";
import { login, register, logout } from "../services/auth";
/**
 * Creating a context for auth-related aspects
 * Context provides a way to pass data through the component tree without having to pass props down manually at every level
 */
export const AuthContext = createContext();

/**
 * AuthProvider is a custom context provider for handling user authentications (login, registration, logout).
 * This will wrap the components which interact with user authentication data such as login/reg state, error state
 */
export const AuthProvider = ({ children }) => {
  // user state variable and its updater setUser
  // it retrieves user data from local storage, if any, during initial load (refresh or first load)
  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem("user");
    return localUser ? JSON.parse(localUser) : null; // if localUser exists, parse it to JSON or return null
  });

  // error state to handle any auth-related errors
  const [error, setError] = useState(null);

  // loginCallback is our custom callback for login that accepts username, password as arguments
  const loginCallback = (username, password) =>
    login(username, password, setUser, setError);

  // registerCallback is our custom callback for register that accepts all input fields (username, email, password, firstName etc.) as arguments
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

  // logoutCallback is our custom callback for logout
  const logoutCallback = () => logout(setUser);

  // resetError is a function to set error null, to reset any occurred error
  const resetError = () => setError(null);

  return (
    // Using context provider to provide auth-related data and functions to child components
    <AuthContext.Provider
      value={{
        user,
        login: loginCallback,
        register: registerCallback,
        logout: logoutCallback,
        error,
        resetError,
      }}>
      {
        children /*This represents child nodes/components wrapped by this provider*/
      }
    </AuthContext.Provider>
  );
};

export default AuthProvider;
