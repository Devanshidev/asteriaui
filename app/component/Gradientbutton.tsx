"use client";
import React from "react";
import { motion } from "framer-motion";

const Gradientbutton = ({
  text,
  gradient,
}: {
  text: string;
  gradient: string;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative inline-flex items-center justify-center">
        {/* Outer Moving Border */}
        <motion.div
          initial={{ filter: "blur(8px)" }}
          className={`absolute inset-0 ${gradient} rounded-2xl`}
        ></motion.div>

        {/* Inner Button */}
        <div className="bg-[#080808] rounded-2xl z-10 px-8 py-4 text-white text-sm font-medium flex items-center justify-center">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Gradientbutton;