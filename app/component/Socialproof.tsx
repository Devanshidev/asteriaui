"use client";
import React from "react";
import Image from "next/image";


const Socialproof = ({logos}:{logos:any}) => {
  // Array of logos
  

  return (
    <div className="flex flex-col items-center">
      <div className="text-white font-sans text-xl font-semibold">
        Featured in
      </div>

      {/* Blurred Background Grid */}
      <div className="flex  gap-16 mt-8 h-20 bg-gray-300/80 px-5">
        {logos.map((logo, idx) => (
          <div key={idx} className="w-20 h-20 flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socialproof;
