import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function TVMounting() {
  const navigate = useNavigate();

  return (
    <Card
      navigateBack={() => navigate(-1)}
      title="TV Mounting & Setup"
      description="From helping you choose the perfect spot for your new smart TV, to expertly mounting it and setting it up with all your devices, we take the stress out of the process..."
    />
  );
}
