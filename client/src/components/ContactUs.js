import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MotionMain, fadeIn } from "./animations/sharedAnimations";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c3ykmr4", //service id from emailjs.com
        "template_d2s1obw", //template id from emailjs.com
        e.target,
        "QXH-ZNI5yK9ppXX6W" //user id from emailjs.com
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Error sending message");
        }
      );
  };

  return (
    <MotionMain variants={fadeIn} initial="hidden" animate="visible">
      <main className="py-28 p-4">
        <h2 className="text-4xl text-center mb-4">Contact Us</h2>
        <p className="text-center mb-4">
          We're here to help. Send us a message and we'll get back to you as
          soon as possible.
        </p>
        <form
          onSubmit={sendEmail}
          className="max-w-md mx-auto"
          name="contact"
          method="POST"
          data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
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
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-2 border-gray-200 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border-2 border-gray-200 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-genesis-blue text-white p-2 rounded-md">
            Send Message
          </button>
        </form>
      </main>
    </MotionMain>
  );
}

export default ContactUs;
