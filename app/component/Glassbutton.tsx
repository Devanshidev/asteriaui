"use client";
import React from "react";
import { motion } from "framer-motion";
const Glassbutton = ({ text }: { text: string }) => {
  return (
    <div className=" h-[200px] w-[400px] rounded-xl flex justify-center items-center bg-gradient-to-r from-purple-700 to-red-600  ">
      <div className="relative inline-flex items-center justify-center">
        {/* Outer (White) Button */}
        
        <motion.div 
    
       animate={{
                  "--angle": ["0deg", "90deg", "0deg"], // animate the angle to move the conic gradient
                  opacity: [1, 0.5, 1], 
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
      style={{
                   backgroundImage: "conic-gradient(from var(--angle), transparent 15%, white 25% 50%, transparent 50% 25%, white 75%)", // conic gradient with transparent opposite sides
                  "--angle": '0deg', // default starting point
                  
                  
            }}
        className="  rounded-full flex items-center justify-center  ">
          {/* Inner (Glass UI) Button */}
          <button className="rounded-full text-base font-poppins px-14 py-4 ">
          {text}
          </button>
          <button className="rounded-full bg-gradient-to-r from-purple-700 to-red-600   text-base font-poppins   px-[55px] py-[15px] text-white  absolute left-[50%] -translate-x-[50%] ">{text}</button>
        </motion.div>
      </div>
    </div>
  );
};
export default Glassbutton;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// const Glassbutton = ({ text }: { text: string }) => {
//   return (
//     <div className="bg-gradient-to-r from-[#1F2954] via-[#1A171D] to-[#2d1120] h-screen flex justify-center items-center  ">
//       <div className="relative inline-flex items-center justify-center">
//         {/* Outer (White) Button */}
//         <motion.div
//       animate={{
//         backgroundPosition: ["0% 0%", "800% 800%", "0% 0%"],
//         // backgroundSize: ["100% 100%", "150% 150%", "100% 100%"],
//         opacity: [1, 0.8, 1], // Subtle opacity changes
//       }}
//       transition={{
//         repeat: Infinity,
//         duration: 1,
//         ease: "linear",
//       }}
//         style={{
//             backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.01) 70%, gray 100%)",
//         }}
//         className="  rounded-full flex items-center justify-center p-0.5 border-2 border-[#0f1622]">
//           {/* Inner (Glass UI) Button */}
//           <button className="rounded-full  bg-white bg-opacity-0 text-sm font-poppins  px-32 py-8 ">
//           {text}
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };
// export default Glassbutton;
