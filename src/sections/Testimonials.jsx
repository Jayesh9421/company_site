import React from "react";
import { motion } from "framer-motion";
import { clients } from "./export";

const Testimonials = () => {

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for card hover effect
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div id="working" className="w-full bg-gray-900 py-16">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        className="lg:w-[80%] w-[90%] m-auto flex flex-col justify-between items-center gap-6"
      >
        <motion.h1 variants={textVariants} className="text-yellow-500 text-2xl">
          TESTIMONIALS
        </motion.h1>
        <motion.h1
          variants={textVariants}
          className="text-white uppercase text-[40px] font-bold text-center"
        >
          WHAT OUR CLIENT SAYS
        </motion.h1>
        <motion.div
          variants={textVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        className="lg:w-[80%] w-[90%] m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-10"
      >
        {clients.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between items-center bg-gray-800 border-2 border-gray-700 rounded-lg shadow-lg p-6 hover:bg-yellow-500 transition-all duration-300 group"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            {/* Client Feedback */}
            <motion.p
              className="text-white text-center text-lg group-hover:text-black mb-6"
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.about}
            </motion.p>

            {/* Client Info */}
            <div className="flex flex-col justify-center items-center text-white mt-6 group-hover:text-black">
              <motion.img
                className="w-[80px] h-[80px] rounded-full border-4 border-yellow-700 object-cover cursor-pointer"
                src={item.image}
                alt={`Client ${item.name}`}
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 },
                }}
              />
              <motion.h1
                className="text-xl font-semibold uppercase mt-4 cursor-pointer"
                variants={textVariants}
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 },
                }}
              >
                {item.name}
              </motion.h1>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
