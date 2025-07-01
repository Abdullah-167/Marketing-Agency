// /Components/Common/HomeOutro.tsx

"use client";
import { useEffect, useState } from "react";

export default function HomeOutro() {
  const [hideOutro, setHideOutro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideOutro(true); // Hide after 4 seconds
    }, 3400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-1000 ${
        hideOutro ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* 👇 Replace video or use animated SVG or Lottie */}
      <video
        src="/BLACKIntroAnimation.mp4" // replace with your file path
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
