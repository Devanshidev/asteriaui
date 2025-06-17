"use client";
import React, { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

const Like = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className=" ">
      <button 
        onClick={() => setLiked(!liked)} 
        className="text-2xl transition-all duration-300"
      >
        {liked ? (
          <AiFillLike className="text-blue-500" />
        ) : (
          <AiOutlineLike className="text-white" />
        )}
      </button>
    </div>
  );
};

export default Like;
