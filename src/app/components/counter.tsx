"use client";
import Image from "next/image";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="flex items-center gap-4">
      <button
        className={`w-6 h-6 p-2 flex items-center justify-center rounded-full font-bold text-lg 
        ${count === 1 ? "border-none" : "border"}
        ${
          count <= 0
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "border text-[var(--primary-green)] border-[var(--primary-green)] hover:bg-[var(--secondary-green)]"
        }`}
        onClick={handleDecrement}
        disabled={count <= 0}
      >
        {count === 1 ? (
          <Image
            src="/assets/trash.svg"
            alt="trash"
            className="min-h-6 min-w-6"
            width={32}
            height={32}
          />
        ) : (
          "−"
        )}
      </button>

      <span className="text-xs font-medium">{count}</span>

      <button
        className="w-6 h-6 p-2 border flex items-center justify-center border-[var(--primary-green)] rounded-full text-[var(--primary-green)] font-bold hover:bg-[var(--secondary-green)]"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
