"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({heading,option1,option2,option3}:{heading:string,option1:string,option2:string,option3:string}) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
    console.log("Arrow clicked", !open);
  };

  return (
    <div className=" w-[70%]">
      <div className="relative border border-[#323131] w-full py-2 mt-3 flex justify-center items-center rounded-2xl bg-[#1a1a1a]">
        <div 
        onClick={toggleDropdown}
        className="flex justify-between w-[90%] ">
          <div className="text-[14px] text-[#d1d1d1]">{heading}</div>
          <IoIosArrowDown
            
            className={`mt-1 cursor-pointer transform transition-transform duration-300 text-[#d1d1d1] ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
          <div
          className={`absolute top-full left-0 mt-1 border border-[#323131] rounded-lg bg-[#1a1a1a] shadow-lg w-full  transform transition-all duration-200 ease-in-out ${
            open ? "max-h-40 opacity-500" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="p-2">
          <li className="py-1 px-2 hover:bg-[#1e1e1e] text-[12px] text-[#d1d1d1] cursor-pointer">{option1}</li>
            <li className="py-1 px-2 hover:bg-[#1e1e1e] text-[12px] text-[#d1d1d1] cursor-pointer">{option2}</li>
            <li className="py-1 px-2 hover:bg-[#1e1e1e] text-[12px] text-[#d1d1d1] cursor-pointer">{option3}</li>
          </ul>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dropdown;