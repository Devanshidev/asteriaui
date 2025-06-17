"use client";
import React, { useState } from "react";
import Image from "next/image";
import {motion} from "framer-motion"
interface ImageProps {
  imageUrl: string;
  text: string;
  zIndex: string;
}

const Tooltip: React.FC = ({images}:{images:any}) => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);



  return (
    <div className="p-8">
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${index !== 0 ? "-ml-5" : ""} ${image.zIndex} relative`}
            onMouseEnter={() => setActiveTooltip(index)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <Image
              src={image.imageUrl}
              alt={`Profile of ${image.text}`}
              width={80}
              height={70}
              className="rounded-full border-2 border-white shadow-lg"
            />
            {activeTooltip === index && (
              <motion.div 
            //   initial={{ opacity: 0,  scale: 0.9 }} // Tooltip starts lower and smaller
            //   animate={{ opacity: 1, scale: 1 }} // Tooltip moves to its normal position and size
            //   exit={{ opacity: 0, scale: 0.9 }} // Tooltip disappears with the same effect
            //   transition={{ duration: 0.3, ease: "easeInOut" }}
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1,left: "50%",transform: "translateX(-50%)"}}
            initial={{ 
                opacity: 0,
                scale: 0,
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                left: "50%",transform: "translateX(-50%)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.6
              }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-3 py-2 bg-[#302f2f] text-white text-sm rounded-lg whitespace-nowrap font-sans ">
                {image.text}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-[#302f2f] "></div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tooltip;