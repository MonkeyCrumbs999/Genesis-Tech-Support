import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function TechEducation() {
  const navigate = useNavigate();

  return (
    <Card
      navigateBack={() => navigate(-1)}
      title="1-On-1 Education"
      description="Our one-on-one tech education service is tailored to your specific needs. Whether you're a tech beginner or just need to brush up on a few skills..."
    />
  );
}
