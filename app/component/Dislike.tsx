"use client";
import React, { useState } from "react";
import { AiOutlineDislike, AiFillDislike } from "react-icons/ai";

const Dislike = () => {
  const [disliked, setDisliked] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setDisliked(!disliked)}
        className="text-2xl transition-all duration-300"
      >
        {disliked ? (
          <AiFillDislike className="text-blue-500" />
        ) : (
          <AiOutlineDislike className="text-white" />
        )}
      </button>
    </div>
  );
};

export default Dislike;
