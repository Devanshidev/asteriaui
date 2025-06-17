import React from 'react';

const Hovergradient = ({ text } : { text: string }) => {
  return (
    <button
    //   onClick={onClick}
      className="relative px-6 py-3 rounded-full text-lg font-medium transition-all hover:opacity-90 group"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      <span className="relative flex justify-center items-center font-sans font-semibold text-base text-white">
        {text }
        <span className="ml-2 text-lg leading-none"></span>
      </span>
    </button>
  );
};
export default Hovergradient;