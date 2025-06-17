import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  FaRocket,
  FaBolt,
  FaUniversalAccess,
  FaCogs,
  FaMoon,
  FaBrush,
} from "react-icons/fa"; 

const Scrollcard = () => {
  const { scrollYProgress } = useScroll(); 
  const cards = [
    {
      title: "Modern Aesthetics",
      description: "A sleek, futuristic design with stunning UI elements.",
      gradient: "bg-gradient-to-br from-blue-700 via-purple-800 to-pink-700", 
      icon: <FaRocket className="text-4xl text-white/90" />,
      width: "420px",
      height: "290px",
    },
    {
      title: "Blazing Performance",
      description: "Optimized for ultra-fast rendering and smooth experience.",
      gradient: "bg-gradient-to-br from-[#FF416C] via-[#FF4B2B] to-[#ff0066]", 
      icon: <FaBolt className="text-4xl text-white/90" />,
      width: "410px",
      height: "290px",
    },
    {
      title: "Seamless Accessibility",
      description: "Built with accessibility-first principles for all users.",
      gradient: "bg-gradient-to-br from-[#6A11CB] via-[#2575FC] to-[#00c6ff]", 
      icon: <FaUniversalAccess className="text-4xl text-white/90" />,
      width: "400px",
      height: "290px",
    },
    {
      title: "Dynamic Interactions",
      description: "Smooth animations that enhance the user experience.",
      gradient: "bg-gradient-to-br from-[#00467F] via-[#A5CC82] to-[#2AF598]", 
      icon: <FaCogs className="text-4xl text-white/90" />,
      width: "390px",
      height: "290px",
    },
    {
      title: "Dark Mode Excellence",
      description: "Seamless integration for light & dark UI switching.",
      gradient: "bg-gradient-to-br from-[#141E30] via-[#243B55] to-[#2E86AB]", 
      icon: <FaMoon className="text-4xl text-white/90" />,
      width: "380px",
      height: "290px",
    },
    {
      title: "Customization Freedom",
      description: "Easily adaptable to any brand or design requirement.",
      gradient: "bg-gradient-to-br from-[#D9A7C7] via-[#FBC2EB] to-[#FF9A9E]", 
      icon: <FaBrush className="text-4xl text-white/90" />,
      width: "365px",
      height: "290px",
    },
  ];
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
  });

  return (
    <div className="relative h-[300vh] w-screen flex justify-center items-center  overflow-y">
      <div className="fixed top-[500px]">
        {cards.map((card, index) => {
          const start = index * 0.15;
          const end = start + 0.3;
          const xMove = useTransform(
            smoothScroll,
            [start, end],
            [0, index % 2 === 0 ? -2000 : 2000] 
          );

          return (
            <div className="flex items-center justify-center bg-red-600 h-full w-full ">
              <motion.div
                key={index}
                className={`absolute ${card.gradient} rounded-2xl w-full shadow-[0px_10px_30px_rgba(255,255,255,0.2)] flex flex-col items-center justify-center text-white text-center px-10 py-8 border border-white/10 
              backdrop-blur-sm bg-opacity-70 before:absolute before:inset-0 before:bg-white/10 before:blur-lg before:rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_15px_45px_rgba(255,255,255,0.3)]`}
                style={{
                  width: card.width || "400px", 
                  height: card.height || "280px", 
                  bottom: `calc(50% + ${index * 20}px)`,
                  // left: "50%", 
                  transform: "translateX(-50%)",
                  zIndex: cards.length - index,
                  x: xMove,

                }}
              >
                {card.icon} 
                <h2 className="text-3xl font-semibold mt-3 font-sans">
                  {card.title}
                </h2>
                <p className="text-sm mt-3 font-sans">{card.description}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Scrollcard;
