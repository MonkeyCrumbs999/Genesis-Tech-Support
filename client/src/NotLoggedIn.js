// NotLoggedIn.js

import { Link } from "react-router-dom";

export default function NotLoggedIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 pt-28">
      <h2 className="text-3xl font-bold">You're not logged in!</h2>
      <p className="text-lg mt-4">
        Please
        <Link to="/login" className="text-blue-500 underline px-2">
          login
        </Link>
        to view this page.
      </p>
    </div>
  );
}
