"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";

const Glowbutton = ({ text }: { text: string }) => {
  const [hovered, setHovered] = useState(false);

  // Define positions for the star animations
  const stars = [
    { top: "20px", left: "30px" },
    { top: "30px", left: "40px" },
    { top: "40px", left: "30px" },
  ];

  return (
    <div className=" relative overflow-hidden rounded-lg">
        <div className="relative inline-flex items-center justify-center">
      <button
        onMouseEnter={() => setHovered(true)} // Trigger hover effect when mouse enters
        onMouseLeave={() => setHovered(false)} // Reset hover effect when mouse leaves
        className="relative bg-[#272727] hover:bg-[#3E2980] text-white px-1 py-0.5 rounded-full transition-all duration-200"
      >
      
        {/* Conic gradient effect animation */}
        <motion.button
          animate={
            hovered
              ? {
                  "--angle": ["0deg", "90deg", "180deg", "270deg", "360deg"], // Animated gradient angle on hover
                }
              : {}
          }
          transition={
            hovered
              ? {
                  repeat: Infinity, // Infinite repeat of the animation
                  duration: 1,
                  ease: "linear", // Smooth linear transition
                }
              : {}
          }
          style={{
            backgroundImage:
              "conic-gradient(from var(--angle), transparent 70%, pink)", // Apply conic gradient effect
            "--angle": "0deg",
          }}
          className="px-24 py-7 rounded-full transition-all duration-200"
        />

        {/* Button text */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-gradient-to-b from-blue-800 to-purple-500 hover:text-white text-[#585757] px-14 py-[16px] rounded-full font-semibold font-poppins transition-all duration-200 whitespace-nowrap text-sm">
          {text}
        </button>

        {/* Star animations */}
        <motion.div className="absolute -top-2 -left-3">
          {stars.map((position, index) => (
            <motion.div
              key={index}
              animate={{
                scale: hovered ? [0.5, 1, 0.5] : 1, // Scale effect based on hover state
                color: hovered ? "white" : "gray", // Change color on hover
                opacity: hovered ? 1 : 0.2, // Adjust opacity on hover
              }}
              transition={{
                repeat: hovered ? Infinity : 0, // Repeat animation if hovered
                duration: 1,
                delay: index * 0.2, // Stagger delay for each star
              }}
              initial={{ opacity: 0.5, scale: 1 }}
              className="absolute"
              style={{
                ...position, // Apply the respective position for each star
              }}
            >
              <PiStarFourFill className="text-white" />
            </motion.div>
          ))}
        </motion.div>
      </button>
      </div>
    </div>
  );
};

export default Glowbutton;
