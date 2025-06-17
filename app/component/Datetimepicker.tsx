"use client";
import React, { useState } from "react";
import { HiCalendarDateRange } from "react-icons/hi2";
import { WiTime5 } from "react-icons/wi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Datetimepicker = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [manualTime, setManualTime] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
        setShowTimePicker(false); // Close time picker when opening date picker
    };

    const toggleTimePicker = () => {
        setShowTimePicker(!showTimePicker);
        setShowDatePicker(false); // Close date picker when opening time picker
    };

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const generateCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentYear, currentMonth);
        const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
        const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);
        const days = [];

        for (let i = firstDay - 1; i >= 0; i--) {
            days.push(
                <div key={`prev-${i}`} className="p-2 text-[#747474] opacity-50">
                    {prevMonthDays - i}
                </div>
            );
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayDate = new Date(currentYear, currentMonth, i);
            const isSelected = date === formatDate(dayDate);

            days.push(
                <button
                    key={i}
                    onClick={() => {
                        setDate(formatDate(dayDate));
                        setShowDatePicker(false);
                    }}
                    className={`p-2 rounded-full w-8 h-8 flex items-center justify-center transition-all
                        ${isSelected ? "bg-[#373737] text-white" : "text-gray-300 hover:bg-black"}`}
                >
                    {i}
                </button>
            );
        }

        const remainingDays = 42 - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            days.push(
                <div key={`next-${i}`} className="p-2 text-[#747474] opacity-50">
                    {i}
                </div>
            );
        }

        return days;
    };

    const formatDate = (date) => {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month < 10 ? "0" + month : month}/${day < 10 ? "0" + day : day}/${year}`;
    };

    const handleTimeInput = (e) => {
        let value = e.target.value.replace(/[^0-9:]/g, "");
        if (value.length === 2 && !value.includes(":")) value += ":";
        if (value.length > 5) value = value.slice(0, 5);
        setManualTime(value);
    };

    const validateTime = (timeString) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(timeString);

    const handleDone = () => {
        if (validateTime(manualTime)) {
            setTime(manualTime);
            setShowTimePicker(false);
        } else {
            alert("Invalid time format! Use HH:MM (24-hour).");
        }
    };

    return (
        <div className="relative text-white flex gap-4 ">
            {/* Date Input Box */}
            <div
                className="border border-[#262525] rounded-lg p-2 flex items-center justify-between bg-[#1a1a1a] cursor-pointer w-36"
                onClick={toggleDatePicker}
            >
                <div className="flex items-center gap-1 text-xs">
                    <HiCalendarDateRange className="w-5 h-5 text-[#717171]" />
                    <span className={date ? "text-white" : "text-[#717171]"}>
                        {date || "Select date"}
                    </span>
                </div>
            </div>

            {/* Time Input Box */}
            <div
                className="border border-[#262525] rounded-lg p-2 flex items-center justify-between bg-[#1a1a1a] cursor-pointer w-36"
                onClick={toggleTimePicker}
            >
                <div className="flex items-center gap-1 text-xs">
                    <WiTime5 className="w-5 h-5 text-[#717171]" />
                    <span className={time ? "text-white" : "text-[#717171]"}>
                        {time || "Select time"}
                    </span>
                </div>
            </div>

            {/* Date Picker Popup */}
            {showDatePicker && (
                <div className="absolute top-14 left-0 z-20 bg-[#1a1a1a] border border-[#262525] rounded-lg shadow-lg p-2 w-72">
                    {/* Header */}
                    <div className="flex justify-between items-center text-gray-300 mb-3">
                        <button
                            onClick={() => setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))}
                            className="text-white"
                        >
                            <IoIosArrowBack />
                        </button>

                        <div className="flex items-center gap-2">
                            <span className="font-sans text-white">
                                {new Date(currentYear, currentMonth).toLocaleString("default", {
                                    month: "long",
                                })}
                            </span>
                            <select
                                value={currentYear}
                                onChange={(e) => setCurrentYear(parseInt(e.target.value))}
                                className="bg-transparent outline-none rounded px-1 text-white"
                            >
                                {Array.from({ length: 10 }, (_, i) => currentYear - 5 + i).map(
                                    (year) => (
                                        <option key={year} value={year} className="bg-[#1a1a1a]">
                                            {year}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        <button
                            onClick={() => setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))}
                            className="text-white"
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>

                    {/* Calendar */}
                    <div className="grid grid-cols-7 gap-1 mb-3">{generateCalendarDays()}</div>
                </div>
            )}

            {/* Time Picker Popup */}
            {showTimePicker && (
                <div className="absolute top-14 left-0 z-20 bg-[#1a1a1a] border border-[#262525] rounded-lg shadow-lg p-2 w-72">
                    <h3 className="text-sm font-sans text-white mb-1">Enter Time (HH:MM)</h3>
                    <input
                        type="text"
                        value={manualTime}
                        onChange={handleTimeInput}
                        placeholder="e.g., 14:30"
                        className="w-full p-1 text-white bg-[#262525] border border-[#525252] rounded-md placeholder:text-[12px]"
                    />
                    <div className="flex justify-end mt-2">
                        <button
                            onClick={handleDone}
                            className="w-20 border border-[#262525] text-sm font-sans text-white py-1 rounded-lg transition-all hover:bg-[#3c3c3c]"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Datetimepicker;





// "use client";
// import React, { useState } from "react";
// import { HiCalendarDateRange } from "react-icons/hi2";
// import { WiTime5 } from "react-icons/wi";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const Datetimepicker = () => {
//     const [date, setDate] = useState("");
//     const [time, setTime] = useState("");
//     const [manualTime, setManualTime] = useState(""); 
//     const [showPicker, setShowPicker] = useState(false);
//     const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//     const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

//     const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
//     const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

//     const generateCalendarDays = () => {
//         const daysInMonth = getDaysInMonth(currentYear, currentMonth);
//         const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
//         const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);
//         const days = [];

//         // Previous month dates
//         for (let i = firstDay - 1; i >= 0; i--) {
//             days.push(
//                 <div key={`prev-${i}`} className="p-2 text-[#747474] opacity-50">
//                     {prevMonthDays - i}
//                 </div>
//             );
//         }

//         // Current month dates
//         for (let i = 1; i <= daysInMonth; i++) {
//             const dayDate = new Date(currentYear, currentMonth, i);
//             const isToday = new Date().toDateString() === dayDate.toDateString();
//             const isSelected = date === dayDate.toISOString().split("T")[0];

//             days.push(
//                 <button
//                     key={i}
//                     onClick={() => setDate(dayDate.toISOString().split("T")[0])}
//                     className={`p-2 rounded-full w-8 h-8 flex items-center justify-center transition-all
//                         ${isSelected ? "bg-[#373737] text-white" : isToday ? "bg-[#4b4b4b] text-white" : "text-gray-300 hover:bg-black"}`}
//                 >
//                     {i}
//                 </button>
//             );
//         }

//         // Next month dates
//         const remainingDays = 42 - days.length; // Filling up the remaining grid spaces
//         for (let i = 1; i <= remainingDays; i++) {
//             days.push(
//                 <div key={`next-${i}`} className="p-2 text-[#747474] opacity-50">
//                     {i}
//                 </div>
//             );
//         }

//         return days;
//     };

//     const handleTimeInput = (e) => {
//         let value = e.target.value.replace(/[^0-9:]/g, "");
//         if (value.length === 2 && !value.includes(":")) value += ":";
//         if (value.length > 5) value = value.slice(0, 5);
//         setManualTime(value);
//     };

//     const validateTime = (timeString) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(timeString);

//     const handleDone = () => {
//         if (validateTime(manualTime)) {
//             setTime(manualTime);
//             setShowPicker(false);
//         } else {
//             alert("Invalid time format! Use HH:MM (24-hour).");
//         }
//     };

//     return (
//         <div className="relative w-72 text-white">
//             {/* Input Box */}
//             <div
//                 className="border border-[#262525] rounded-lg p-2 flex items-center justify-between cursor-pointer bg-[#1a1a1a] space-x-2"
//                 onClick={() => setShowPicker(true)}
//             >
//                 <div className="flex items-center gap-1 text-[14px]">
//                     <HiCalendarDateRange className="w-5 h-5 text-[#525252]" />
//                     <span className={date ? "text-white" : "text-[#525252]"}>
//                         {date || "Select date"}
//                     </span>
//                 </div>
//                 <div className="flex items-center gap-1 text-[14px]">
//                     <WiTime5 className="w-5 h-5 text-[#525252]" />
//                     <span className={time ? "text-white" : "text-[#525252]"}>
//                         {time || "Select time"}
//                     </span>
//                 </div>
//             </div>

//             {/* Date & Time Picker Pop-up */}
//             {showPicker && (
//                 <div className="fixed inset-0 z-20 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center">
//                     <div className="relative bg-[#1a1a1a] border border-[#262525] rounded-lg shadow-lg p-4 w-full max-w-lg">
//                         {/* Header */}
//                         <div className="flex justify-between items-center text-gray-300 mb-3">
//                             <button
//                                 onClick={() => setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))}
//                                 className="text-white"
//                             >
//                                 <IoIosArrowBack />
//                             </button>

//                             {/* Month & Year Selector */}
//                             <div className="flex items-center gap-2">
//                                 <span className="font-sans text-white">
//                                     {new Date(currentYear, currentMonth).toLocaleString("default", {
//                                         month: "long",
//                                     })}
//                                 </span>
//                                 <select
//                                     value={currentYear}
//                                     onChange={(e) => setCurrentYear(parseInt(e.target.value))}
//                                     className="bg-transparent outline-none rounded px-1 text-white"
//                                 >
//                                     {Array.from({ length: 10 }, (_, i) => currentYear - 5 + i).map(
//                                         (year) => (
//                                             <option key={year} value={year} className="bg-[#1a1a1a]">
//                                                 {year}
//                                             </option>
//                                         )
//                                     )}
//                                 </select>
//                             </div>

//                             <button
//                                 onClick={() => setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))}
//                                 className="text-white"
//                             >
//                                 <IoIosArrowForward />
//                             </button>
//                         </div>

//                         {/* Calendar */}
//                         <div className="grid grid-cols-7 gap-1 mb-3">
//                             {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//                                 <div key={day} className="text-center text-sm text-white">
//                                     {day}
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="grid grid-cols-7 gap-1">{generateCalendarDays()}</div>

//                         {/* Manual Time Input */}
//                         <div className="mt-3">
//                             <h3 className="text-sm font-sans text-white mb-1">Enter Time (HH:MM)</h3>
//                             <input
//                                 type="text"
//                                 value={manualTime}
//                                 onChange={handleTimeInput}
//                                 placeholder="e.g., 14:30"
//                                 className="w-full p-1 text-white bg-[#262525] border border-[#525252] rounded-md placeholder:text-[12px]"
//                             />
//                         </div>

//                         {/* Done Button */}
//                         <div className="flex justify-end mt-2">
//                             <button
//                                 onClick={handleDone}
//                                 className="w-20 border border-[#262525] text-sm font-sans text-white py-1 rounded-lg flex items-center justify-center transition-all hover:bg-[#3c3c3c]"
//                             >
//                                 Done
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Datetimepicker;
