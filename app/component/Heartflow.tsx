"use client"; 
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { CiHeart } from "react-icons/ci"; 

const Heartflow = () => {
  const [hearts, setHearts] = useState<{ id: string; xOffset: number }[]>([]);
  const [isClicked, setIsClicked] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const clickCountRef = useRef(0);

  const spawnHeart = () => {
    const id = uuidv4();
    const xOffset = Math.random() * 20 - 10;

    setHearts((prev) => [...prev, { id, xOffset }]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 1200);
  };

  const handleClick = () => {
    setIsClicked(true);
    clickCountRef.current++;

    if (clickTimeoutRef.current === null) {
      spawnHeart();
      clickTimeoutRef.current = setTimeout(() => {
        clickTimeoutRef.current = null;
        clickCountRef.current = 0;
      }, 300);
    } else {
      spawnHeart();
    }
  };

  const handlePressStart = () => {
    setIsClicked(true);
    spawnHeart();
    intervalRef.current = setInterval(spawnHeart, 200);
  };

  const handlePressEnd = () => {
    setIsClicked(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen ">
      <div className="relative">
        <button
          onClick={handleClick}
          onMouseDown={handlePressStart}
          onMouseUp={handlePressEnd}
          onTouchStart={handlePressStart}
          onTouchEnd={handlePressEnd}
          className="relative z-10 text-red-500 text-4xl transition-all active:scale-95"
        >
          {isClicked ? <FaHeart className="text-red-500" /> : <CiHeart className="text-red-500 text-5xl" />}
        </button>

        <AnimatePresence>
          {hearts.map(({ id, xOffset }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 0, scale: 0.8 }}
              animate={{ opacity: 1, y: -80, scale: 1.5 }}
              exit={{ opacity: 0, y: -150, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute"
              style={{ left: `${xOffset}px`, bottom: "100%" }}
            >
              <FaHeart className="text-red-500 text-xl drop-shadow-md" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Heartflow;
