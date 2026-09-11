
"use client";

import Image from "next/image";

// Replace these two paths with your actual images (place them in /public)
const HERO_IMAGE = "/sponsorship/FSNL.jpeg";
const FEATURED_IMAGE = "/sponsorship/KONOIKE LOGO.png";

export default function SponsorshipPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-emerald-200">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-10 text-center">
          {/* Heading */}
         <div className="mx-auto max-w-7xl px-6 py-5">
  <div className="flex flex-col items-center gap-6 text-center">
    {/* Badge - Top */}
    <span className="inline-flex items-center rounded-full border border-lime-200 bg-lime-100 px-4 py-2 font-semibold uppercase tracking-widest text-lime-700 text-lg">
      Impact Partners
    </span>

    {/* Heading - Below */}
    <h2 className="max-w-7xl mt-5 text-3xl text-center font-bold text-slate-900 ">
      Partnerships That Move{" "} 
      <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text italic text-transparent">
        Communities Forward
      </span>
    </h2>
  </div>
</div>

     
<div className="mt-5 grid grid-cols-2 gap-8 sm:gap-12">
  {/* First image */}
  <div className="group relative aspect-[4/5] w-40 overflow-hidden rounded-xl border-2 border-emerald-500/70 bg-white p-1 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-emerald-600 hover:shadow-xl sm:w-48">
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      <Image
        src={HERO_IMAGE}
        alt="Impact partner"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />

     
    </div>
  </div>

  {/* Second image */}
  <div className="group relative aspect-[4/5] w-40 overflow-hidden rounded-xl border-2 border-emerald-500/70 bg-white p-1 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-emerald-600 hover:shadow-xl sm:w-48">
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      <Image
        src={FEATURED_IMAGE}
        alt="Featured partner"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

    
    </div>
  </div>
</div>
        </div>
      </section>
    </main>
  );
}