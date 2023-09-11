// Services.js
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { MotionMain, fadeIn } from "./animations/sharedAnimations";

function Services() {
  return (
    <MotionMain variants={fadeIn} initial="hidden" animate="visible">
      <main className="py-20">
        <div className="container mx-auto px-8 py-10">
          <h1 className="text-4xl text-center mb-8 font-oswald">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ServiceCard
              title="1-on-1 Education"
              description="Our one-on-one tech education service is tailored to your specific needs. Whether you're a tech beginner or just need to brush up on a few skills, we're here to help. Our personalized approach ensures that you can navigate and utilize your tech devices efficiently and confidently."
              price="$65"
              link="/services/tech-education"
            />
            {/* 
            <ServiceCard
              title="TV Mounting & Setup"
              description="From helping you choose the perfect spot for your new smart TV, to expertly mounting it and setting it up with all your devices, we take the stress out of the process. We'll also guide you through its features and make sure you're comfortable using it before we leave."
              link="/services/tv-mounting"
            /> */}
            <ServiceCard
              title="PC & Mac Setup"
              description="Get your PC or Mac up and running smoothly with our expert setup service. We'll ensure that your system is optimized for peak performance, install essential software, and configure it to meet your specific needs. Say goodbye to setup hassles and hello to a seamless computing experience."
              link="/services/pc-mac-setup"
              price="$100"
            />

            <ServiceCard
              title="Printer Setup or Troubleshooting"
              description="Experience hassle-free printing with our expert printer setup and troubleshooting service. Whether you're installing a new printer or dealing with printing issues, we've got you covered. We'll ensure your printer is seamlessly integrated into your network and resolve any printing problems you encounter."
              link="/services/printer-setup"
              price="$65"
            />

            <ServiceCard
              title="General Troubleshooting"
              description="Have a tech issue that's not specific to one device? Our general troubleshooting service is here to help. Our experts will diagnose and resolve a wide range of technical problems, from connectivity issues to software glitches, ensuring your devices run smoothly."
              link="/services/general-troubleshooting"
              price="$75"
            />
          </div>
        </div>
      </main>
    </MotionMain>
  );
}

export default Services;
