"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Utility function to generate random particles
const generateParticles = (count, width, height) => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1 + 0.5, // Reduced size (0.5 to 1.5)
    speed: Math.random() * 0.5 + 0.1,
    color: 'rgba(255, 255, 255, 0.7)', // Pure white with slight transparency
    direction: {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    }
  }));
};

const Particle = ({ 
  particleCount , 
  interactive = true,
  backgroundColor = 'bg-[#000015]' ,
  text1,
  text2
}:{text1: string, text2: string,particleCount: any, interactive: any, backgroundColor: string}) => {
  const containerRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Initialize particles on mount
  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setParticles(generateParticles(particleCount, width, height));
    }
  }, [particleCount]);

  // Interactive mouse movement
  const handleMouseMove = (e) => {
    if (!interactive) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Particle animation logic
  const animateParticles = (particle, index) => {
    // Basic movement
    let newX = particle.x + particle.direction.x * particle.speed;
    let newY = particle.y + particle.direction.y * particle.speed;

    // Wrap around screen
    const width = containerRef.current?.clientWidth || window.innerWidth;
    const height = containerRef.current?.clientHeight || window.innerHeight;

    if (newX < 0) newX = width;
    if (newX > width) newX = 0;
    if (newY < 0) newY = height;
    if (newY > height) newY = 0;

    // Optional: Add slight mouse influence
    if (interactive) {
      const dx = newX - mousePosition.x;
      const dy = newY - mousePosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Particles move away from mouse within a certain radius
      if (distance < 100) {
        newX += (dx / distance) * 2;
        newY += (dy / distance) * 2;
      }
    }

    return {
      ...particle,
      x: newX,
      y: newY
    };
  };

  // Animate particles on each frame
  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setParticles(currentParticles => 
        currentParticles.map(animateParticles)
      );
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [particles, mousePosition]);

  return (
    <div 
      ref={containerRef}
      className={`w-[1000px] h-[400px]  ${backgroundColor}`}
      onMouseMove={handleMouseMove}
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{ 
            x: particle.x, 
            y: particle.y 
          }}
          transition={{ 
            duration: 0,
            type: 'tween'
          }}
          style={{
            position: 'absolute',
            width: particle.radius * 2,
            height: particle.radius * 2,
            borderRadius: '50%',
            backgroundColor: particle.color
          }}
        />
      ))}
      <div className=" flex-col flex  justify-center items-center h-full">
      {/* Main Heading */}
      <motion.div
        className="text-6xl font-bold mb-7 font-sans text-white "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {text1}
      </motion.div>

      {/* Subtext */}
      <motion.div
        className="text-lg font-sans text-gray-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
       {text2}
      </motion.div>
      
    </div>
    
    </div>
  );
};

export default Particle;