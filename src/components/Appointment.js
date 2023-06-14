import React from "react";

function Appointment() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Schedule an Appointment
      </h2>
      <p className="text-center mb-4">
        Use the booking interface provided by Square below to schedule your
        appointment. Click 'Sign In' if you already have a Square account.
      </p>
      <iframe
        title="Square Appointment"
        src="https://square.site/appointments/buyer/widget/fih96w2xgu6ntr/LBRYAMQHGS40M"
        width="100%"
        height="800px"
        style={{ border: "none", overflow: "hidden" }}
      />
    </div>
  );
}

export default Appointment;
