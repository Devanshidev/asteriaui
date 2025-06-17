
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Typewriter = ({ fullText }: { fullText: string }) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping && text.length < fullText.length) {
      // Add the next character from fullText
      timeout = setTimeout(() => {
        setText((prevText) => fullText.slice(0, prevText.length + 1));
      }, 200);
    } else if (isTyping && text.length === fullText.length) {
      // Pause when full text is displayed
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000); // Wait for 2 seconds
    } else if (!isTyping) {
      // Reset text after pause
      timeout = setTimeout(() => {
        setText("");
        setIsTyping(true);
      }, 1000); // Wait for 1 second before restarting
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, fullText]);

  return (
    <div className="w-[500px] h-[300px] flex justify-center items-center bg-gradient-to-br from-[#fbab8d] via-[#faefcd] to-[#76dbcd] rounded-xl border border-orange-300">
      <div className="bg-white/60 backdrop-blur-sm rounded-lg border border-[#FFF1E5] px-4 py-2 shadow-xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl font-poppins font-semibold text-black relative z-0"
        >
          {text}
        </motion.span>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [0, 1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          className="text-orange-500 text-4xl z-50"
        >
          |
        </motion.span>
      </div>
    </div>
  );
};

export default Typewriter;
