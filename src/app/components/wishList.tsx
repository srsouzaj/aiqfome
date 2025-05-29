"use client";
import { useState } from "react";

const WishList = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <svg
      onClick={() => setIsActive(!isActive)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="cursor-pointer transition-colors duration-300"
      fill={isActive ? "#580f78" : "#fff"}
      viewBox="0 0 256 256"
      stroke={"#580f78"}
      strokeWidth="15"
    >
      <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
    </svg>
  );
};

export default WishList;
