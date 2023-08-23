import React from "react";
import { MotionMain, zoomIn } from "./animations/sharedAnimations"; // Adjust the path if necessary

function Subscription() {
  return (
    <MotionMain
      variants={zoomIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="p-28">
      <h2 className="text-2xl font-bold text-center mb-4">
        Subscription Plans
      </h2>
      <p className="text-center mb-4">Choose a plan that fits your needs.</p>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="border-2 border-gray-200 p-4 rounded-md shadow-lg">
            <h3 className="text-xl font-bold text-center mb-4">Basic Plan</h3>
            <p className="mb-4">
              Access to all our facilities from 9 AM to 5 PM on weekdays.
            </p>
            <p className="font-bold text-center text-lg mb-4">$50/month</p>
            <button className="block bg-blue-500 text-white py-2 px-4 rounded-md w-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="border-2 border-gray-200 p-4 rounded-md shadow-lg">
            <h3 className="text-xl font-bold text-center mb-4">Premium Plan</h3>
            <p className="mb-4">
              Access to all our facilities anytime. Includes free participation
              in group classes.
            </p>
            <p className="font-bold text-center text-lg mb-4">$100/month</p>
            <button className="block bg-blue-500 text-white py-2 px-4 rounded-md w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </MotionMain>
  );
}

export default Subscription;
