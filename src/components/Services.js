import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <main className="bg-white py-20">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="p-4 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">
              One-On-One Tech Education
            </h2>
            <p className="mb-4">
              Our one-on-one tech education service is tailored to your specific
              needs. Whether you're a tech beginner or just need to brush up on
              a few skills, we're here to help. Our personalized approach
              ensures that you can navigate and utilize your tech devices
              efficiently and confidently.
            </p>
            <Link
              to="/services/tech-education"
              className="bg-blue-500 text-white p-2 rounded-md">
              Explore
            </Link>
          </div>
          <div className="p-4 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">TV Mounting & Setup</h2>
            <p className="mb-4">
              From helping you choose the perfect spot for your new smart TV, to
              expertly mounting it and setting it up with all your devices, we
              take the stress out of the process. We'll also guide you through
              its features and make sure you're comfortable using it before we
              leave.
            </p>
            <Link
              to="/services/tv-mounting"
              className="bg-blue-500 text-white p-2 rounded-md">
              Explore
            </Link>
          </div>
          <div className="p-4 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">
              PC & Mac Software Troubleshooting
            </h2>
            <p className="mb-4">
              Software issues can be frustrating and time-consuming. Our PC and
              Mac software troubleshooting service is designed to address issues
              swiftly, minimizing downtime. Whether it's a stubborn application,
              a slow system, or a virus, we've got the solutions.
            </p>
            <Link
              to="/services/software-troubleshooting"
              className="bg-blue-500 text-white p-2 rounded-md">
              Explore
            </Link>
          </div>
          <div className="p-4 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">In-Home Tech Support</h2>
            <p className="mb-4">
              Our in-home tech support offers a convenient, hands-off solution
              to your tech problems. From setting up a new device to
              troubleshooting an existing one, we provide a comprehensive
              service right at your doorstep, so you don't have to worry about a
              thing.
            </p>
            <Link
              to="/services/in-home-support"
              className="bg-blue-500 text-white p-2 rounded-md">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
