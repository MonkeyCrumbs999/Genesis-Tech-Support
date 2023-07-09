import React from "react";
import Alert from "./Alert";

const Error = ({ message }) => <Alert message={message} type="error" />;

export default Error;
