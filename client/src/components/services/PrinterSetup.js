import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function PrinterSetup() {
  const navigate = useNavigate();

  return (
    <Card
      navigateBack={() => navigate(-1)}
      title="Printer Setup or Troubleshooting"
      description="Experience hassle-free printing with our expert printer setup and troubleshooting service. Whether you're installing a new printer or dealing with printing issues, we've got you covered. We'll ensure your printer is seamlessly integrated into your network and resolve any printing problems you encounter."
    />
  );
}
