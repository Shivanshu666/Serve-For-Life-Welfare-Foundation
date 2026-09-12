// components/home/Athletes.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Import your images
import athlete1 from "@/assets/athlete/athlete1.jpeg";
import athlete2 from "@/assets/athlete/athlete2.jpeg";
import athlete3 from "@/assets/athlete/athlete3.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const athletes = [
  {
    name: "Abhinav Singh",
    image: athlete1,
    ranks: [
      "#Ranked 35 in ASIA (UNDER 16)",
      "#Ranked 02 in State U16 (2024-25)",
    ],
    desc: "Kids love him when he walks in and want to be around him. He is being looked up as a role model for the academy players. He loves to hit the ball with power and passion. He loves being on the court and enjoys playing all court tennis. He is being admired by our Adults group as well and is willing to play and hit with anyone who wants to.",
  },
  {
    name: "Tanvya Goel",
    image: athlete2,
    ranks: [
      "#Ranked 455 in AITA (UNDER 16)",
      "#Ranked 02 in State U14 (2024-25)",
    ],
    desc: "An emerging young player who is in high school this year, he is a dedicated athlete who approaches every opportunity to improve with determination and focus. He enjoys training, embraces hard work and brings a strong work ethic to everything he does on and off the court.",
  },
  {
    name: "Vanya Pundir",
    image: athlete3,
    ranks: [
      "#Ranked 284 in AITA (UNDER 14)",
      "#Ranked 02 in State U14 (2024-25)",
    ],
    desc: "Vanya loves a challenge on the tennis court. She thrives on competition and shares her passion for the game with her dad. With powerful shots, enthusiasm and a strong desire to improve, she is always eager to step onto the court, play her best and keep getting better.",
  },
];

export default function Athletes() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FCFCFC] to-[#F8FBF8] py-24 px-6 sm:px-8 lg:px-12">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-lime-100 blur-[180px]" />
      <div className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-emerald-100 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-lime-200 bg-lime-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-lime-700">
            Game Changers
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Meet Our Sponsored{" "}
            <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
              Junior Athletes
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We support these hardworking young players as they pursue
            their tennis dreams. Your donation helps cover training,
            coaching, equipment, and tournament expenses.
          </p>
        </motion.div>

        {/* Athlete Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl"
        >
          {athletes.map((athlete, index) => (
            <AthleteCard key={index} athlete={athlete} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-[32px] border border-lime-200 bg-gradient-to-r from-lime-50 via-white to-emerald-50 p-10 shadow-xl shadow-lime-100/40">
            <h3 className="text-3xl font-bold text-slate-900">
              Help Young Athletes Achieve Their Dreams
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Every donation provides coaching, equipment, tournament
              opportunities, and mentorship for talented young tennis
              players. Together, we can build brighter futures through
              the power of sport.
            </p>

            <Link
              href="/involved"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-300/40"
            >
              Support Our Athletes
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Athlete Card ---------- */

type Athlete = {
  name: string;
  image: any;
  ranks: string[];
  desc: string;
};

function AthleteCard({ athlete }: { athlete: Athlete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-lime-100 bg-white shadow-lg shadow-lime-100/40 transition-all duration-500 hover:-translate-y-2 hover:border-lime-300 hover:shadow-2xl hover:shadow-lime-200/40"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={athlete.image}
          alt={athlete.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Name */}
        <h3 className="text-2xl font-bold text-slate-900">
          {athlete.name}
        </h3>

        {/* Rank badges */}
     {athlete.ranks?.length > 0 && (
  <div className="mt-4 flex flex-col gap-2.5">
    {athlete.ranks.map((rank, rankIndex) => (
      <div
        key={rankIndex}
        className="group/rank relative w-fit max-w-full overflow-hidden rounded-xl border border-lime-200/80 bg-gradient-to-r from-lime-50 via-white to-emerald-50 px-3.5 py-2.5 shadow-sm shadow-lime-100 transition-all duration-300 hover:border-lime-400 hover:shadow-md hover:shadow-lime-200/60"
      >
        {/* Left accent bar */}
        <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-lime-400 via-lime-500 to-emerald-500" />

        {/* Soft glow blob */}
        <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-lime-300/30 blur-2xl transition-opacity duration-300 group-hover/rank:opacity-80" />

        <div className="relative flex items-center gap-2.5 pl-1.5">
          {/* Highlighted dot indicator */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-lime-400 to-emerald-500 shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
          </span>

          <span className="text-[10px] font-bold uppercase leading-tight tracking-wide text-slate-800 sm:text-xs">
            {rank}
          </span>
        </div>
      </div>
    ))}
  </div>
)}

        {/* Description with line clamp + read more */}
        <div className="mt-5">
          <p
            className={`leading-7 text-slate-600 transition-all ${
              expanded ? "" : "line-clamp-4"
            }`}
          >
            {athlete.desc}
          </p>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 text-sm cursor-pointer font-semibold text-lime-600 hover:text-lime-700 hover:underline"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px bg-gradient-to-r from-lime-200 via-emerald-200 to-transparent" />

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-lime-600">
            Sponsored Athlete
          </span>

          <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime-700">
            Tennis
          </span>
        </div>
      </div>
    </motion.div>
  );
}