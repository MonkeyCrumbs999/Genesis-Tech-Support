import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/img/hero.png";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

function Home() {
  return (
    <main>
      <section
        className="relative flex items-center justify-center bg-center py-20 drop-shadow-md shadow-inset-bottom sm:bg-right"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-inner p-6 text-center text-white px-6 border-[1px] border-white drop-shadow-xl backdrop-brightness-75">
          <h1 className="text-5xl md:text-6xl mb-6 drop-shadow-md font-aoboshi">
            genesis
          </h1>
          <h2 className="text-4xl mb-4 font-bold drop-shadow-md">
            Tech Install/Support
          </h2>
          <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-2xl">
            Your one-stop solution for all your tech needs.
          </p>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1, ease: "linear" },
            }}
            className="inline-block py-4 px-8">
            <Link
              to="/subscription"
              className="py-4 px-8 text-xl bg-genesis-orange text-white font-bold rounded-full transition duration-300 hover:bg-orange-700 drop-shadow-md">
              Subscribe Now
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-lg text-center mb-8">
              Whether it's one-on-one tech education, or mounting and installing
              your new smart TV, or even troubleshooting your PC & Mac software,
              we've got you covered. We offer a wide range of tech support
              services with no-committment monthly subscription services with
              full in-home tech support coverage and standalone tech support
              services for our non-members.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl mb-4 font-bold">
                One-On-One Tech Education
              </h3>
              <p>
                We provide personalized tech education to empower you to use
                your devices effectively and with confidence.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl mb-4 font-bold">TV Mounting & Setup</h3>
              <p>
                From unboxing your new smart TV to mounting it and setting it up
                with your devices, we've got you covered.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl mb-4 font-bold">
                PC & Mac Software Troubleshooting
              </h3>
              <p>
                We help solve software issues on your PC or Mac to ensure your
                system runs smoothly.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl mb-4 font-bold">In-Home Tech Support</h3>
              <p>
                With our in-home tech support service, you can enjoy a
                convenient, hands-off solution to all your tech problems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
