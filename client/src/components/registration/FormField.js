import React from "react";
import { Field, ErrorMessage } from "formik";

function FormField({ label, name, type, ...rest }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        name={name}
        type={type}
        {...rest}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-genesis-blue focus:border-genesis-blue sm:text-sm"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs italic"
      />
    </div>
  );
}

export default FormField;
