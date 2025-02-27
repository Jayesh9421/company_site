import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { zoomInVariants, slideUpVariants } from "./animation";

const Contacts = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      setResult("Please fill in all required fields.");
      return;
    }

    formData.append("access_key", 'bbd8e9ff-02bb-4e47-b01c-d8000796bc66');

    try {
      setResult("Sending...");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        alert("Your message has been sent successfully!"); // pop-up alert
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div id='contacts' className='bg-white w-full'>
      <div
        id="about"
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col lg:flex-row justify-between items-center lg:items-start gap-[50px]"
      >
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
            CONTACT US
          </motion.h1>
          <motion.h1
            variants={slideUpVariants}
            className="text-black uppercase text-[40px] font-bold"
          >
            REACH US FOR ANY QUERY
          </motion.h1>
          <div className="w-[120px] h-[6px] bg-yellow-500"></div>
          <p className="text-lg lg:text-xl italic text-gray-600 mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla,
            quod, dolor excepturi velit iste assumenda voluptas quaerat quis maxime
            quam sint temporibus fugiat vitae architecto possimus dolore repellat
            similique accusantium? Pariatur quia quo quam voluptatum deserunt
            cupiditate earum accusamus?
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="lg:w-[40%] w-full flex justify-center items-center"
        >
          <motion.form
            onSubmit={onSubmit}
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='flex flex-col justify-center items-start gap-4 w-full'
          >
            <input
              type="text"
              placeholder='Enter Fullname'
              name='name'
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
            />
            <input
              type="email"
              placeholder='Enter Email'
              name='email'
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
            />
            <input
              type="number"
              placeholder='Enter Mobile No'
              name='mobileno'
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
            />
            <textarea
              name="message"
              className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'
              placeholder='Enter your message'
              rows="4"
              id=""
            ></textarea>
            <motion.button
              type='submit'
              variants={zoomInVariants}
              className='bg-yellow-500 hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full'
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {result && (
        <div className="mt-6 text-center text-lg text-gray-700">
          <p className={`${result == 'Form Submitted Successfully' ? 'font-semibold text-green-600': "text-black"}`}>{result}</p>
        </div>
      )}
    </div>
  );
}

export default Contacts;
