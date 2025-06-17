"use client";
import React, { useState } from "react";
import Image from "next/image";

import { GoHeartFill } from "react-icons/go";

const Card = ({image1,name,description}:{image1:any,name:string,description:string}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex justify-center items-center h-full relative">
      {/* Card Container */}
      <div className="rounded-xl bg-white shadow-lg p-2 w-[230px] flex flex-col justify-between ">
        {/* Image Wrapper */}
        <div className="rounded-lg  border border-orange-400 relative">
          <Image
            src={image1}
            alt="Asteria UI"
            className="w-full h-[230px] rounded-lg object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-1 py-4 flex-grow">
          <div className=" flex ">
          <h3 className="text-black text-sm font-medium font-sans">
            {name}
          </h3>
           {/* Heart Icon */}
          <div
            onClick={toggleLike}
            className={`text-2xl cursor-pointer transition-colors duration-300 ${
              liked ? "text-red-500 scale-110" : "text-gray-400 hover:text-red-500"
            }`}
          >
            <GoHeartFill />
          </div>
          </div>
          <p className="text-gray-600 text-xs mt-2 font-sans line-clamp-3">
            {description}
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-center pb-2">
          

          {/* Buy Now Button */}
          <button className="bg-[#383838] text-white text-xs font-semibold px-4 py-2 rounded-md w-full hover:bg-black transition-all duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
