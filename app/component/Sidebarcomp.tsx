"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Sidebarcomp = () => {
  const [on, setOn] = useState<boolean>(false);

  const handleToggle = (): void => {
    setOn(!on);
  };

  return (
    <div className="flex  ">
      {/* Sidebar Toggle Button */}
      {!on && (
        
        <div
          onClick={handleToggle}
          className="text-[30px] bg-[#1a1a1a] text-white p-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#313131] rounded-r-lg absolute z-10"
        >
          <IoMenu  className="text-white text-lg" />
        </div>
      
      )}

      {/* Sidebar */}
      <div
        className={`bg-[#1a1a1a] w-[260px] h-[600px] flex flex-col justify-between pt-12 px-6 transform transition-transform duration-500 ease-in-out shadow-lg rounded-r z-40 ${
          on ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-base font-sans font-semibold text-white">Dashboard</h2>
          <IoMenu 
            onClick={handleToggle}
            className="text-xl text-white cursor-pointer transition-all duration-300 hover:text-gray-300"
          />
        </div>  

        {/* Sidebar Menu */}
        <ul className="space-y-6 text-sm font-sans text-white">
          <li className="hover:text-emerald-500 cursor-pointer transition-all duration-300 hover:pl-4">Home</li>
          <li className="hover:text-emerald-500 cursor-pointer transition-all duration-300 hover:pl-4">About</li>
          <li className="hover:text-emerald-500 cursor-pointer transition-all duration-300 hover:pl-4">Services</li>
          <li className="hover:text-emerald-500 cursor-pointer transition-all duration-300 hover:pl-4">Contact</li>
        </ul>

        {/* Footer Section */}
        <div className="text-center text-sm font-sans mt-12">
          <span className="mb-2 text-white">© Asteria UI</span>
          <p className="text-gray-400 mb-4 mt-1">All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebarcomp;
