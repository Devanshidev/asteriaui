"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="">
      <motion.div 
        className="font-semibold font-sans text-white">
        Loading...
      </motion.div>

      <div className="relative h-2 w-64 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full p-[1px] overflow-hidden shadow-lg mt-1">
        {/* Background shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0"
          animate={{
            x: [-200, 200],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Main sliding indicator */}
        <motion.div
  className="h-full w-16 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.9)_10%,_rgba(255,255,255,0.4)_60%,_transparent_100%)] backdrop-blur-sm"
  initial={{ x: -50 }}
  animate={{ x: 220 }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  {/* Inner glow */}
  <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_0%,_transparent_100%)]" />
</motion.div>

        {/* Subtle pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(52, 211, 153, 0)",
              "0 0 0 3px rgba(52, 211, 153, 0.2)",
              "0 0 0 0 rgba(52, 211, 153, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default Loading;