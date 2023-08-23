import React from "react";

function Chatbot() {
  return (
    // right column for chatbot
    <div className="bg-gray-100 border border-gray-200 shadow-md rounded-lg flex flex-col col-span-2 md:col-span-1 min-h-full p-4">
      <h2 className="text-xl font-bold mb-4">Genesis Support</h2>
      <p className="text-sm text-gray-600 mb-4">
        Have any questions or need support? Chat with us here!
      </p>
      <div className="bg-white border border-gray-200 rounded-lg flex flex-col p-4 flex-grow">
        <p className="text-sm text-gray-600 mb-2">
          Chatbot widget will be here.
        </p>
      </div>
    </div>
  );
}

export default Chatbot;
