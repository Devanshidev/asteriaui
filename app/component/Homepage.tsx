"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../component/Header";
import { AuroraBackground } from "../components/ui/aurora-background";

const Homepage = () => {
  return (
    <AuroraBackground className="h-screen w-screen bg-black">
      <Header/>
      <div className="flex justify-center items-center flex-col h-screen space-y-5">
      <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="text-7xl font-semibold font-inter text-white"
>
  Style in
  <span className="gradient-text ml-4">
    Hours
  </span>, Not Days..

  {/* Inline CSS for gradient animation */}
  <style jsx>{`
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      20% { background-position: 20% 50%; }
      40% { background-position: 40% 50%; }
      60% { background-position: 60% 50%; }
      80% { background-position: 80% 50%; }
      100% { background-position: 100% 50%; }
    }

    .gradient-text {
      background: linear-gradient(90deg, 
        #00F5A0,  /* Vibrant Turquoise */
        #00D9FF,  /* Bright Aqua */
        #6A00F4,  /* Royal Purple */
        #FF007A,  /* Bold Hot Pink */
        #FFD700,  /* Premium Gold */
        #FFC371,  /* Soft Peach */
        #F8E7D1  /* Elegant Champagne */
      );
      background-size: 400% 400%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientShift 6s infinite ease-in-out;
    }
  `}</style>
</motion.div>


        {/* Subtext Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-inter text-base text-center text-[#919090] font-medium"
        >
          <div>Building UI shouldn't feel like rocket science.</div>
          <div>
            It’s time to simplify, streamline, and make the process as enjoyable as it is effective.
          </div>
        </motion.div>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center items-center space-x-10"
        >
          {/* Request a Component Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="py-2 px-3 rounded-md flex justify-center items-center space-x-2 bg-white cursor-pointer"
          >
            <button className="flex font-semibold text-black text-[12px]">
              Request a Component
            </button>
          </motion.div>

          {/* Browse Components Button */}
          <motion.div
         
            whileHover={{ scale: 1.1, backgroundColor: "#313131" }}
            whileTap={{ scale: 0.95 }}
            className="py-2 px-3 z-20 rounded-md flex justify-center items-center cursor-pointer"
          >
            <Link
             href="/components" className="flex font-semibold text-white text-[12px]">
              Browse Components
            </Link>
          </motion.div>
        </motion.div>
      </div>
  
    </AuroraBackground>
  );
};

export default Homepage;
