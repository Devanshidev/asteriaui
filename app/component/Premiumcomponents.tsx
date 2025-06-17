import React from "react";
import Image from "next/image";
import Link from "next/link";
import glow from "../assets/glow.png";
import glass from "../assets/glass.png";
import gradient from "../assets/gradient.png";
import movingline from "../assets/movingline.png";

import hovernav from "../assets/hovernav.png";
import typewriter from "../assets/typewriter.png";
import imagereveal from "../assets/imagereveal.png";

import tooltip from "../assets/tooltip.png";

import globe from "../assets/globe.png";

import loading from "../assets/loading.png";
import animate from "../assets/animate.png";

import waves from "../assets/waves.png";

import particle from "../assets/particle.png";
import hovergradient from "../assets/hovergradient.png";
import fallingbeam from "../assets/fallingbeam.png";
import scroll from "../assets/scroll.png";
import kanban from "../assets/kanban.png";


import hovercard from "../assets/hovercard.png"

import animatesocial from "../assets/animatesocial.png"
import htestimonial from "../assets/htestimonial.png"
import vtestimonial from "../assets/vtestimonial.png"
import gradientimage from "../assets/gardientimage.png"
import scaleimage from "../assets/scaleimage.png"

const Allcomponents = () => {
  return (
    <div className="bg-black h-full  overflow-x-hidden ">
      <div className="grid grid-cols-2 space-y-5 gap-10 md:grid md:grid-cols-4">
        {/*--------------------------------------------------------- Glow Button------------------------------------------------ */}
        <Link href="/components/glow-button" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center mt-5 p-2">
            <Image src={glow} alt="asteria" className="rounded-xl p-1" />
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Glow-Button
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            Enhance your UI with a stunning Glow Button that emits a soft,
            radiant glow on hover.
          </div>
        </Link>
        {/*----------------------------------------------------------- Glass Button -------------------------------------------------*/}
        <Link href="/components/glass-button" className="group">
          <div className="border border-[#313131] rounded-xl">
            {/* <div><Glassbutton text= "Glassbutton" /></div> */}
            <Image src={glass} alt="asteria" className="rounded-xl p-1" />
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Glass-Button
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            Add a touch of elegance and modernity to your UI with the Glass
            Button.
          </div>
        </Link>

        {/* ------------------------------------------------------------Gradient Button------------------------------------------------*/}
        <Link href="/components/gradient-button" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center p-2">
            <div>
              <Image src={gradient} alt="asteria" className="rounded-xl p-2" />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Gradient-Button
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            Elevate your design with this stunning Gradient Border Button!
          </div>
        </Link>
        {/*-------------------------------------------------------------- Hover Gradient Button ---------------------------------------*/}
        <Link href="/components/hover-gradient" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center p-2">
            <div>
              <Image
                src={hovergradient}
                alt="asteria"
                className="rounded-xl p-2"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Hover Gradient Button
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            Make your UI stand out with this mesmerizing Moving Gradient Button!
          </div>
        </Link>
       
        {/* --------------------------------------------------------------------Moving border Button-------------------------------------- */}
        
        <Link href="/components/moving-border"className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48  ">
            <div className="w-full h-full">
              <Image
                src={movingline}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
          Moving Border Button
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          Add a sleek, modern touch to your UI with the Moving  Border
          Button!
          </div>
        </Link>

        {/*---------------------------------------------------------------- Hover Navigation Bar ---------------------------------------*/}
        <Link href="/components/hover-nav " className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center p-10">
            <div>
              <Image src={hovernav} alt="asteria" className="rounded-xl p-2" />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Hover Navigation Bar
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            An intuitive hover navigation bar that enhances user experience with
            smooth transitions and interactive effects.
          </div>
        </Link>

        {/* ----------------------------------------------------------Typewriter Effect ----------------------------------------------*/}
        <Link href="/components/type-writer" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center">
            <div>
              <Image
                src={typewriter}
                alt="asteria"
                className="rounded-xl p-2"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Typewriter Effect
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            Bring your text to life with a dynamic typewriter effect! Watch as
            letters appear one by one.
          </div>
        </Link>

        {/*------------------------------------------------------------ Image Reveal-------------------------------------------------- */}
        <Link href="/components/image-reveal" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48">
            {/* Image Container with object-cover */}
            <div className="w-full h-full">
              <Image
                src={imagereveal}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Image Reveal
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            Add a touch of mystery to your website with the Image Reveal effect.
          </div>
        </Link>

        {/*----------------------------------------------------------- Hover Card-------------------------------------------------- */}
        <Link href="/components/hover-card" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={hovercard}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Hover Card
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A clean and minimalistic card design with hover effect that allows content to stand out.


          </div>
        </Link>

        {/*------------------------------------------------------------ TOOLTIP -------------------------------------------------- */}
        <Link href="/components/tooltip" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center py-4">
            <div>
              <Image src={tooltip} alt="asteria" className="rounded-xl" />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Tooltip
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            The Tooltip component provides contextual information or hints when
            users hover over on element.
          </div>
        </Link>
        

        {/*------------------------------------------------------------ SCALE IMAGES -------------------------------------------------- */}
        <Link href="/components/scale-image" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={scaleimage}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Image Scale
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          An image that scales on hover, adding depth and attention to the image.
          </div>
        </Link>

             {/*------------------------------------------------------------ GRADIENT IMAGES -------------------------------------------------- */}
             <Link href="/components/image-effect" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={gradientimage}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Image Gradient
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          An image with background gradient effect to enhance your UI. 
          </div>
        </Link>
        
        
        {/*----------------------------------------------------------- GLOBE -------------------------------------------------- */}
        <Link href="/components/globe" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48">
            {/* Image Container with object-cover */}
            <div className="w-full h-full">
              <Image
                src={globe}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Globe
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            A rotating 3D globe that provides a dynamic and immersive visual
            experience.
          </div>
        </Link>

        {/*----------------------------------------------------------- LOADING-------------------------------------------------- */}
        <Link href="/components/loading" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center p-10">
            <div>
              <Image
                src={loading}
                alt="asteria"
                className="rounded-xl scale-110"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Loading
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            The Loading component displays a visually appealing loading
            animation with a smooth-moving progress bar.
          </div>
        </Link>
        {/*----------------------------------------------------------- ANIMATED TEXT-------------------------------------------------- */}
        <Link href="/components/animated-text" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center p-6  ">
            <div>
              <Image
                src={animate}
                alt="asteria"
                className="rounded-xl scale-110"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Animated Text
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            Animated text enhances user experience by dynamically changing the
            appearance of text.
          </div>
        </Link>
        {/*----------------------------------------------------------- WAVES -------------------------------------------------- */}
        <Link href="/components/wavy" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center p-10  ">
            <div>
              <Image src={waves} alt="asteria" className="rounded-3xl " />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Waves
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            The Wavy Component adds a dynamic, fluid motion effect to your UI,
            creating an engaging and visually appealing experience.
          </div>
        </Link>

        {/*----------------------------------------------------------- PARTICLES -------------------------------------------------- */}
        <Link href="/components/particle" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center p-9">
            <div>
              <Image src={particle} alt="asteria" className="rounded-xl  " />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Particle Background
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            Particle Background Component adds a dynamic and visually appealing
            animated particle effect to your UI.
          </div>
        </Link>
        {/*----------------------------------------------------------- FALLING BEAM -------------------------------------------------- */}
        <Link href="/components/falling-beam" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48">
            <div className="w-full h-full">
              <Image
                src={fallingbeam}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Falling Beam
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A Falling Beams component features animated beams dropping from the top of the screen.
          </div>
        </Link>
         {/*----------------------------------------------------------- SCROLL CARD -------------------------------------------------- */}
         <Link href="/components/scroll-card" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48">
            <div className="w-full h-full">
              <Image
                src={scroll}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Scroll Card
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          Stylish Scrollable cards with smooth scrolling and gradient effects.
          </div>
        </Link>
        {/*----------------------------------------------------------- KANBAN BOARD-------------------------------------------------- */}
        <Link href="/components/drag-drop" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48">
            <div className="w-full h-full">
              <Image
                src={kanban}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Kanban Board
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A dynamic Kanban Board for managing tasks with drag-and-drop functionality.
          </div>
        </Link>
       
        
        {/*----------------------------------------------------------- Animated Social Proof-------------------------------------------------- */}
        <Link href="/components/animated-social-proof" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={animatesocial}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Animated Social Proof
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          Animated social proof section showcasing company names with smooth scrolling or fading effects.
          </div>
        </Link>
         
        {/*----------------------------------------------------------- ANIMATED TESTIMONIAL -------------------------------------------------- */}
        <Link href="/components/testimonial" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={vtestimonial}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
          Animated Testimonial
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          Display customer testimonials with  feedback to build trust and credibility.
          </div>
        </Link>
        {/*----------------------------------------------------------- HORIZONTAL TESTIMONIAL -------------------------------------------------- */}
        <Link href="/components/horizontal-testimonial" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={htestimonial}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
          Horizontal Testimonial
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          Display customer testimonials with  feedback to build trust and credibility.
          </div>
        </Link>
          
      </div>
    </div>
  );
};

export default Allcomponents;
