
import Glassbutton from '@/app/component/Glassbutton'
import React from 'react'
import Link from 'next/link'
import Glowbutton from '@/app/component/Glowbutton';
import Gradientbutton from '@/app/component/Gradientbutton';
import Movinggradient from '@/app/component/Movinggradient';
import Movingline from '@/app/component/Movingline';
import Button from '@/app/component/Button';
const page = () => {
  return (
    <div className='bg-black p-16 space-y-4 h-screen flex flex-col text-white'>
      <div className='text-white text-5xl font-merriweather font-medium'>Buttons</div>
      <div className='text-[#7f7f7f] font-sans '>
      Enhance your UI with a stunning Buttons.
      </div>
      <div className='grid grid-cols-3 space-y-10 gap-10'>
      <Link href="/components/glow-button" className=' border border-[#313131]  rounded-xl mt-10 flex-col  h-40 '>
      <div className='px-6 py-3 text-lg font-sans font-semibold text-[#818181]'>Glow-Button</div>
      <div className='flex justify-center items-center h-20  '>  <Glowbutton text="Glowbutton" /></div>
      </Link>
    
      
      <Link href="/components/glass-button"
      className=' border border-[#313131] rounded-xl flex-col h-40 bg-gradient-to-r from-purple-700 to-red-600  '>
      <div className='text-lg font-sans font-semibold px-6 py-3 '>Glass Button</div>
      <div className=' h-24 flex justify-center items-center '><Glassbutton text= "Glassbutton" /></div>
      
      </Link>
      <Link href="/components/gradient-button" className=' border border-[#313131] rounded-xl h-40 flex-col'>
      <div className='text-lg font-sans font-semibold px-6 py-3 text-[#818181]'>Gradient Button</div>
      <div className=' h-24 flex justify-center items-center '>
      <Gradientbutton text="Gradient button" gradient="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"/>
      </div>
      </Link>
      <Link href="/components/moving-gradient" className=' border border-[#313131] rounded-xl h-40 '>
      <div className='text-lg font-sans font-semibold px-6 py-3 text-[#818181]'>Moving Gradient Button</div>
      <div className=' h-24 flex justify-center items-center' >
      <Movinggradient
    text="Moving Gradient button"
    gradient="transparent 50%"
    // blurIntensity="8px"
    // animationDuration={6}
    color = "blue"
  />
      </div>
      </Link>
      <Link href="/components/moving-line" className="border border-[#313131] rounded-xl">
  <div className="text-lg font-sans font-semibold px-6 py-3 text-[#818181]">
    Moving Line Button
  </div>
  <div className="h-24 flex justify-center items-center">
    <Movingline
      text="Moving Line button"
      gradient="transparent 50%"
      color="blue"
    />
  </div>
</Link>
<Link href="/components/simple-button" className=' border border-[#313131] rounded-xl h-40 flex-col'>
      <div className='text-lg font-sans font-semibold px-6 py-3 text-[#818181]'>Simple Button</div>
      <div className=' h-24 flex justify-center items-center '>
      <Button text = "Button"/>
      </div>
      </Link>

      </div>
      </div>
  )
}

export default page