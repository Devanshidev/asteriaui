"use client";
import React, { useState } from "react";

const Popup = () => {
  const [pop, setPop] = useState(false);

  return (
    <>
      {pop && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
          <div className="bg-[#1a1a1a] border border-[#484747] p-6 rounded-2xl w-[450px] shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-white">Create Group</h2>
            <div>
              <div className="text-sm font-medium text-white">Group Name</div>
              <input
                type="text"
                placeholder="Enter Group Name"
                className="bg-[#272727] rounded-md w-full p-2 mt-1  placeholder:text-[12px]"
              />
              <div className="mt-4 text-sm font-medium text-white">Enter Group Description</div>
              <input
                placeholder="Describe your Group"
                className="bg-[#272727] rounded-md w-full p-2 mt-1  placeholder:text-[12px]"
              />
              <div className="mt-4 text-sm font-medium text-white">Paid</div>
              <div className="mt-4 text-[11px] font-medium text-white">Price</div>
              <input
                placeholder="e.g - Premium Content"
                className="bg-[#272727] rounded-md w-full p-2 mt-1  placeholder:text-[12px]"
              />
            </div>
            <div 
            onClick={() => setPop(false)} 
            className="flex justify-center items-center mt-4 bg-green-500 rounded-md w-full p-2 ">
              <button 
                
                className="text-white font-semibold ">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center bg-[#1a1a1a]">
        <div 
          onClick={() => setPop(true)}
          className="bg-[#1a1a1a] text-white py-2 px-4 rounded-md border border-[#676767] text-[14px] cursor-pointer">
          <span>Click Me..!!</span>
        </div>
      </div>
    </>
  );
};

export default Popup;
