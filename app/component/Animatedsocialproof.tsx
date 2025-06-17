// import React from "react";
// import { motion } from "framer-motion";

// const AnimatedSocialproof = () => {
//   const logos = [
//     { color: "bg-red-500" },
//     { color: "bg-yellow-500" },
//     { color: "bg-green-500" },
//     { color: "bg-blue-500" },
//     { color: "bg-purple-500" },
//     { color: "bg-pink-500" },
//     { color: "bg-orange-500" },
//   ];

//   return (
//     <div className="flex justify-center items-center flex-col overflow-hidden">
//       <div className="text-white font-sans text-xl font-semibold">
//         Featured in
//       </div>

//       <div className="relative w-12 mt-10">
//         {/* Left fade mask */}
//         <div className="absolute left-0 top-0 h-12 w-20 bg-gradient-to-r from-[#0D1117] to-transparent z-10" />

//         {/* Right fade mask */}
//         <div className="absolute right-0 top-0 h-12 w-20 bg-gradient-to-l from-[#0D1117] to-transparent z-10" />

//         {/* Scrolling content */}
//         <div className="relative overflow-hidden">
//           <div className="flex">
//             <motion.div
//               className="flex gap-4 shrink-0"
//               animate={{
//                 translateX: [0, -1220]
//               }}
//               transition={{
//                 duration: 20,
//                 repeat: Infinity,
//                 ease: "linear",
//                 repeatType: "loop"
//               }}
//               style={{ willChange: "transform" }}
//             >
//               {/* First set of logos */}
//               {logos.map((logo, idx) => (
//                 <div key={idx} className={`${logo.color} w-20 h-20 shrink-0 rounded-lg`} />
//               ))}

//               {/* Second set of logos */}
//               {logos.map((logo, idx) => (
//                 <div key={`second-${idx}`} className={`${logo.color} w-20 h-20 shrink-0 rounded-lg`} />
//               ))}

//               {/* Third set for extra smooth transition */}
//               {logos.map((logo, idx) => (
//                 <div key={`third-${idx}`} className={`${logo.color} w-20 h-20 shrink-0 rounded-lg`} />
//               ))}
//                {logos.map((logo, idx) => (
//                 <div key={`fourth-${idx}`} className={`${logo.color} w-20 h-20 shrink-0 rounded-lg`} />
//               ))}
//             </motion.div>

//             {/* Duplicate for seamless infinite scroll */}
//             <motion.div
//               className="flex gap-4 shrink-0"
//               animate={{
//                 translateX: [0, -1240]
//               }}
//               transition={{
//                 duration: 20,
//                 repeat: Infinity,
//                 ease: "linear",
//                 repeatType: "loop"
//               }}
//               style={{ willChange: "transform" }}
//             >
//               {/* First set of logos */}
//               {logos.map((logo, idx) => (
//                 <div key={idx} className={`${logo.color} w-20 h-20 shrink-0 rounded-lg`} />
//               ))}

//               {/* Second set of logos */}
//               {logos.map((logo, idx) => (
//                 <div key={`second-${idx}`} className={`${logo.color} w-20 h-20 shrink-0 rounded-lg`} />
//               ))}

//               {/* Third set for extra smooth transition */}
//               {logos.map((logo, idx) => (
//                 <div key={`third-${idx}`} className={`${logo.color} w-20 h-20 shrink-0 rounded-lg`} />
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedSocialproof;

"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const Socialproof = ({logos}:{logos:any}) => {
  // Array of logos (replace with your actual image paths or URLs)
 

  return (
    <div className="flex justify-center items-center flex-col overflow-hidden ">
      <div className="text-white font-sans text-xl font-semibold">
        Featured in
      </div>

      <div className="relative w-full h-20 mt-10 bg-gray-300/80">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 h-20 w-40 bg-gradient-to-r from-[#0D1117] to-transparent z-10" />

        {/* Right fade mask */}
        <div className="absolute right-0 top-0 h-20 w-40 bg-gradient-to-l from-[#0D1117] to-transparent z-10" />

        {/* Scrolling content */}
        <div className="relative overflow-hidden">
          <div className="flex">
            <motion.div
              className="flex gap-4 shrink-0"
              animate={{
                translateX: [0, -1240],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              style={{ willChange: "transform" }}
            >
              {/* First set of logos */}
              {logos.map((logo, idx) => (
                <div key={idx} className="w-40 h-40 shrink-0 rounded-lg">
                  <Image
                   
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain w-20 h-20"
                  />
                </div>
              ))}

              {/* Second set of logos */}
              {logos.map((logo, idx) => (
                <div
                  key={`second-${idx}`}
                  className="w-40 h-40 shrink-0 rounded-lg"
                >
                  <Image
                   
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain w-20 h-20"
                  />
                </div>
              ))}

              {/* Third set for extra smooth transition */}
              {logos.map((logo, idx) => (
                <div
                  key={`third-${idx}`}
                  className="w-40 h-40 shrink-0 rounded-lg"
                >
                   <Image
                   
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain w-20 h-20"
                  />
                </div>
              ))}

              {/* Fourth set */}
              {logos.map((logo, idx) => (
                <div
                  key={`fourth-${idx}`}
                  className="w-40 h-40 shrink-0 rounded-lg"
                >
                  <Image
                   
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain w-20 h-20"
                  />
                </div>
              ))}
            </motion.div>

            {/* Duplicate for seamless infinite scroll */}
            <motion.div
              className="flex gap-4 shrink-0"
              animate={{
                translateX: [0, -1240],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              style={{ willChange: "transform" }}
            >
              {/* First set of logos */}
              {logos.map((logo, idx) => (
                <div key={idx} className="w-40 h-40 shrink-0 rounded-lg">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain w-20 h-20"
                  />
                </div>
              ))}

              {/* Second set of logos */}
              {logos.map((logo, idx) => (
                <div
                  key={`second-${idx}`}
                  className="w-40 h-40 shrink-0 rounded-lg"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain w-12 h-12"
                  />
                </div>
              ))}

              {/* Third set for extra smooth transition */}
              {logos.map((logo, idx) => (
                <div
                  key={`third-${idx}`}
                  className="w-40 h-40 shrink-0 rounded-lg"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain w-20 h-20"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialproof;
