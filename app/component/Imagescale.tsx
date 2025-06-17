import React from 'react'

import Image from 'next/image'
const Imagescale = ({image}:{image:any}) => {
  return (
    <div className="w-60 h-72 rounded-md overflow-hidden">
      <div 
      className=' rounded-md  w-full h-full z-50 transform transition-transform duration-700 ease-in-out hover:scale-150'>
         <Image
        src={image}
        alt=""
        className="object-cover w-full h-full rounded-md"
      />
    </div>
    </div>
  )
}

export default Imagescale