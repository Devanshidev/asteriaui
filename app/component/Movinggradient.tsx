"use client";
import React from "react";
import { motion } from "framer-motion";

const Movinggradient: React.FC = ({text,gradient,color}:{text:string,gradient:string,color:string}) => {
  return (
    <div className="relative flex  ">
      {/* Wrapper to position both button and gradient */}
      <div className="relative inline-block">
        {/* Outer Moving Border (Blurred Gradient) */}
        <motion.div
          initial={{ filter: "blur(5px)" }}
          animate={{
            "--angle": ["0deg", "90deg", "180deg", "270deg", "360deg"],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
          style={{
            backgroundImage: `conic-gradient(from var(--angle), ${gradient}, ${color})`,
            "--angle": "0deg",
          }}
          className="absolute inset-0 rounded-2xl p-3"
        ></motion.div>

        {/* Inner Button (Sharp Text) */}
        <div className="relative bg-[#262525] rounded-2xl px-8 py-4 text-white text-sm text-center z-10">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Movinggradient;