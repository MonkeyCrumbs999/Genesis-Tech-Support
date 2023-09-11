import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function PCMacSetup() {
  const navigate = useNavigate();

  return (
    <Card
      navigateBack={() => navigate(-1)}
      title="PC & Mac Setup"
      description="Get your PC or Mac up and running smoothly with our expert setup service. We'll ensure that your system is optimized for peak performance, install essential software, and configure it to meet your specific needs. Say goodbye to setup hassles and hello to a seamless computing experience."
    />
  );
}
