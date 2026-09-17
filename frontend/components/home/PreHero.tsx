
"use client";
import { useState, useEffect } from "react";

// ===== SLIDER IMAGES =====
import Image from "next/image";

const SLIDER_IMAGES = [
    "/home/HeroSection/tennis-hero.avif",
    "/home/HeroSection/prehero1.avif",
    "/home/HeroSection/prehero2.avif",
    "/home/HeroSection/prehero3.avif",

];

// Clone the first image to create an infinite loop
const slides = [...SLIDER_IMAGES, SLIDER_IMAGES[0]];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Auto‑slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Handle infinite loop: when we reach the clone, snap back to the real first slide
    useEffect(() => {
        // If we are on the last slide (the clone of the first image)
        if (currentIndex === slides.length - 1) {
            const timer = setTimeout(() => {
                // Disable transition temporarily to snap back instantly
                setIsTransitioning(false);
                setCurrentIndex(0);

                // Re-enable transition after the snap (next frame)
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                });
            }, 700); // match the transition duration
            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    return (
        <section className="relative flex min-h-screen w-full items-end justify-center overflow-hidden bg-[#1a2e1f] pb-12 sm:pb-16 md:pb-20">
            {/* ===== BACKGROUND SLIDER (INFINITE LOOP) ===== */}
           <div className="absolute inset-0 z-0 overflow-hidden"> 
  {/* Slider track – slides horizontally with dynamic transition */} 
  <div 
    className={`flex h-full w-full ${ 
      isTransitioning ? "transition-transform duration-700 ease-in-out" : "" 
    }`} 
    style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
  > 
    {slides.map((src, index) => ( 
      <Image 
        key={index} 
        src={src} 
        alt="Tennis court at sunset" 
        width={1920}
        height={1080}
        priority={index === 0}
        className="h-full w-full flex-shrink-0 object-cover" 
      /> 
    ))} 
  </div> 
 
  {/* Dark overlay – placed on top of slider */} 
  {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/" /> */} 
 
  {/* Subtle tennis court pattern overlay using CSS gradient */} 
  <div 
    className="absolute inset-0 opacity-10" 
    style={{ 
      backgroundImage: ` 
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px) 
      `, 
      backgroundSize: "40px 40px", 
    }} 
  /> 
 
  {/* Diagonal court lines */} 
  <div 
    className="absolute inset-0 opacity-5" 
    style={{ 
      backgroundImage: ` 
        linear-gradient(45deg, rgba(255,255,255,0.2) 1px, transparent 1px), 
        linear-gradient(-45deg, rgba(255,255,255,0.2) 1px, transparent 1px) 
      `, 
      backgroundSize: "80px 80px", 
    }} 
  /> 
</div>

            {/* ===== CONTENT – BOTTOM CENTER ===== */}
            <div className="relative z-10 mx-auto top-5 w-full max-w-5xl px-6 text-center sm:px-8">
                {/* Tagline – main heading */}
                <h1 className="text-3xl font-bold leading-[1.1] text-white tracking-tight drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Every Dream Deserves
                    <br />
                    <span className="bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                        a Chance to Play.
                    </span>
                </h1>

                {/* Supporting subtext */}
                <p className="mx-auto mt-4 max-w-3xl text-sm font-light leading-relaxed text-white/80 drop-shadow-lg sm:text-base md:text-lg">
                    Where Sport Builds Character, Inspires Confidence and Creates Stronger Coummunities.
                </p>

                {/* Small decorative note */}
                <div className="mt-5 flex items-center justify-center gap-3 text-xs text-white/40 sm:text-sm">
                    <span className="h-px w-8 bg-white" />
                    <span className="font-bold text-white">Finding JOY through Sport</span>
                    <span className="h-px w-8 bg-white" />
                </div>
            </div>

            {/* ===== KEYFRAMES FOR FLOATING ANIMATION ===== */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(10deg); }
                }
            `}</style>
        </section>
    );
}