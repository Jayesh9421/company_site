import React from 'react';
import { motion } from 'framer-motion';
import { zoomInVariants, slideUpVariants } from "./animation";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col lg:flex-row justify-between items-center lg:items-start gap-[50px]"
    >
      {/* Left Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6 text-center lg:text-left"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          WELCOME TO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold"
        >
          Prime Construction
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="text-lg lg:text-xl italic text-gray-50 mt-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla,
          quod, dolor excepturi velit iste assumenda voluptas quaerat quis maxime
          quam sint temporibus fugiat vitae architecto possimus dolore repellat
          similique accusantium? Pariatur quia quo quam voluptatum deserunt
          cupiditate earum accusamus?
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="lg:w-[40%] w-full flex justify-center items-center"
      >
        <div className="w-full h-[200px] lg:h-[300px] bg-gray-700 rounded-lg flex justify-center items-center cursor-pointer">
          <motion.img
            className="rounded-lg"
            src={about}
            alt="about image"
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300, damping: 20 }} 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
