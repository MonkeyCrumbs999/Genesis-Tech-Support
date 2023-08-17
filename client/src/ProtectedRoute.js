// ProtectedRoute.js

import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import NotLoggedIn from "./NotLoggedIn";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : <NotLoggedIn />;
};

export default ProtectedRoute;
