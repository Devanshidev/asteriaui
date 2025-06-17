"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Animatetext = ({text}: {text: string}) => {
    const words: string[] = ["nice", "colorful", "supercool","amazing" , "nice"];
    const colors: string[] = ["text-red-500", "text-blue-500", "text-green-600","text-orange-500","text-red-500"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1500); // Change word every 1.5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-[100%] h-[60%] rounded-lg border border-pink-200  overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-100 to-rose-200" />

            {/* Text Animation */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <h1 className="text-5xl font-poppins font-semibold flex items-center space-x-4  px-6 py-2 rounded-md">
                    {/* Static part of the text with blue background */}
                    <span className=" text-black px-4 py-2 rounded-md inline-block">
                      {text}
                    </span>

                    {/* Animated part */}
                    <div className="w-[200px]">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={words[index]} 
                                className={`block ${colors[index]}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 ,filter: "blur(8px)"}} 
                                transition={{ duration: 0.5 }}
                            >
                                {words[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </h1>
            </div>

            {/* Simple wave shape */}
            <div className="absolute bottom-0 w-full">
                <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 250C240 200 480 150 720 200C960 250 1200 300 1440 250V400H0V250Z"
                        fill="#FFA5B9"
                        fillOpacity="0.6"
                    />
                    <path
                        d="M0 300C240 250 480 200 720 250C960 300 1200 350 1440 300V400H0V300Z"
                        fill="#FF8BA7"
                        fillOpacity="0.4"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Animatetext;