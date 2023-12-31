import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import HeroImage from "../assets/img/hero.webp";
import { MotionMain, fadeIn} from "./animations/sharedAnimations";
import { motion } from "framer-motion";
import "../App.css";

const MotionLink = motion(RouterLink);


function ServiceItem({ title, children }) {
  return (
    <div className="text-center">
      <h3 className="text-2xl mb-4">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Home() {
  const isFirefox = useMemo(() => typeof InstallTrigger !== "undefined", []);
  const supportsBackdropFilter = useMemo(() => CSS.supports("backdrop-filter", "blur(1px)"), []);
  const blurClass = useMemo(() => supportsBackdropFilter ? "backdrop-blur-lg" : "blur-effect", [supportsBackdropFilter]);
  const bgOpacityClass = useMemo(() => isFirefox ? "" : "bg-opacity-10", [isFirefox]);
  const bgColorClass = useMemo(() => isFirefox ? "bg-genesis-blue" : "bg-white", [isFirefox]);
  return (
    <MotionMain variants={fadeIn} initial="hidden" animate="visible">
      <main>
        <section
          className={`relative flex items-center justify-center bg-center pb-[50px] drop-shadow-md shadow-inset-bottom sm:bg-right h-[450px] md:h-[550px] lg:h-[600px] ${blurClass}`}
          style={useMemo(() => ({
            backgroundImage: `url(${HeroImage})`,
          }), [])}>
          <div
            className={`${bgColorClass} ${bgOpacityClass} backdrop-blur-lg rounded-xl shadow-inner mt-[115px] p-6 text-center text-white px-6 border-[1px] border-white drop-shadow-xl backdrop-brightness-75 ml-4 mr-4`}
            id="hero-box">
            <h2
              className="text-5xl md:text-6xl mb-6 drop-shadow-md font-aoboshi"
              id="genesis-h2">
              genesis
            </h2>
            <h2
              className="text-4xl mb-4 lowercase drop-shadow-md"
              id="tech-install-h2">
              Tech Install/Support
            </h2>
            <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-2xl">
              Your one-stop solution for all your tech needs.<br />Servicing
              Medford, OR.
            </p>
            <MotionLink
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="inline-block py-4 px-8 text-xl bg-genesis-orange text-white font-bold rounded-full transition-colors duration-300 hover:bg-orange-700 drop-shadow-md"
              to="/appointment">
              Schedule Now
            </MotionLink>
          </div>
        </section>
        <section className="bg-white py-10">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-oswald text-center mb-8">Our Services</h2>
            <div className="max-w-xl mx-auto">
              <p className="text-lg text-center mb-8">
                Whether it's one-on-one tech education, or mounting and
                installing your new smart TV, or even troubleshooting your PC &
                Mac software, we've got you covered. We offer a wide range of
                tech support services with no-commitment monthly subscription
                services with full in-home tech support coverage and standalone
                tech support services for our non-members.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <ServiceItem title="One-On-One Tech Education">
                We provide personalized tech education to empower you to use
                your devices effectively and with confidence.
              </ServiceItem>
              <ServiceItem title="TV Mounting & Setup">
                From unboxing your new smart TV to mounting it and setting it
                up with your devices, we've got you covered.
              </ServiceItem>
              <ServiceItem title="PC & Mac Software Troubleshooting">
                We help solve software issues on your PC or Mac to ensure your
                system runs smoothly.
              </ServiceItem>
              <ServiceItem title="In-Home Tech Support">
                With our in-home tech support service, you can enjoy a
                convenient, hands-off solution to all your tech problems.
              </ServiceItem>
            </div>
          </div>
        </section>
      </main>
    </MotionMain>
  );
}

export default Home;
