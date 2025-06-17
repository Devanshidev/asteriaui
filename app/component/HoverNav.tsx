"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
const HoverNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const Options = ["Home", "Components", "Themes", "Documentation"];
  const Content = [
    "This is the Home section!",
    "This is the Components section!",
    "This is the Themes section!",
    "This is the Documentation section!",
  ];

  return (
    <div className=" flex items-center h-full justify-center overflow-auto  w-full">
      <div className="border-2 border-[#676767] rounded-2xl text-white font-poppins  p-2 px-4 mt-8">
      
        <ul className="flex justify-around items-center space-x-8 text-[14px] pn:max-sm:flex-col pn:max-sm:space-y-5 ">
          {Options.map((option, index) => (
            <li
              key={index}
              className="relative hover:text-emerald-400 cursor-pointer"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {option}
              {/* Hover box */}
              {isHovered === index && (
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1,left: "50%",transform: "translateX(-50%)"}}
                transition={{ease:"easeInOut"}}
                  className="absolute bg-[#191919] border border-[#676767] p-4 rounded-md shadow-lg w-[200px] z-10 text-white mt-2"
             
                >
                  <p>{Content[index]}</p>
                </motion.div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HoverNav;

