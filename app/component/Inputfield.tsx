"use client";

import React, { useState, useRef } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { HiOutlineViewGridAdd } from "react-icons/hi";

const EMOJI_LIST = [
  { native: "👍", id: "thumbs-up" },
  { native: "❤️", id: "heart" },
  { native: "😂", id: "joy" },
  { native: "😮", id: "wow" },
  { native: "😢", id: "sad" },
  { native: "🙏", id: "pray" },
];


const Inputfield = ({ onSendMessage }: { onSendMessage: (message: string) => void }) => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleSend = () => {
    if (!message.trim()) return;
    console.log("Message sent:", message);
    onSendMessage(message); 
    setMessage(""); 

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };
  const toggleDropdown = () => {
    setOpen(!open);
    if (emojiOpen) setEmojiOpen(false);
  };
  
  const toggleEmojiPicker = () => {
    setEmojiOpen(!emojiOpen);
    if (open) setOpen(false);
  };

  const addEmoji = (emoji) => {
    setMessage((prev) => prev + emoji);
  };

  return (
    <div className="relative">
    <div className="h-[8%] w-[100%] min-h-[55px] px-2 flex items-center justify-between border-t border-[#383838] rounded-lg relative">
      <div className="flex items-center gap-2 relative">
       {/* Emoji Button */}
       <div
            className="h-10 w-10 border-[#383838] border flex items-center justify-center rounded-2xl text-white cursor-pointer hover:bg-[#282828]"
            onClick={toggleEmojiPicker}
          >
            <BsEmojiSmile className="h-5 w-5" />
          </div>

        <div
          className="h-[40px] w-[40px] border-[#383838] border flex items-center justify-center rounded-2xl cursor-pointer text-white"
          onClick={() => setOpen(!open)}
        >
          <HiOutlineViewGridAdd className="h-[20px] w-[20px]" />
        </div>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute bottom-full mb-2 border border-[#383838] rounded-lg bg-[#191919] shadow-lg transition-all duration-300 ease-in-out">
            <ul className="p-2">
              <li className="py-1 px-8 hover:bg-[#121212] hover:rounded-md cursor-pointer text-sm text-white">
                Add Option 1
              </li>
              <li className="py-1 px-8 hover:bg-[#121212] hover:rounded-md cursor-pointer text-sm text-white">
                Add Option 2
              </li>
              <li className="py-1 px-8 hover:bg-[#121212] hover:rounded-md cursor-pointer text-sm text-white">
                Add Option 3
              </li>
            </ul>
          </div>
        )}

        {/* Emoji Picker Popup */}
        {emojiOpen && (
            <div className="absolute bottom-full mb-2 border border-[#383838] rounded-lg bg-[#191919] shadow-lg p-1 z-10">
              <div className="flex gap-1">
                {EMOJI_LIST.map((emoji) => (
                  <button
                    key={emoji.id}
                    onClick={() => addEmoji(emoji.native)}
                    className="p-1 hover:bg-[#282828] rounded-lg text-xl"
                  >
                    {emoji.native}
                  </button>
                ))}
              </div>
            </div>
          )}
      </div>

      <textarea
        ref={textareaRef}
        value={message}
        onChange={handleInputChange}
        rows={1}
        placeholder="Type your message here..."
        className="flex-grow text-white font-sans text-sm no-scrollbar bg-[#191818] outline-none rounded-lg p-2 border-[#383838] border resize-none placeholder:text-[10px] m-2"
        style={{
          minHeight: "40px",
          maxHeight: "10px",
          lineHeight: "1.5",
          overflowY: "auto",
        }}
      />

      <div
        className="h-[40px] w-[40px] border-[#383838] border flex items-center justify-center rounded-2xl cursor-pointer"
        onClick={handleSend}
      >
        <CiLocationArrow1 className={`h-[20px] w-[20px] ${message.trim() ? "text-blue-500" : "text-white"}`} />
      </div>
    </div>
    </div>
  );
};

export default Inputfield;
