import React, { useState } from "react";

import { MotionMain, fadeIn } from "./animations/sharedAnimations"; // Adjust the path if necessary

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message sent:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <MotionMain variants={fadeIn} initial="hidden" animate="visible">
      <main className="py-28 p-4">
        <h2 className="text-4xl  text-center mb-4">Contact Us</h2>
        <p className="text-center mb-4">
          We're here to help. Send us a message and we'll get back to you as
          soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border-2 border-gray-200 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-2 border-gray-200 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border-2 border-gray-200 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-blue-500 text-white p-2 rounded-md">
            Send Message
          </button>
        </form>
      </main>
    </MotionMain>
  );
}

export default ContactUs;
