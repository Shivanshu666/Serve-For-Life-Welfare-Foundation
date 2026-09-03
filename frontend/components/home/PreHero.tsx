"use client";
import Link from "next/link";


export default function Home() {
  return (
    <section className="relative flex min-h-screen w-full items-end justify-center overflow-hidden bg-[#1a2e1f] pb-12 sm:pb-16 md:pb-20">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/tennis-hero.jpg"
          alt="Tennis court at sunset"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay – slightly darker for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        
        {/* Subtle tennis court pattern overlay using CSS gradient */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
        
        {/* Diagonal court lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* ===== FLOATING TENNIS BALLS ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl sm:text-4xl md:text-5xl opacity-20"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 80}%`,
              animation: `float ${8 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          >
            🎾
          </div>
        ))}
      </div>

      {/* ===== CONTENT – BOTTOM CENTER ===== */}
      <div className="relative z-10 mx-auto top-5 w-full max-w-5xl px-6 text-center sm:px-8">
        {/* Tagline – main heading */}
        <h1 className="text-3xl font-bold leading-[1.1] tracking-tight drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
          Every Dream Deserves
          <br />
          <span className="bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
            a Chance to Play.
          </span>
        </h1>

        {/* Supporting subtext */}
        <p className="mx-auto mt-4 max-w-3xl text-sm font-light leading-relaxed text-white/80 drop-shadow-lg sm:text-base md:text-lg">
          Where Sport Builds Character, Inspire Confidence and Creates Stronger Coummunities.
        </p>

   

        {/* Small decorative note */}
        <div className="mt-5 flex items-center justify-center gap-3 text-xs text-white/40 sm:text-sm">
          <span className="h-px w-8 bg-white" />
          <span className="font-bold text-white">Finding JOY through Sport</span>
          <span className="h-px w-8 bg-white" />
        </div>
      </div>
    </section>
  );
}