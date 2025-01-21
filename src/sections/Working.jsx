import React from 'react';
import { motion } from 'framer-motion';
import { zoomInVariants, slideUpVariants } from "./animation";
import { planning } from "./export";

const Working = () => {
  return (
    <div id="working" className="w-full bg-white">
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
          STEP BY STEP
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-[40px] font-bold text-center"
        >
          HOW IT'S WORKING
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-[40px] mt-[30px]"
        >
          {planning.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between items-center gap-5 border-2 border-yellow-500 rounded-md p-6 h-[350px] w-[250px] bg-white"
              whileHover={{ scale: 1.05 }} // Smooth scale effect on hover
              transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth transition
            >
              <div>
                <item.icon className="w-[80px] h-[80px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer" />
              </div>
              <h1 className="text-2xl font-bold uppercase">{item.title}</h1>
              <p className="text-center overflow-hidden text-sm">{item.about}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Working;
