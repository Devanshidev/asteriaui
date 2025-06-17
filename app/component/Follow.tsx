import React from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { PiPlusBold } from 'react-icons/pi'

const Follow = () => {
  const [tap, setTap] = React.useState(true)
  return (
    <div 
    onClick={() => setTap(!tap)} className='flex justify-center items-center h-screen '>
         {tap ? (
      <div className='bg-[#272727] px-3 py-1 rounded-md font-sans text-sm flex justify-center items-center gap-1 cursor-pointer font-semibold text-white'>
        <PiPlusBold className='font-bold'/>
        Follow
      </div>
         ):(
      <div className='bg-[#272727] px-3 py-1 rounded-md font-sans text-sm flex justify-center items-center gap-1 cursor-pointer font-semibold text-white'>
        <BsCheck2 className='font-bold'/>
        Following
      </div>
         )}
    </div>
  )
}

export default Follow
