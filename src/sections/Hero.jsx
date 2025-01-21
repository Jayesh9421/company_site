import React from 'react';
import bg from '../assets/bg.jpg'; // Import the background image
import { motion } from 'framer-motion';
import { zoomInVariants, slideUpVariants } from "./animation";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-0 px-[20px] flex justify-center items-center lg:flex-row flex-col bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`, // Set the background image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 text-white text-center lg:text-left flex flex-col items-center lg:items-start gap-6 max-w-[600px]">
        {/* Developer-Related Subtitle */}
        <motion.h3
          className="text-lg lg:text-2xl font-semibold text-yellow-500 uppercase"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Developers to Build the Future
        </motion.h3>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl lg:text-7xl font-bold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          We Will Build Your Dream
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-xl lg:text-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, erat ut posuere tincidunt, lacus odio tincidunt urna.
        </motion.p>

        {/* Button Container */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.button
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded shadow-lg text-lg"
          >
            Read More
          </motion.button>
          <motion.button
            variants={zoomInVariants}
            className="border-white hover:border-yellow-500 hover:text-yellow-500 border-2 px-10 py-3 rounded-lg text-white font-bold text-lg"
          >
            Reach Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
