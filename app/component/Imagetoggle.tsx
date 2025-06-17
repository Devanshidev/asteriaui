"use client";
import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

// Define images and corresponding slide directions
const images = [
  
  "/assets/img2.jpg",
  "/assets/img1.jpg", // Second image
  "/assets/img3.jpg", // Third image
  "/assets/img4.jpg", // Fourth image
];

const directions = [
  { x: 0, y: -100 }, // Slide Up
  { x: -100, y: 0 }, // Slide Left
  { x: 0, y: 100 }, // Slide Down
  { x: 100, y: 0 }, // Slide Right
];

const Imagetoggle = () => {
  const [index, setIndex] = useState(0);

  // Handle next image change (Right Arrow)
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle previous image change (Left Arrow)
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
    {/* Left Arrow */}
    <IoIosArrowRoundBack
      className="text-3xl mr-2 text-white cursor-pointer hover:opacity-80"
      onClick={handlePrev}
    />
  
    {/* Circle Container with Border (No Gap) */}
    <div className=" rounded-full overflow-hidden w-36 h-36 flex items-center justify-center p-0">
      {/* Animated Image (Fully Fitting) */}
      <motion.img
        key={index} // Forces re-render on index change
        src={images[index]}
        alt={`Image ${index + 1}`}
        initial={{ x: directions[index].x, y: directions[index].y, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  
    {/* Right Arrow */}
    <IoIosArrowRoundForward
      className="text-3xl ml-3 text-white cursor-pointer hover:opacity-80"
      onClick={handleNext}
    />
  </div>
  
  );
};

export default Imagetoggle;


