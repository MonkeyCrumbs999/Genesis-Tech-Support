// ServiceCard.js
import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, link }) {
  return (
    <div className="flex flex-col h-full border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 p-6 sm:p-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-oswald uppercase">
          {title}
        </h2>
        <p className="text-base text-gray-600">{description}</p>
      </div>
      <div className="p-6">
        <Link
          to={link}
          className="inline-block w-full bg-blue-500 text-white text-center px-4 py-2 rounded transition-colors duration-1000 ease-in-out hover:bg-blue-600">
          Explore
        </Link>
      </div>
    </div>
  );
}
