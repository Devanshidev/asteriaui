import React from 'react';
import { IconLayoutDashboard } from '@tabler/icons-react';
import Movinggradient from '@/app/component/Movinggradient';


const page = () => {
  return (
    <div className='bg-black p-16 space-y-4 h-screen flex flex-col'>
      <div className='text-white text-5xl font-sans font-medium'>Moving Gradient Button</div>
      <div className='text-[#7f7f7f] font-sans '>
      Make your UI stand out with this mesmerizing Moving Gradient Button!
      </div>
      <div className='flex space-x-2 items-center py-1 px-3 rounded-md'>
        <IconLayoutDashboard stroke={1} className='text-[#7f7f7f]' />
        <div className='text-[#7f7f7f] font-sans text-base font-semibold flex hover:text-white'>Preview</div>
      </div>
<div className='rounded-lg border border-[#313131] w-auto p-4 h-full flex justify-center '>
<Movinggradient
    text="Moving Gradient button"
    gradient="transparent 50%"
    // blurIntensity="8px"
    // animationDuration={6}
    color = "blue"
  />
</div>
    </div>
  );
};

export default page;
