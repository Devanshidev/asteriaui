import React from 'react'
import Image from 'next/image'

const Imagebg = ({image}:{image:any}) => {
  return (
   
    <div className="relative w-56 h-72 flex justify-center items-center">
    {/* Blurred background image */}
    <div 
      className="absolute inset-0 bg-center bg-cover blur-lg opacity-50 p-2 brightness-105 "
      style={{
        backgroundImage: 'url("/assets/img8.jpg")',
      }}
    />
    
    {/* Main sharp image */}
    <div className=' rounded-md  w-48 h-64 z-50'>
        <Image
        src={image}
        alt=""
        className="object-cover w-full h-full rounded-md"
      />
    </div>
  </div>
  )
}

export default Imagebg