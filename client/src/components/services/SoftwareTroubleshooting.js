import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function SoftwareTroubleshooting() {
  const navigate = useNavigate();

  return (
    <Card
      navigateBack={() => navigate(-1)}
      title="PC & Mac Software Troubleshooting"
      description="Software issues can be frustrating and time-consuming. Our PC and Mac software troubleshooting service is designed to address issues swiftly..."
    />
  );
}
