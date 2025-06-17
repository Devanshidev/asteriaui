"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SetUpAds = ({heading,option1,option2,option3}:{heading:string,option1:string,option2:string,option3:string}) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
    console.log("Arrow clicked", !open);
  };

  return (
    <div className="flex">
      <div className="border border-[#323131] w-full py-2 mt-3 flex justify-center items-center rounded-2xl bg-[#1a1a1a]">
        <div className="w-[98%]">
          <div 
           onClick={toggleDropdown}
           className="flex justify-between">
            <div className="text-[14px] font-semibold text-[#d1d1d1]">{heading}</div>
            <IoIosArrowDown
             
              className={`mt-1 cursor-pointer transform transition-transform duration-300 text-[#d1d1d1] ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`border border-[#323131] rounded-lg bg-[#1a1a1a] shadow-lg w-full transform transition-all duration-200 ease-in-out overflow-hidden ${
              open ? "max-h-40 opacity-100 mt-4 mb-2" : "max-h-0 opacity-0"
            }`}
          >
             <div className="p-2 text-[14px]  font-sans ">
              <ul>
                <li className="py-1 px-2 hover:bg-[#1e1e1e] text-[#818181] hover:text-white cursor-pointer">
                 {option1}
                </li>
                <li className="py-1 px-2 hover:bg-[#1e1e1e] text-[#818181] hover:text-white cursor-pointer">
                {option2}
                </li>
                <li className="py-1 px-2 hover:bg-[#1e1e1e] text-[#818181] hover:text-white cursor-pointer">
                {option3}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetUpAds;
