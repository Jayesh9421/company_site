import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";

import { motion } from "framer-motion";
import { slideUpVariants } from "./animation";

const Portfolio = () => {
  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div id="projects" className="w-full bg-gray-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          PORTFOLIO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold text-center"
        >
          OUR BEST PROJECTS
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>
      </motion.div>

      {/* Project Images with Animations */}
      <motion.div
        variants={containerVariants} // Parent container animation
        initial="hidden"
        whileInView="visible"
        className="w-full m-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[20px] px-5"
      >
        {[project1, project2, project3, project4, project5, project6, project7, project8].map(
          (project, index) => (
            <motion.div
              key={index}
              variants={itemVariants} // Individual image animation
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={project}
                alt={`project ${index + 1}`}
                className="h-[250px] w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                <h2 className="text-white text-lg font-bold">
                  Project {index + 1}
                </h2>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default Portfolio;
