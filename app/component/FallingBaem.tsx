import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FallingBeam = ({ 
  beamCount ,
  backgroundColor ,
  text 
}:{text: string, beamCount: any, backgroundColor: any}) => {
  const containerRef = useRef(null);
  const [beams, setBeams] = useState([]);

  useEffect(() => {
    if (containerRef.current) {
      const width = window.innerWidth; // Ensure full screen width
      
      const generatedBeams = Array.from({ length: beamCount }, () => ({
        x: Math.random() * width,         // Random x position across full width
        width: Math.random() * 2 + 1,     // Random width (1px to 3px)
        opacity: Math.random() * 0.7 + 0.3, // Random opacity (0.3 to 1)
        speed: Math.random() * 200 + 100, // Random fall speed (100ms to 300ms)
        delay: Math.random() * 2          // Random start delay (0s to 2s)
      }));

      setBeams(generatedBeams);
    }
  }, [beamCount]);

  return (
    <div className="overflow-hidden ">
      <div ref={containerRef} className={`relative w-[1100px] h-[450px] ${backgroundColor}`}>
        {beams.map((beam, index) => (
          <motion.div
            key={index}
            initial={{ y: -50, opacity: beam.opacity }}
            animate={{ y: '100vh', opacity: [beam.opacity, 0] }}
            transition={{
              duration: beam.speed / 100,
              delay: beam.delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear'
            }}
            style={{
              position: 'absolute',
              left: beam.x,
              width: beam.width,
              height: '50px',
              background: 'linear-gradient(to top, rgba(255,255,255,0.8), rgba(255,255,255,0))',
              boxShadow: '0 0 10px rgba(255,255,255,0.5)'
            }}
          />
        ))}
         <div className='flex justify-center items-center h-full text-6xl font-sans font-bold text-white'>{text}</div>
      </div>
     
    </div>
  );
};

export default FallingBeam;