import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function GeneralTroubleshooting() {
  const navigate = useNavigate();

  return (
    <Card
      navigateBack={() => navigate(-1)}
      title="General Troubleshooting"
      description="Have a tech issue that's not specific to one device? Our general troubleshooting service is here to help. Our experts will diagnose and resolve a wide range of technical problems, from connectivity issues to software glitches, ensuring your devices run smoothly."
      price="$75"
    />
  );
}
