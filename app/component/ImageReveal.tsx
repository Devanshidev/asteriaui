"use client";
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const ImageReveal = ({image1,image2}:{image1:any,image2:any}) => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e:any) => {
    if (!containerRef.current) return;
    
    const rect = (containerRef.current as HTMLDivElement).getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <motion.div
    
       className='  bg-black flex justify-center items-center'>
        <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative rounded-2xl w-[300px] h-[420px] shadow-2xl'>
         <Image
         src={image1}
         alt = "image"
        className='object-cover rounded-2xl w-full h-full'  
        />
        <motion.div className="absolute top-0 left-0 w-full h-full"
        animate={{
            WebkitClipPath: `circle(${isHovering ? '50px' : '0px'} at ${mousePosition.x}px ${mousePosition.y}px)`,
            clipPath: `circle(${isHovering ? '50px' : '0px'} at ${mousePosition.x}px ${mousePosition.y}px)`
          }}
          
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30
        }}>
            <Image
            src={image2}
            alt='image'
           className='w-full h-full object-cover rounded-2xl '
            />
        </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default ImageReveal

// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import  img1 from "../../public/assets/img1.jpg"
// import  img2 from "../../public/assets/img2.jpg"
// import Image from 'next/image';
// const ImageReveal = () => {
//   const containerRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;
    
//     const rect = containerRef.current.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top
//     });
//   };

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   return (
//     <motion.div 
//       ref={containerRef}
//       className="relative w-full max-w-2xl mx-auto overflow-hidden"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Base Image */}
//       <Image
//         src={img1}
//         alt="Base"
//         className="w-full h-auto"
//       />
      
//       {/* Reveal Image with Animated Mask */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full"
//         animate={{
//             WebkitClipPath: `circle(${isHovering ? '100px' : '0px'} at ${mousePosition.x}px ${mousePosition.y}px)`,
//             clipPath: `circle(${isHovering ? '100px' : '0px'} at ${mousePosition.x}px ${mousePosition.y}px)`
//           }}
          
//         transition={{
//           type: "spring",
//           stiffness: 200,
//           damping: 30
//         }}
//       >
//         <Image
//           src={img2}
//           alt="Reveal"
//           className="w-full h-auto"
//         />
//       </motion.div>
      
//       {/* Hover Instructions */}
//       {/* <motion.div 
//         className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 20 }}
//         transition={{
//           duration: 0.3,
//           ease: "easeOut"
//         }}
//       >
//         Hover to reveal image
//       </motion.div> */}
//     </motion.div>
//   );
// };

// export default ImageReveal;

// import React, { useState } from 'react';
// import { motion, useMotionValue, useSpring } from 'framer-motion';
// import  img1 from "../../public/assets/img1.jpg"
// import  img2 from "../../public/assets/img2.jpg"
// import Image from 'next/image';
// const ImageReveal = () => {
//   const [isHovering, setIsHovering] = useState(false);
  
//   // Use motion values for smooth mouse tracking
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
  
//   // Add spring physics for smoother movement
//   const springX = useSpring(mouseX, {
//     stiffness: 200,
//     damping: 30
//   });
  
//   const springY = useSpring(mouseY, {
//     stiffness: 200,
//     damping: 30
//   });

//   const handleMouseMove = (event) => {
//     const { currentTarget, clientX, clientY } = event;
//     const { left, top } = currentTarget.getBoundingClientRect();
    
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   };

//   return (
//     <motion.div 
//       className="relative w-full max-w-2xl mx-auto overflow-hidden"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Base Image */}
//       <Image
//         src={img1}
//         alt="Base"
//         className="w-full h-auto"
//       />
      
//       {/* Reveal Image with Animated Mask */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full"
//         style={{
//           clipPath: 'circle(0px)',
//           WebkitClipPath: 'circle(0px)'
//         }}
//         animate={{
//           clipPath: `circle(${isHovering ? '100px' : '0px'} at ${springX}px ${springY}px)`,
//           WebkitClipPath: `circle(${isHovering ? '100px' : '0px'} at ${springX}px ${springY}px)`
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 200,
//           damping: 30
//         }}
//       >
//       <Image
//           src={img2}
//           alt="Reveal"
//           className="w-full h-auto"
//         />
//       </motion.div>
      
//       {/* Hover Instructions */}
//       <motion.div 
//         className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 20 }}
//         transition={{
//           duration: 0.3,
//           ease: "easeOut"
//         }}
//       >
//         Hover to reveal image
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ImageReveal;