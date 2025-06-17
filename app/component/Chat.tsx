"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Inputfield from "./Inputfield";

const Chat = ({message}:{message:any}) => {
  const SENDER_IMAGE = "/assets/img10.png";
  const RECEIVER_IMAGE = "/assets/img11.png";

  // Store chat messages in state
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi.", type: "sent", userImage: SENDER_IMAGE },
    { id: 2, text: "Hello.", type: "received", userImage: RECEIVER_IMAGE },
    { id: 3, text: "How are you?", type: "sent", userImage: SENDER_IMAGE },
    { id: 4, text: "I'm good, thanks!", type: "received", userImage: RECEIVER_IMAGE },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Function to handle sending a message
  const handleSendMessage = (messageText: string) => {
    if (!messageText.trim()) return;

    // Create new message object
    const newMessage = {
      id: messages.length + 1,
      text: messageText,
      type: "sent",
      userImage: SENDER_IMAGE,
    };

    // Update state with new message
    setMessages([...messages, newMessage]);
  };

  // Auto-scroll to the latest message
  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  return (
    <div className="border border-[#383838] p-4 rounded-xl space-y-4 bg-[#191818] flex flex-col justify-between h-[450px]">
      {/* Header */}
      <div className="text-sm font-bold text-white border-b border-[#282626]">
        Chats
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-6 custom-scrollbar">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${message.type === "sent" ? "items-end" : "items-start"}`}
          >
            {/* Profile Picture */}
            <div className="w-10 h-10 rounded-full overflow-hidden mb-2 relative bg-[#282828]">
              <Image
                src={message.userImage}
                alt={message.type === "sent" ? "Sender" : "Receiver"}
                fill
                className="object-cover"
                sizes="(max-width: 40px) 100vw"
              />
            </div>

            {/* Chat Bubble */}
            <div
              className={`rounded-lg max-w-[70%] ${
                message.type === "sent"
                  ? "rounded-tr-none bg-[#262626] text-white"
                  : "rounded-tl-none bg-[#383838] text-gray-300"
              } text-xs p-3 break-words`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Field */}
      <div className="w-full mt-4">
        <Inputfield onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chat;
