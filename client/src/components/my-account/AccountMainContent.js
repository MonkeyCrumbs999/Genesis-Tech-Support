import React, { useEffect, useState } from "react";
import axios from 'axios';

function AccountMainContent({ user, renderTuneupSection }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('/user/appointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  return (
    <div className="w-full col-span-5 flex flex-col items-start justify-start sm:items-center">
      <h2 className="text-4xl text-center lg:text-start font-bold">
        Welcome to your Profile, {user.username}!
      </h2>
      <div className="mt-10 w-full max-w-xl px-8 py-6 bg-gray-100 border border-gray-200 shadow-md rounded-lg min-w-full">
        <div>
          <h2 className="text-3xl font-semibold">Your Upcoming Appointments</h2>
          {appointments.length > 0 ? (
            appointments.map(appointment => (
              <div key={appointment.id}>
                <p>Status: {appointment.status}</p>
                <p>Start at: {appointment.start_at}</p>
                <p>Created at: {appointment.created_at}</p>
                <p>Updated at: {appointment.updated_at}</p>
                {/* Add more fields as needed */}
              </div>
            ))
          ) : (
            <p className="mt-2 text-sm text-gray-600">
              No upcoming appointments scheduled yet.
            </p>
          )}
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-semibold">Your Previous Appointments</h2>
          <p className="mt-2 text-sm text-gray-600">
            No previous appointments found.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-semibold">Tuneup Status</h2>
          <p className="mt-2 text-sm text-gray-600">
            {renderTuneupSection()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountMainContent;