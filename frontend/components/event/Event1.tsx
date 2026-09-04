
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const eventData = {
  title: "Baseline of Hope – Invitational Tennis Tournament",
  date: "FSNL–KONOIKE Open 2025",

  images: [
    "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800",
    "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800",
    "https://images.unsplash.com/photo-1560012057-8d7d7d7d7d7d?w=800",
    "https://images.unsplash.com/photo-1543269865-7a6a4c6e5e4e?w=800",
  ],
};

export default function Event1() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-22 lg:px-10">

      {/* ================= SECTION TITLE ================= */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Previous{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
            Event
          </span>
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-gray-500">
          Relive Last Year’s Tournament Highlights.
        </p>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">

        {/* ================= LEFT CARD ================= */}
        <div className="flex h-full flex-col rounded-2xl bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md sm:p-8">

        {/* Date */}
<div className="mb-3 flex items-center gap-2 text-lg font-semibold text-green-600">
  <img
    src="/images/logo.jpeg"
    alt="Logo"
    className="h-5 w-5 object-contain"
  />

  <span>{eventData.date}</span>
</div>

          {/* Event Title */}
          <h3 className="mb-5 text-2xl font-bold leading-tight text-gray-800 sm:text-3xl">
            {eventData.title}
          </h3>

          {/* ================= DESCRIPTION ================= */}
          <div className="space-y-4 text-gray-600 leading-relaxed">

            {/* Paragraph 1 */}
            <p>
              Held on 20–21 December 2025, the FSNL–KONOIKE Open 2025{" "}
              <span className="font-semibold italic">
                “Baseline of Hope”
              </span>{" "}
              brought together emerging tennis talent from across Chhattisgarh
              for a celebration of sport, community, and social development.
            </p>

            {/* Paragraph 2 */}
            <p>
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
            <p>
              The event brought together tennis academies, tennis schools, and
              tennis clubs from across Chhattisgarh, making it one of the
              region’s largest academy- and club-based tennis tournaments.
            </p>

            {/* Paragraph 4 */}
            <p>
              More than a tournament,{" "}
              <span className="font-semibold italic">
                Baseline of Hope
              </span>{" "}
              reflected the transformative power of sport—bringing communities
              together, nurturing young talent, and creating opportunities for
              positive social change.
            </p>

          </div>

          {/* ================= WEBSITE BUTTON ================= */}
          <Link
            href="https://www.fsnlkonoiketennis.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex w-fit items-center gap-2 rounded-lg border-2 border-green-600 px-4 py-2 font-semibold text-green-600 transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:text-white"
          >
            View the tournament website for more details

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ================= RIGHT IMAGE COLLAGE ================= */}
        <div className="grid h-full min-h-[500px] grid-cols-2 grid-rows-2 gap-2">

          {eventData.images.map((src, idx) => (
            <div
              key={idx}
              className="group relative h-full w-full min-h-0 overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <Image
                src={src}
                alt={`${eventData.title} - image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
                priority={idx < 2}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

