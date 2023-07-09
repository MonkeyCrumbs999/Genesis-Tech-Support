import React from "react";

const Alert = ({ message, type }) => {
  // Determine the color of the alert based on its type
  const alertColor = type === "error" ? "text-red-500" : "text-green-500";

  return <div className={`alert ${alertColor}`}>{message}</div>;
};

export default Alert;
