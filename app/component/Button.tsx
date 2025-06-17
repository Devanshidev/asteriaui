import React from 'react';

const Button = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center">
      <div className=" bg-[#1a1a1a] text-white py-2 px-4 rounded-lg border border-[#676767] text-sm duration-500 hover:scale-105 ">
        <span className="font-serif">{text}</span>
        {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-md scale-x-0 duration-500 group-hover:scale-x-100 origin-center"></div> */}
      </div>
    </div>
  );
};

export default Button;