"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Wavy = ({text1, text2}:{text1: string, text2: string}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Prevent errors if canvas is not yet available
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize();

    // Define multiple waves with different parameters
    const waves = [
      { amplitude: 50, frequency: 0.005, speed: 0.05, opacity: 0.7 },
      { amplitude: 40, frequency: 0.007, speed: 0.04, opacity: 0.5 },
      { amplitude: 30, frequency: 0.009, speed: 0.06, opacity: 0.3 },
      { amplitude: 45, frequency: 0.006, speed: 0.03, opacity: 0.4 },
      { amplitude: 35, frequency: 0.008, speed: 0.07, opacity: 0.6 },
    ];

    let animationFrame;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerY = canvas.height / 2;

      waves.forEach((wave) => {
        // Create gradient for each wave
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `rgba(79, 172, 254, ${wave.opacity})`); // #4FACFE
        gradient.addColorStop(0.5, `rgba(180, 101, 218, ${wave.opacity})`); // #B465DA
        gradient.addColorStop(1, `rgba(79, 172, 254, ${wave.opacity})`);

        ctx.beginPath();
        ctx.moveTo(0, centerY);

        // Draw wave
        for (let x = 0; x < canvas.width; x++) {
          const y =
            centerY +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        // Style
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;

        // Glow effect
        ctx.shadowColor = "#B465DA";
        ctx.shadowBlur = 15;

        ctx.stroke();
      });

      time += 0.05;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <div className="relative w-[1100px] h-[450px] bg-black flex items-center justify-center overflow-hidden">
      {/* Wavy Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          filter: "blur(1px)",
          transform: "translateZ(0)",
        }}
      />
      
      {/* Motion Animated Text */}
      <motion.div
        className="absolute text-white text-5xl font-sans font-semibold text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div>{text1}</div>
        <div className="flex justify-center">{text2}</div>
      </motion.div>
    </div>
  );
};

export default Wavy;

// import React from "react";
// import { motion } from "framer-motion";

// const Wavy = () => {
//   return (
//     <div className="relative w-full h-screen bg-black">
//       <svg viewBox="0 0 1440 320" className="absolute inset-0 w-full h-full">
//         {/* Multiple Animated Waves with Different Colors and Opacity */}
//         {[...Array(5)].map((_, i) => {
//           const delay = i * 0.5;
//           return (
//             <motion.path
//               key={i}
//               fill="none"
//               strokeWidth="3"
//               stroke={`rgba(79, 172, 254, ${0.3 + i * 0.1})`}
//               d="M0,160L80,180C160,200,320,260,480,245C640,230,800,139,960,122C1120,105,1280,175,1360,208L1440,240L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
//               animate={{
//                 d: [
//                   "M0,160L80,180C160,200,320,260,480,245C640,230,800,139,960,122C1120,105,1280,175,1360,208L1440,240L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z",
//                   "M0,192L80,170C160,148,320,106,480,112C640,118,800,170,960,181C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
//                 ],
//                 opacity: [0.8, 0.4, 0.8]
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//                 delay
//               }}
//               style={{
//                 filter: "drop-shadow(0px 0px 10px rgba(79, 172, 254, 0.8))"
//               }}
//             />
//           );
//         })}
//       </svg>
//     </div>
//   );
// };

// export default Wavy;
