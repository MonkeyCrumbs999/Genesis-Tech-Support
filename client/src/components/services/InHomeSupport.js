import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function InHomeSupport() {
  const navigate = useNavigate();

  return (
    <Card
      navigateBack={() => navigate(-1)}
      title="In-Home Tech Support"
      description="Our in-home tech support offers a convenient, hands-off solution to your tech problems..."
    />
  );
}
