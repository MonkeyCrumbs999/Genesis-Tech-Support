import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/img/hero.png";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const MotionLink = motion(Link);
const MotionSection = motion.section;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <MotionSection
        className="relative flex items-center justify-center bg-center py-20 drop-shadow-md shadow-inset-bottom sm:bg-right"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
        variants={fadeIn}
        initial="hidden"
        animate="visible">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-inner p-6 text-center text-white px-6 border-[1px] border-white drop-shadow-xl backdrop-brightness-75 ml-4 mr-4">
          <h1 className="text-5xl md:text-6xl mb-6 drop-shadow-md font-aoboshi">
            genesis
          </h1>
          <h2 className="text-4xl mb-4 font-bold drop-shadow-md">
            Tech Install/Support
          </h2>
          <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-2xl">
            Your one-stop solution for all your tech needs.
          </p>
          <MotionLink
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.01, ease: "linear" },
            }}
            className="inline-block py-4 px-8 text-xl bg-genesis-orange text-white font-bold rounded-full transition duration-300 hover:bg-orange-700 drop-shadow-md"
            to="/subscription">
            Subscribe Now
          </MotionLink>
        </div>
      </MotionSection>

      <MotionSection
        className="bg-white py-20"
        variants={fadeIn}
        initial="hidden"
        animate="visible">
        <div className="container mx-auto px-8">
          {/* ... remaining code ... */}
        </div>
      </MotionSection>

      <IconButton
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
        }}
        color="primary"
        aria-label="scroll to top">
        <ArrowUpwardIcon />
      </IconButton>
    </main>
  );
}

export default Home;
