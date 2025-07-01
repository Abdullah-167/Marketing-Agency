"use client";
import { useEffect, useState } from "react";

export default function HomeOutro() {
  const [hideOutro, setHideOutro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideOutro(true); // Hide after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-700 ease-in-out ${
        hideOutro ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        src="/BLACKIntroAnimation.webm"
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
}
