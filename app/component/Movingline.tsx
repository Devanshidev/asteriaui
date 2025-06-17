"use client";
import React from "react";
import { motion } from "framer-motion";

const Movingline: React.FC<{ text: string; gradient: string; color: string }> = ({ text, gradient, color }) => {
  return (
    <div className="relative flex justify-center items-center  ">
      {/* Gradient Moving Line with Grey Overlay */}
      <motion.div
        animate={{
          "--angle": ["0deg", "90deg", "180deg", "270deg", "360deg"],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
        style={{
          backgroundImage: `conic-gradient(from var(--angle), ${gradient}, ${color})`,
          "--angle": "0deg",
        }}
        className="rounded-2xl p-[3px]  flex justify-center items-center"
      >
        {/* Grey overlay inside the gradient box */}
        <div className="bg-[#262525] rounded-2xl px-10 py-4 text-sm shadow-md whitespace-nowrap overflow-hidden text-ellipsis text-white">
          {text}
        </div>
      </motion.div>
    </div>
  );
};

export default Movingline;
