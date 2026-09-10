

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaEnvelope, FaFutbol } from "react-icons/fa";

import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const countdownItems = ["DAYS", "HOURS", "MINUTES", "SECONDS"];
const eventData = {
  title: (
    <>
      'Baseline of Hope'
      <br />
      Invitational Tennis Tournament
    </>
  ),

  date: "FSNL–KONOIKE Open 2025",

  image: "/images/Event1.jpeg",

  // 5 photos
  photos: [
    "/gallery/G3.avif",
    "/gallery/G4.avif",
    "/gallery/G5.avif",
    "/gallery/G6.avif",
    "/gallery/G7.avif",
   
  ],
};

export default function Event1() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>  
{/* ================================================= */}
{/* ============== EVENTS SOON TO BE ================ */}
{/* ================================================= */}

{/* ================================================= */}
{/* ============== EVENTS SOON TO BE ================ */}
{/* ================================================= */}

<section className="w-full px-4 mt-[125px] sm:px-6 lg:px-10">
  <div className="mx-auto flex min-h-[100px] max-w-6xl items-center justify-around gap-4 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-lime-50 px-4 py-2 shadow-sm sm:px-6">

    {/* Left Side */}
<div className="flex flex-col gap-1">
  {/* Events + Soon to be */}
  <div className="flex items-center gap-3">
    <FaCalendarAlt className="shrink-0 text-lg text-emerald-500 sm:text-xl" />

    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold text-slate-800">
        Events
      </span>

      <span className="text-slate-400">•</span>

      <span className="text-2xl font-semibold text-emerald-500">
        Soon to be
      </span>
    </div>
  </div>

  {/* Stay tuned - niche */}
  <div className="ml-8">
    <span className="text-sm font-medium text-slate-500">
      Stay tuned for the updates!
    </span>
  </div>
</div>

    {/* Right Side */}
  <div className="flex items-center gap-2">
  {countdownItems.map((label: string, index: number) => (
    <div
      key={index}
      className="hidden min-w-[60px] flex-col items-center justify-center rounded-lg bg-white px-2 py-1 text-xl shadow-sm sm:flex"
    >
      <span className="font-bold leading-tight text-emerald-500">
        00
      </span>

      <span className="text-xs font-medium  text-slate-500">
        {label}
      </span>
    </div>
  ))}

  <span className="text-xs font-medium text-slate-500 sm:hidden">
    Stay tuned!
  </span>
</div>

  </div>
</section>


    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10">

      {/* ================= SECTION TITLE ================= */}
      <div className="mb-10 text-center sm:mb-12">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          The Journey So{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
            Far
          </span>
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-2xl italic text-gray-500">
          Relive the Moments
        </p>
      </div>

      {/* ================= MAIN CARD ================= */}
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white/60 shadow-sm backdrop-blur-sm">

        {/* ================= TOP IMAGE ================= */}
        <div className="group relative h-[260px] w-full overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[500px]">
          <Image
            src={eventData.image}
            alt="Baseline of Hope - FSNL KONOIKE Open 2025"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-6 sm:p-8 md:p-10">

          {/* ================= LOGO ================= */}
          <div className="mb-4 flex justify-center">
            <img
              src="/images/logo.jpeg"
              alt="Logo"
              className="h-24 w-24 object-contain sm:h-28 sm:w-28"
            />
          </div>

          {/* ================= DATE ================= */}
          <div className="mb-2 text-center">
            <span className="text-xl font-semibold text-green-600 sm:text-2xl md:text-3xl">
              {eventData.date}
            </span>
          </div>

          {/* ================= EVENT TITLE ================= */}
          <h3 className="mb-6 text-center text-2xl font-bold italic leading-tight text-gray-800 sm:text-3xl md:text-4xl">
            {eventData.title}
          </h3>

          {/* ================= DESCRIPTION ================= */}
          <div
            className={`text-gray-600 leading-relaxed ${
              !isExpanded
                ? "max-h-[115px] overflow-hidden"
                : ""
            }`}
          >

            {/* Paragraph 1 */}
            <p className="mb-4">
              Held on 20–21 December 2025, the FSNL–KONOIKE Open 2025{" "}
              <span className="font-semibold italic">
                'Baseline of Hope'
              </span>{" "}
              brought together emerging tennis talent from across Chhattisgarh
              for a celebration of sport, community, and social development.
            </p>

            {/* Paragraph 2 */}
            <p className="mb-4">
              With the theme{" "}
              <span className="font-bold italic text-gray-700">
                “The Power of Sport to Fuel Social Development”
              </span>
              , the tournament went beyond competition. It created a platform
              for young players to showcase their talent, build connections,
              and experience the values of discipline, teamwork, resilience,
              and fair play.
            </p>

            {/* Paragraph 3 */}
            <p className="mb-4">
              The event brought together tennis academies, tennis schools, and
              tennis clubs from across Chhattisgarh, making it one of the
              region’s largest academy- and club-based tennis tournaments.
            </p>

            {/* Paragraph 4 */}
            <p>
              More than a tournament,{" "}
              <span className="font-semibold italic">
                'Baseline of Hope'
              </span>{" "}
              reflected the transformative power of sport—bringing communities
              together, nurturing young talent, and creating opportunities for
              positive social change.
            </p>

          </div>

          {/* ================= READ MORE ================= */}
          {!isExpanded && (
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="mt-5 cursor-pointer inline-flex items-center gap-2 font-semibold text-green-600 transition-all duration-300 hover:text-green-700"
            >
              Read More
              <ChevronDown size={18} />
            </button>
          )}

          {/* ================= EXPANDED CONTENT ================= */}
          {isExpanded && (
            <div className="mt-6 flex flex-col">

              {/* ================= WEBSITE BUTTON ================= */}
              <Link
                href="https://www.fsnlkonoiketennis.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2 rounded-lg border-2 border-green-600 px-4 py-2 font-semibold text-green-600 transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:text-white"
              >
                View the tournament website for more details

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* ================= READ LESS - LAST BUTTON ================= */}
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="mt-5 cursor-pointer inline-flex w-fit items-center gap-2 font-semibold text-green-600 transition-all duration-300 hover:text-green-700"
              >
                Read Less
                <ChevronUp size={18} />
              </button>

            </div>
          )}

        </div>

        {/* ================================================= */}
        {/* ================= 5 PHOTOS ======================= */}
        {/* ================================================= */}

     <div className="border-t border-gray-200/70 px-4 py-5 sm:px-6 md:px-10">
  
     <p className="mx-auto italic font-bold text-base max-w-2xl text-gray-600">
          Your Lens, Our Journey
        </p>

  <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4">

    {eventData.photos.map((src, index) => (
      <div
        key={index}
        className="group relative aspect-[16/9] w-full overflow-hidden shadow-sm"
      >
        <Image
          src={src}
          alt={`Baseline of Hope event photo ${index + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 20vw, (max-width: 1024px) 18vw, 16vw"
        />
      </div>
    ))}

  </div>

</div>

     <div className="border-t border-gray-200/70 px-4 py-5 sm:px-6 md:px-10">

  <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4">

    {eventData.photos.map((src, index) => (
      <div
        key={index}
        className="group relative aspect-[16/9] w-full overflow-hidden shadow-sm"
      >
        <Image
          src={src}
          alt={`Baseline of Hope event photo ${index + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 20vw, (max-width: 1024px) 18vw, 16vw"
        />
      </div>
    ))}

  </div>

</div>

      </div>
    </section>
    </>
  );
}