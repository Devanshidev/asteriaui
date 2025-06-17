import React from 'react';

const Textarea = () => {
  return (
    <div className="flex justify-center items-center p-4  w-[50%] ">
      <textarea
        placeholder="Type your message here..."
        className="border border-gray-300 bg-black outline-none rounded-xl p-4 resize-none placeholder:text-sm text-sm font-sans w-full h-[130px] transition-all duration-300 ease-in-out hover:shadow-md text-white "
      />
    </div>
  );
};

export default Textarea;
