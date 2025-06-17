// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import glow from "../assets/glow.png";
// import glass from "../assets/glass.png";
// import gradient from "../assets/gradient.png";
// import movinggradient from "../assets/movinggradient.png";
// import movingline from "../assets/movingline.png";
// import simplebutton from "../assets/simplebutton.png";
// import popup from "../assets/popup.png";
// import hovernav from "../assets/hovernav.png";
// import typewriter from "../assets/typewriter.png";
// import imagereveal from "../assets/imagereveal.png";
// import card from "../assets/card.png";
// import chat from "../assets/chat.png";
// import tooltip from "../assets/tooltip.png";
// import interactive from "../assets/interactive.png";
// import dropdown from "../assets/dropdown.png";
// import globe from "../assets/globe.png";
// import datetime from "../assets/datetime.png";
// import toast from "../assets/toast.png";
// import table from "../assets/table.png";
// import loading from "../assets/loading.png";
// import animate from "../assets/animate.png";
// import toggle from "../assets/toggle.png";
// import waves from "../assets/waves.png";
// import switcher from "../assets/switcher.png";
// import particle from "../assets/particle.png";
// const page = () => {
//   return (
//     <div className="bg-black p-16 space-y-4 flex flex-col">
//       <div className="text-white text-5xl font-merriweather ">
//         Components
//       </div>

//       <div className="grid grid-cols-2 space-y-5 gap-10 md:grid md:grid-cols-4">
//         {/*--------------------------------------------------------- Glow Button------------------------------------------------ */}
//         <Link href="/components/glow-button">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center mt-5 p-2">
//             <Image src={glow} alt="asteria" className="rounded-xl p-1" />
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Glow-Button
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             Enhance your UI with a stunning Glow Button that emits a soft,
//             radiant glow on hover.
//           </div>
//         </Link>
//         {/*----------------------------------------------------------- Glass Button -------------------------------------------------*/}
//         <Link href="/components/glass-button">
//           <div className="border border-[#313131] rounded-xl">
//             {/* <div><Glassbutton text= "Glassbutton" /></div> */}
//             <Image src={glass} alt="asteria" className="rounded-xl p-1" />
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Glass-Button
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             Add a touch of elegance and modernity to your UI with the Glass
//             Button.
//           </div>
//         </Link>

//         {/* ------------------------------------------------------------Gradient Button------------------------------------------------*/}
//         <Link href="/components/gradient-button">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-2">
//             <div>
//               <Image src={gradient} alt="asteria" className="rounded-xl p-2" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Gradient-Button
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             Elevate your design with this stunning Gradient Border Button!
//           </div>
//         </Link>
//         {/*-------------------------------------------------------------- Moving Gradient Button ---------------------------------------*/}
//         <Link href="/components/moving-gradient">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-2">
//             <div>
//               <Image
//                 src={movinggradient}
//                 alt="asteria"
//                 className="rounded-xl p-2"
//               />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Moving Gradient Button
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             Make your UI stand out with this mesmerizing Moving Gradient Button!
//           </div>
//         </Link>
//         {/* --------------------------------------------------------------------Moving Line Button-------------------------------------- */}
//         <Link href="/components/moving-line">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-2">
//             <div>
//               <Image
//                 src={movingline}
//                 alt="asteria"
//                 className="rounded-xl p-2"
//               />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Moving Line Button
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             Add a sleek, modern touch to your UI with the Moving Line Border
//             Button!
//           </div>
//         </Link>

//         {/* ----------------------------------------------------------------------Simple Button -----------------------------------------*/}
//         <Link href="/components/simple-button">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-2">
//             <div>
//               <Image
//                 src={simplebutton}
//                 alt="asteria"
//                 className="rounded-xl p-2"
//               />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Simple Button
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             A clean, minimal, and highly functional button designed for seamless
//             user interactions.
//           </div>
//         </Link>

//         {/*--------------------------------------------------------------------------- Pop-Up------------------------------------------- */}
//         <Link href="/components/pop-up">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-2">
//             <div>
//               <Image src={popup} alt="asteria" className="rounded-xl p-2" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Pop-Up
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] cursor-pointer">
//             A sleek and responsive pop-up that opens on click.This pop-up
//             ensures a smooth user experience.
//           </div>
//         </Link>

//         {/*---------------------------------------------------------------- Hover Navigation Bar ---------------------------------------*/}
//         <Link href="/components/hover-nav">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-10">
//             <div>
//               <Image src={hovernav} alt="asteria" className="rounded-xl p-2" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Hover Navigation Bar
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             An intuitive hover navigation bar that enhances user experience with
//             smooth transitions and interactive effects.
//           </div>
//         </Link>

//         {/* ----------------------------------------------------------Typewriter Effect ----------------------------------------------*/}
//         <Link href="/components/type-writer">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center">
//             <div>
//               <Image
//                 src={typewriter}
//                 alt="asteria"
//                 className="rounded-xl p-2"
//               />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Typewriter Effect
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             Bring your text to life with a dynamic typewriter effect! Watch as
//             letters appear one by one.
//           </div>
//         </Link>

//         {/*------------------------------------------------------------ Image Reveal-------------------------------------------------- */}
//         <Link href="/components/image-reveal">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center">
//             <div>
//               <Image
//                 src={imagereveal}
//                 alt="asteria"
//                 className="rounded-xl p-2"
//               />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Image Reveal
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             Add a touch of mystery to your website with the Image Reveal effect.
//           </div>
//         </Link>
//         {/*------------------------------------------------------------ CARD -------------------------------------------------- */}
//         <Link href="/components/card">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-7">
//             <div>
//               <Image src={card} alt="asteria" className="rounded-xl" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Card
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             A clean and minimalistic card design that allows content to stand
//             out.
//           </div>
//         </Link>

//         {/*------------------------------------------------------------ TOOLTIP -------------------------------------------------- */}
//         <Link href="/components/tooltip">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center py-4">
//             <div>
//               <Image src={tooltip} alt="asteria" className="rounded-xl" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Tooltip
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//           The Tooltip component provides contextual information or hints when users hover over on element.
//           </div>
//         </Link>
//         {/*------------------------------------------------------------ CHAT -------------------------------------------------- */}
//         <Link href="/components/chat">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center ">
//             <div>
//               <Image src={chat} alt="asteria" className="rounded-xl" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Chat
//           </div>
//           <div className="text-[#818181] hover:text-white font-sans text-[13px] cursor-pointer">
//             A modern and responsive Chat UI designed to provide an intuitive and
//             user-friendly messaging experience.
//           </div>
//         </Link>
//         {/*------------------------------------------------------------ INTERACTIVE IMAGES -------------------------------------------------- */}
//         <Link href="/components/image-effect">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center">
//             <div>
//               <Image src={interactive} alt="asteria" className="rounded-xl" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Interactive Images
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             An interactive image effect that scales and glows on hover, adding
//             depth and attention to the image.
//           </div>
//         </Link>
//         {/*----------------------------------------------------------- DROPDOWN -------------------------------------------------- */}
//         <Link href="/components/image-effect">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center py-8">
//             <div>
//               <Image src={dropdown} alt="asteria" className="rounded-xl" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Dropdown Menu
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             A sleek and responsive dropdown menu that elegantly reveals
//             additional options when triggered.
//           </div>
//         </Link>
//         {/*----------------------------------------------------------- GLOBE -------------------------------------------------- */}
//         <Link href="/components/globe">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center">
//             <div>
//               <Image src={globe} alt="asteria" className="rounded-xl" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Globe
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             A rotating 3D globe that provides a dynamic and immersive visual
//             experience.
//           </div>
//         </Link>
//         {/*----------------------------------------------------------- DATE TIME PICKER -------------------------------------------------- */}
//         <Link href="/components/date-time">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center">
//             <div>
//               <Image src={datetime} alt="asteria" className="rounded-xl" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Date Time Picker
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//             A user-friendly and customizable date and time picker that allows
//             users to easily select a specific date and time.
//           </div>
//         </Link>
//          {/*----------------------------------------------------------- TOAST -------------------------------------------------- */}
//          <Link href="/components/toast">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-8">
//             <div>
//               <Image src={toast} alt="asteria" className="rounded-xl scale-110" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Toast
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//           A Toast Notification Component that displays multiple alert messages with icons, auto-dismiss, and close functionality.
//           </div>
//         </Link>
//         {/*----------------------------------------------------------- TABLE -------------------------------------------------- */}
//         <Link href="/components/table">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-8">
//             <div>
//               <Image src={table} alt="asteria" className="rounded-xl scale-110" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Table
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//           A table component is used to display structured data in rows and columns, allowing users to easily view, sort, and interact with the data.
//           </div>
//         </Link>
//           {/*----------------------------------------------------------- LOADING-------------------------------------------------- */}
//           <Link href="/components/loading">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-10">
//             <div>
//               <Image src={loading} alt="asteria" className="rounded-xl scale-110" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Loading
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//           The Loading component displays a visually appealing loading animation with a smooth-moving progress bar. 
//           </div>
//         </Link>
//         {/*----------------------------------------------------------- ANIMATED TEXT-------------------------------------------------- */}
//           <Link href="/components/animated-text">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-6  ">
//             <div>
//               <Image src={animate} alt="asteria" className="rounded-xl scale-110" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//             Animated Text
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//           Animated text enhances user experience by dynamically changing the appearance of text. 
//           </div>
//         </Link>
//         {/*----------------------------------------------------------- TOGGLE -------------------------------------------------- */}
//         <Link href="/components/toggle">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-6  ">
//             <div>
//               <Image src={toggle} alt="asteria" className="rounded-xl scale-110" />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//            Toggle
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//           A Toggle component that allows you to switch between two states.
//           </div>
//         </Link>
//          {/*----------------------------------------------------------- WAVES -------------------------------------------------- */}
//          <Link href="/components/wavy">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-10  ">
//             <div>
//               <Image src={waves} alt="asteria" className="rounded-3xl " />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//            Waves
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//           The Wavy Component adds a dynamic, fluid motion effect to your UI, creating an engaging and visually appealing experience. 
//           </div>
//         </Link>
//         {/*----------------------------------------------------------- SWITCHER -------------------------------------------------- */}
//         <Link href="/components/switcher">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-9">
//             <div>
//               <Image src={switcher} alt="asteria" className="rounded-xl  " />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//            Content Switcher
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//           Content Switcher is a sleek, interactive component that smoothly toggles between content sections.
//           </div>
//         </Link>
//          {/*----------------------------------------------------------- PARTICLES -------------------------------------------------- */}
//          <Link href="/components/particle">
//           <div className="border border-[#313131] rounded-xl flex justify-center items-center p-9">
//             <div>
//               <Image src={particle} alt="asteria" className="rounded-xl  " />
//             </div>
//           </div>
//           <div className="text-[#818181] hover:text-white py-2 font-semibold font-sans text-base cursor-pointer">
//            Particle Background
//           </div>
//           <div className="text-[#818181] hover:text-white text-[13px] font-sans cursor-pointer">
//           Particle Background Component adds a dynamic and visually appealing animated particle effect to your UI.
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default page;
// "use client";
// import React, { useState } from "react";
// import Allcomponents from "../component/Allcomponents";

// const Page = () => {
//   const [activeTab, setActiveTab] = useState("components");

//   return (
//     <div className="flex flex-col p-14 min-h-screen w-screen bg-black text-white  ">
//       {/* Switcher Buttons */}
//       <div className="flex gap-2 p-1  w-full   ">
//         {["components", "Premium", "Templates"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 text-sm font-medium transition ${
//               activeTab === tab ? "border-b-2 border-white" : "text-[#717171]"
//             }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Display Selected Content */}
//       <div className="flex-grow flex justify-center items-center bg-pink-400  ">
//         {activeTab === "components" && <Allcomponents />}
//         {activeTab === "Premium" && <p>Showing ordinary components.</p>}
//         {activeTab === "Templates" && <p>Showing premium components.</p>}
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState } from "react";
import Allcomponents from "../component/Allcomponents";
import Premiumcomponents from "../component/Premiumcomponents";
import { HiSparkles } from "react-icons/hi2"; 

const Page = () => {
  const [activeTab, setActiveTab] = useState("Components");

  return (
    <div className="flex flex-col p-14 min-h-screen w-screen bg-black text-white">
      {/* Switcher Buttons */}
      <div className="flex gap-2 p-1 w-full">
        {["Components", "Premium", "Templates"].map((tab) => (
          <button
            key={tab}
            onClick={tab !== "Templates" ? () => setActiveTab(tab) : undefined} // Disable Templates button
            className={`px-4 py-2 text-sm font-medium transition ${
              activeTab === tab
                ? "border-b-2 border-white"
                : "text-[#717171] cursor-pointer"
            } ${tab === "Templates" ? "cursor-not-allowed" : ""}`}
            disabled={tab === "Templates"} // Disable button functionality
          >
            {tab === "Premium" ? (
              <>
                <HiSparkles className="inline-block mr-2 text-lg" />
                Premium
              </>
            ) : tab === "Templates" ? (
              <>
                Templates
                <button className="ml-2 text-[10px] font-sans  text-[#10B981] rounded-xl border-2 border-[#10B981]  px-2 ">
                  Coming Soon
                </button>
              </>
            ) : (
              tab
            )}
          </button>
        ))}
      </div>

      {/* Display Selected Content */}
      <div className="flex-grow flex justify-center items-center bg-pink-400">
        {activeTab === "Components" && <Allcomponents />}
        {activeTab === "Premium" && <Premiumcomponents/>}
        {activeTab === "Templates" && <p>Templates section is disabled.</p>}
      </div>
    </div>
  );
};

export default Page;


