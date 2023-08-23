// Services.js
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { MotionMain, zoomIn } from "./animations/sharedAnimations";

function Services() {
  return (
    <MotionMain variants={zoomIn} initial="hidden" animate="visible">
      <main className="py-20">
        <div className="container mx-auto px-8 py-10">
          <h1 className="text-4xl text-center mb-8 font-oswald">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ServiceCard
              title="One-On-One Tech Education"
              description="Our one-on-one tech education service is tailored to your specific needs. Whether you're a tech beginner or just need to brush up on a few skills, we're here to help. Our personalized approach ensures that you can navigate and utilize your tech devices efficiently and confidently."
              link="/services/tech-education"
            />
            <ServiceCard
              title="TV Mounting & Setup"
              description="From helping you choose the perfect spot for your new smart TV, to expertly mounting it and setting it up with all your devices, we take the stress out of the process. We'll also guide you through its features and make sure you're comfortable using it before we leave."
              link="/services/tv-mounting"
            />
            <ServiceCard
              title="PC & Mac Software Troubleshooting"
              description="Software issues can be frustrating and time-consuming. Our PC and Mac software troubleshooting service is designed to address issues swiftly, minimizing downtime. Whether it's a stubborn application, a slow system, or a virus, we've got the solutions."
              link="/services/software-troubleshooting"
            />
            <ServiceCard
              title="In-Home Tech Support"
              description="Our in-home tech support offers a convenient, hands-off solution to your tech problems. From setting up a new device to troubleshooting an existing one, we provide a comprehensive service right at your doorstep, so you don't have to worry about a thing."
              link="/services/in-home-support"
            />
          </div>
        </div>
      </main>
    </MotionMain>
  );
}

export default Services;
