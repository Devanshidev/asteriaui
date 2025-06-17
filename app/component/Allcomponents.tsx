import React from "react";
import Image from "next/image";
import Link from "next/link";
import glow from "../assets/glow.png";
import glass from "../assets/glass.png";
import gradient from "../assets/gradient.png";
import movingline from "../assets/movingline.png";
import simplebutton from "../assets/simplebutton.png";
import popup from "../assets/popup.png";
import hovernav from "../assets/hovernav.png";
import typewriter from "../assets/typewriter.png";
import imagereveal from "../assets/imagereveal.png";
import card from "../assets/card.png";
import chat from "../assets/chat.png";
import tooltip from "../assets/tooltip.png";
import dropdown from "../assets/dropdown.png";
import globe from "../assets/globe.png";
import datetime from "../assets/datetime.png";
import toast from "../assets/toast.png";
import table from "../assets/table.png";
import loading from "../assets/loading.png";
import animate from "../assets/animate.png";
import toggle from "../assets/toggle.png";
import waves from "../assets/waves.png";
import switcher from "../assets/switcher.png";
import particle from "../assets/particle.png";
import hovergradient from "../assets/hovergradient.png";
import fallingbeam from "../assets/fallingbeam.png";
import scroll from "../assets/scroll.png";
import kanban from "../assets/kanban.png";
import fileupload from "../assets/fileupload.png"
import hearts from "../assets/hearts.png"
import hovercard from "../assets/hovercard.png"
import social from "../assets/social.png"
import animatesocial from "../assets/animatesocial.png"
import htestimonial from "../assets/htestimonial.png"
import vtestimonial from "../assets/vtestimonial.png"
import ntestimonial from "../assets/ntestimonial.png"
import button from "../assets/button.png"
import alert from "../assets/alert.png"
import checkbox from "../assets/checkbox.png"
import likedislike from "../assets/likedislike.png"
import drawer from "../assets/drawer.png"
import follow from "../assets/follow.png"
import hoverzoom from "../assets/hoverzoom.png"
import radio from "../assets/radio.png"
import status from "../assets/status.png"
import stepper from "../assets/stepper.png"
import textarea from "../assets/textarea.png"
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

        {/* ----------------------------------------------------------------------Simple Button -----------------------------------------*/}
        <Link href="/components/simple-button" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center p-2">
            <div>
              <Image
                src={simplebutton}
                alt="asteria"
                className="rounded-xl p-2"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Simple Button
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            A clean, minimal, and highly functional button designed for seamless
            user interactions.
          </div>
        </Link>

        {/*--------------------------------------------------------------------------- Pop-Up------------------------------------------- */}
        <Link href="/components/pop-up" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center h-48 overflow-hidden  ">
            {/* Image Container with object-cover */}
            <div className="w-full h-full">
              <Image
                src={popup}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Pop-Up
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] cursor-pointer">
            A sleek and responsive pop-up that opens on click. This pop-up
            ensures a smooth user experience.
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

        {/*------------------------------------------------------------ CARD -------------------------------------------------- */}
        <Link href="/components/card" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={card}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Card
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A clean and minimalistic card design that allows content to stand out.


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
        {/*------------------------------------------------------------ CHAT -------------------------------------------------- */}
        <Link href="/components/chat" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48">
            {/* Image Container with object-cover */}
            <div className="w-full h-full">
              <Image
                src={chat}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Chat
          </div>
          <div className="text-[#818181] group-hover:text-white font-sans text-[13px] cursor-pointer">
            A modern and responsive Chat UI designed to provide an intuitive and
            user-friendly messaging experience.
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
        
        {/*----------------------------------------------------------- DROPDOWN -------------------------------------------------- */}
        <Link href="/components/dropdown" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center py-8">
            <div>
              <Image src={dropdown} alt="asteria" className="rounded-xl" />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Dropdown Menu
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            A sleek and responsive dropdown menu that elegantly reveals
            additional options when triggered.
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

        {/*----------------------------------------------------------- DATE TIME PICKER -------------------------------------------------- */}
        <Link href="/components/date-time" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center">
            <div>
              <Image src={datetime} alt="asteria" className="rounded-xl" />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Date Time Picker
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            A user-friendly and customizable date and time picker that allows
            users to easily select a specific date and time.
          </div>
        </Link>
        {/*----------------------------------------------------------- TOAST -------------------------------------------------- */}
        <Link href="/components/toast" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center p-8">
            <div>
              <Image
                src={toast}
                alt="asteria"
                className="rounded-xl scale-110"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Toast
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            A Toast Notification Component that displays multiple alert messages
            with icons, auto-dismiss, and close functionality.
          </div>
        </Link>
        {/*----------------------------------------------------------- TABLE -------------------------------------------------- */}
        <Link href="/components/table" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48">
            <div className="w-full h-full">
              <Image
                src={table}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Table
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            A table component is used to display structured data in rows and
            columns, allowing users to easily view, sort, and interact with the
            data.
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
        {/*----------------------------------------------------------- TOGGLE -------------------------------------------------- */}
        <Link href="/components/toggle" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center p-4 h-48 ">
            <div>
              <Image
                src={toggle}
                alt="asteria"
                className="rounded-xl scale-110"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Toggle
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            A Toggle component that allows you to switch between two states.
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
        {/*----------------------------------------------------------- SWITCHER -------------------------------------------------- */}
        <Link href="/components/switcher" className="group">
          <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48">
            <div className="w-full h-full">
              <Image
                src={switcher}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
            Content Switcher
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
            Content Switcher is a sleek, interactive component that smoothly
            toggles between content sections.
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
        {/*----------------------------------------------------------- FILE UPLOADER -------------------------------------------------- */}
        <Link href="/components/file-uploader" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={fileupload}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           File Uploader
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A sleek File Uploader with drag-and-drop and progress tracking.
          </div>
        </Link>
         {/*----------------------------------------------------------- HEART POPUP -------------------------------------------------- */}
         <Link href="/components/heart-flow" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={hearts}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Heart Popup
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A popping heart animation with smooth flow using Framer Motion.
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
         {/*-----------------------------------------------------------  Social Proof-------------------------------------------------- */}
         <Link href="/components/social-proof" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 ">
            <div className="w-full h-full">
              <Image
                src={social}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Social Proof
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          Showcase company logos as social proof to build trust and credibility.
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
         {/*----------------------------------------------------------- NORMAL TESTIMONIAL -------------------------------------------------- */}
         <Link href="/components/normal-testimonial" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={ntestimonial}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Testimonial
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          Display customer testimonials with  feedback to build trust and credibility.
          </div>
        </Link>
         {/*----------------------------------------------------------- Alert -------------------------------------------------- */}
         <Link href="/components/alert" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48">
            <div className="w-full h-full">
              <Image
                src={alert}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
          Alert
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A versatile alert component that displays important messages with customizable styles and actions.
          </div>
        </Link>
           {/*----------------------------------------------------------- Button Group -------------------------------------------------- */}
           <Link href="/components/button-group" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={button}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
          Group Button
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          Toggle between buttons—only one stays active at a time!
          </div>
        </Link>
         {/*----------------------------------------------------------- Checkbox -------------------------------------------------- */}
         <Link href="/components/check-box" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={checkbox}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
          Checkbox
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          Select multiple options with a simple click!
          </div>
        </Link>
          {/*----------------------------------------------------------- Like Dislike -------------------------------------------------- */}
          <Link href="/components/like-dislike" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={likedislike}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Like Dislike
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
           
          A like/dislike button lets users show approval or disapproval with clickable icons.
          </div>
        </Link>
         {/*----------------------------------------------------------- DRAWER -------------------------------------------------- */}
         <Link href="/components/drawer" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={drawer}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Drawer
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          Slide in content effortlessly with a smooth, interactive drawer!
          </div>
        </Link>
         {/*----------------------------------------------------------- Follow -------------------------------------------------- */}
         <Link href="/components/follow" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={follow}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
          Follow
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A follow toggle lets users switch between following and unfollowing with a single click.
          </div>
        </Link>
         {/*----------------------------------------------------------- Hover Zoom -------------------------------------------------- */}
         <Link href="/components/hover-zoom" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={hoverzoom}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Hover Zoom
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          Hover to zoom in and see the avatars pop-up close!
          </div>
        </Link>
        {/*----------------------------------------------------------- Radio -------------------------------------------------- */}
        <Link href="/components/radio" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={radio}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
          Radio Selector
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A radio selector lets users choose one option from a set of mutually exclusive choices.
          </div>
        </Link>
           {/*----------------------------------------------------------- Status -------------------------------------------------- */}
           <Link href="/components/status" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={status}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
          Status Selector
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A status selector lets users choose or set a specific status from available options.
          </div>
        </Link>
         {/*----------------------------------------------------------- Stepper -------------------------------------------------- */}
         <Link href="/components/stepper" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={stepper}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Stepper
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A stepper component that guides users through a multi-step process, displaying progress and allowing navigation between steps.
          </div>
        </Link>
         {/*----------------------------------------------------------- Textarea -------------------------------------------------- */}
         <Link href="/components/textarea" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={textarea}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Textarea
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A textarea Component that allows users to enter multiple lines of text.
          </div>
        </Link>
        
         {/*----------------------------------------------------------- Side bar -------------------------------------------------- */}
         <Link href="/components/side-bar" className="group">
        <div className="border border-[#313131] rounded-xl flex justify-center items-center overflow-hidden h-48 p-2 ">
            <div className="w-full h-full">
              <Image
                src={hearts}
                alt="asteria"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-[#818181] group-hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
           Sidebar
          </div>
          <div className="text-[#818181] group-hover:text-white text-[13px] font-sans cursor-pointer">
          A sidebar navigation panel with links or options for easy access to different sections.
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Allcomponents;
