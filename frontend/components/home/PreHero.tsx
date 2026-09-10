// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// // ===== SLIDER IMAGES =====
// // Add your own image paths or Unsplash URLs here.
// // The first image is your original one.
// const SLIDER_IMAGES = [
//     "/images/tennis-hero.jpg",          // your existing image
//     "https://images.unsplash.com/photo-1622279457486-62d1194a0fae?w=1400&q=80", // court
//     "https://images.unsplash.com/photo-1595435934245-0c64d9a7eb3e?w=1400&q=80", // player
//     "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1400&q=80", // racket
// ];

// export default function Home() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Auto‑slide every 5 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="relative flex min-h-screen w-full items-end justify-center overflow-hidden bg-[#1a2e1f] pb-12 sm:pb-16 md:pb-20">
//             {/* ===== BACKGROUND SLIDER ===== */}
//             <div className="absolute inset-0 z-0">
//                 {/* Stacked images with cross‑fade */}
//                 {SLIDER_IMAGES.map((src, index) => (
//                     <img
//                         key={index}
//                         src={src}
//                         alt="Tennis court at sunset"
//                         className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
//                         style={{ opacity: index === currentIndex ? 1 : 0 }}
//                     />
//                 ))}

//                 {/* Dark overlay – slightly darker for better contrast */}
//                 {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" /> */}

//                 {/* Subtle tennis court pattern overlay using CSS gradient */}
//                 <div
//                     className="absolute inset-0 opacity-10"
//                     style={{
//                         backgroundImage: `
//                             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//                         `,
//                         backgroundSize: "40px 40px",
//                     }}
//                 />

//                 {/* Diagonal court lines */}
//                 <div
//                     className="absolute inset-0 opacity-5"
//                     style={{
//                         backgroundImage: `
//                             linear-gradient(45deg, rgba(255,255,255,0.2) 1px, transparent 1px),
//                             linear-gradient(-45deg, rgba(255,255,255,0.2) 1px, transparent 1px)
//                         `,
//                         backgroundSize: "80px 80px",
//                     }}
//                 />
//             </div>

//             {/* ===== FLOATING TENNIS BALLS ===== */}
//             <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//                 {[...Array(8)].map((_, i) => (
//                     <div
//                         key={i}
//                         className="absolute text-3xl sm:text-4xl md:text-5xl opacity-20"
//                         style={{
//                             left: `${5 + Math.random() * 90}%`,
//                             top: `${5 + Math.random() * 80}%`,
//                             animation: `float ${8 + Math.random() * 10}s ease-in-out infinite`,
//                             animationDelay: `${Math.random() * 6}s`,
//                         }}
//                     >
//                         🎾
//                     </div>
//                 ))}
//             </div>

//             {/* ===== CONTENT – BOTTOM CENTER ===== */}
//             <div className="relative z-10 mx-auto top-5 w-full max-w-5xl px-6 text-center sm:px-8">
//                 {/* Tagline – main heading */}
//                 <h1 className="text-3xl font-bold leading-[1.1] tracking-tight drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
//                     Every Dream Deserves
//                     <br />
//                     <span className="bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
//                         a Chance to Play.
//                     </span>
//                 </h1>

//                 {/* Supporting subtext */}
//                 <p className="mx-auto mt-4 max-w-3xl text-sm font-light leading-relaxed text-white/80 drop-shadow-lg sm:text-base md:text-lg">
//                     Where Sport Builds Character, Inspire Confidence and Creates Stronger Coummunities.
//                 </p>

//                 {/* Small decorative note */}
//                 <div className="mt-5 flex items-center justify-center gap-3 text-xs text-white/40 sm:text-sm">
//                     <span className="h-px w-8 bg-white" />
//                     <span className="font-bold text-white">Finding JOY through Sport</span>
//                     <span className="h-px w-8 bg-white" />
//                 </div>
//             </div>

//             {/* ===== KEYFRAMES FOR FLOATING ANIMATION ===== */}
//             <style>{`
//                 @keyframes float {
//                     0%, 100% { transform: translateY(0px) rotate(0deg); }
//                     50% { transform: translateY(-20px) rotate(10deg); }
//                 }
//             `}</style>
//         </section>
//     );
// }

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// ===== SLIDER IMAGES =====
// Replace these with your own image URLs. The first one is your original image.
const SLIDER_IMAGES = [
    "/images/tennis-hero.jpg",          // your existing image
    "/images/prehero1.jpg",
    "/images/prehero2.jpg",
    "/images/prehero3.jpg",

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
                        <img
                            key={index}
                            src={src}
                            alt="Tennis court at sunset"
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