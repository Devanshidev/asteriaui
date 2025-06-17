"use client";
import React from 'react'
import Image from 'next/image'

const Hoverzoom = ({image1,image2,image3,image4,image5}:{image1:any,image2:any,image3:any,image4:any,image5:any}) => {
  return (
    <div className='text-black flex justify-center items-center '>
        <Image 
         src={image1}
         alt = "asteriaui"
        className='w-16 rounded-full  hover:scale-125 transition-all duration-75 ease-in-out'/>
<Image 
         src={image2}
         alt = "asteriaui"
        className='w-16 rounded-full  hover:scale-125 transition-all duration-75 ease-in-out'/>
<Image 
         src={image3}
         alt = "asteriaui"
        className='w-16 rounded-full  hover:scale-125 transition-all duration-75 ease-in-out'/>
<Image 
         src={image4}
         alt = "asteriaui"
        className='w-16 rounded-full  hover:scale-125 transition-all duration-75 ease-in-out'/>
  <Image 
         src={image5}
         alt = "asteriaui"
        className='w-16 rounded-full  hover:scale-125 transition-all duration-75 ease-in-out'/>
        </div>
        
  )
}

export default Hoverzoom