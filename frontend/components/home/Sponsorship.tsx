
"use client";

import Image from "next/image";
import Link from "next/link";

// Replace these two paths with your actual images (place them in /public)
const HERO_IMAGE = "/sponsorship/FSNL.jpeg";
const FEATURED_IMAGE = "/sponsorship/KONOIKE LOGO.png";
const FEATURED_IMAGE1 = "/sponsorship/DDBTA.png";


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

     

<div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
  {/* First card - Konoike */}
  <Link
    href="https://www.konoike.net/en/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-600/40 sm:p-8"
  >
    {/* Circular image */}
    <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-black/30 sm:h-48 sm:w-48">
      <Image
        src={FEATURED_IMAGE}
        alt="Konoike"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    {/* Name below */}
    <p className="mt-5 text-center text-base font-semibold text-gray-800 sm:text-lg">
      KONOIKE
    </p>
  </Link>

  {/* Second card - FSNL */}
  <Link
    href="https://www.fsnl.co.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-600/40 sm:p-8"
  >
    {/* Circular image */}
    <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-black/30 sm:h-48 sm:w-48">
      <Image
        src={HERO_IMAGE}
        alt="FSNL"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        priority
      />
    </div>

    {/* Name below */}
    <p className="mt-5 text-center text-base font-semibold text-gray-800 sm:text-lg">
      FSNL
    </p>
  </Link>

  <Link
    href="https://share.google/wBITkr7nyB1tfLZeO"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-600/40 sm:p-8"
  >
    {/* Circular image */}
    <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-black/30 sm:h-48 sm:w-48">
      <Image
        src={FEATURED_IMAGE1}
        alt="DDBTA"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        priority
      />
    </div>

    {/* Name below */}
    <p className="mt-5 text-center text-base font-semibold text-gray-800 sm:text-lg">
      DDBTA
    </p>
  </Link>
</div>
        </div>
      </section>
    </main>
  );
}