import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/profile");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl text-black">
        Registration successful! Redirecting to your profile...
      </h1>
    </div>
  );
}

export default RegistrationSuccess;
