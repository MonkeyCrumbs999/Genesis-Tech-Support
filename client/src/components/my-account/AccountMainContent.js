import React from "react";



function AccountMainContent({ user, renderTuneupSection }) {
  return (
    <div className="w-full col-span-5 flex flex-col items-start justify-start sm:items-center">
      <h2 className="text-4xl text-center lg:text-start font-bold">
        Welcome to your Profile, {user.username}!
      </h2>
      <div className="mt-10 w-full max-w-xl px-8 py-6 bg-gray-100 border border-gray-200 shadow-md rounded-lg min-w-full">
        <div>
          <h2 className="text-3xl font-semibold">Your Upcoming Appointments</h2>
          <p className="mt-2 text-sm text-gray-600">
            No upcoming appointments scheduled yet.
          </p>
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
