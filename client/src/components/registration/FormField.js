//this is the form field layout, we are destructuring it in RegisterForm and splitting the component up for maintainability

import React from "react";

function FormField({ label, id, type, value, isValid, message, onChange }) {
  const getInputClass = (isValid) => {
    if (isValid === null) return "";
    return isValid ? "border-green-500" : "border-red-500";
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-5 text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
        <input
          id={id}
          name={id}
          type={type}
          required
          value={value}
          onChange={onChange}
          className={`w-full sm:w-auto sm:min-w-[400px] block rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-genesis-blue sm:text-sm sm:leading-10 ring-1 ring-inset ring-gray-300 ${getInputClass(
            isValid
          )}`}
        />
        <span
          className={`text-xs ${
            isValid === true ? "text-green-500" : "text-red-500"
          }`}>
          {message}
        </span>
      </div>
    </div>
  );
}

export default FormField;
