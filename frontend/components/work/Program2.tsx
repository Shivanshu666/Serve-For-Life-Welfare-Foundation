// components/Program2.tsx
"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FaTrophy, FaUsers, FaHeart, FaHandsHelping, FaArrowRight } from "react-icons/fa";
import Athletes from "@/components/home/Athletes";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Program2() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
      className="space-y-12"
    >
      {/* ===== HERO BANNER ===== */}
      <motion.div variants={fadeUp} className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg sm:h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1560012057-8d7d7d7d7d7d?w=1200"
          alt="Athlete Sponsorship Program"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-10 sm:left-10">
          <span className="inline-block rounded-full bg-lime-500/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Athlete Development
          </span>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            SFLWF (SET) Athlete Sponsorship Program
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
            Supporting talented young tennis players who have the game but not the means.
          </p>
        </div>
      </motion.div>

      {/* ===== OVERVIEW + STATS ===== */}
      <motion.div variants={fadeUp} className="grid gap-8 md:grid-cols-3">
        <div className="col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            Program Overview
          </h2>
          {/* === EXACT ORIGINAL TEXT (first paragraph) === */}
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            The Serve For Life Welfare Foundation (SFLWF), through its{" "}
            <span className="font-semibold text-lime-700">SET Framework</span> —
            <span className="font-bold text-black"> Serve</span>{" "}
            <span className="font-bold text-black">• Empower</span>{" "}
            <span className="font-bold text-black">• Transform</span><br /> — is committed
            to identifying, nurturing, and supporting talented young tennis players
            from economically under‑resourced backgrounds{" "}
            <span className="font-bold italic text-slate-900">
              who have the game but not the means.
            </span>
          </p>
          {/* === EXACT ORIGINAL TEXT (second paragraph) === */}
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            The SFLWF (SET) Athlete Sponsorship Program is designed to bridge this
            gap by providing deserving athletes with holistic support, enabling
            them to train, compete, and develop in a structured high‑performance
            environment.
          </p>
        </div>

        {/* Quick Stats */}
      <div className="space-y-4 rounded-2xl bg-lime-50/80 p-6 shadow-sm">
  <h3 className="text-sm font-semibold uppercase tracking-wider text-lime-700">
    At a Glance
  </h3>

  <div className="space-y-4">
    {/* FIND */}
    <div className="flex items-start gap-3">
      <FaTrophy className="mt-1 text-lime-600" />
      <div>
        <p className="font-bold text-slate-800">FIND</p>
        <p className="text-xs leading-relaxed text-slate-500">
          Identify promising young tennis players through identification
          programs.
        </p>
      </div>
    </div>

    {/* FUND */}
    <div className="flex items-start gap-3">
      <FaHandsHelping className="mt-1 text-lime-600" />
      <div>
        <p className="font-bold text-slate-800">FUND</p>
        <p className="text-xs leading-relaxed text-slate-500">
          Eliminate the financial barriers that keep talented athletes off
          the court.
        </p>
      </div>
    </div>

    {/* GROW */}
    <div className="flex items-start gap-3">
      <FaTrophy className="mt-1 text-lime-600" />
      <div>
        <p className="font-bold text-slate-800">GROW</p>
        <p className="text-xs leading-relaxed text-slate-500">
          Provide long-term athlete development pathways that build
          excellence in sport and education together.
        </p>
      </div>
    </div>

    {/* RISE */}
    <div className="flex items-start gap-3">
      <FaHandsHelping className="mt-1 text-lime-600" />
      <div>
        <p className="font-bold text-slate-800">RISE</p>
        <p className="text-xs leading-relaxed text-slate-500">
          Enable athletes to compete at district, state, and national
          levels and be part of college tennis globally.
        </p>
      </div>
    </div>
  </div>
</div>

      </motion.div>

      {/* ===== SET FRAMEWORK BREAKDOWN ===== */}
      {/* <motion.div variants={fadeUp}>
        <h2 className="mb-6 text-2xl font-bold text-slate-800 sm:text-3xl">
          The SET Framework
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { name: "Serve", icon: FaTrophy, color: "lime", desc: "Identifying and supporting talent" },
            { name: "Empower", icon: FaHandsHelping, color: "emerald", desc: "Providing opportunities to grow" },
            { name: "Transform", icon: FaUsers, color: "teal", desc: "Creating lasting impact" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white/70 p-4 text-center shadow-sm transition hover:shadow-md"
            >
              <div className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-${item.color}-100 text-${item.color}-700`}>
                <item.icon className="text-xl" />
              </div>
              <p className="font-bold text-slate-800">{item.name}</p>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div> */}

      {/* ===== ATHLETES SECTION ===== */}
      <motion.div variants={fadeUp}>
    
        <Athletes />
      </motion.div>

      {/* ===== FINAL QUOTE ===== */}
      <motion.div variants={fadeUp} className="rounded-2xl bg-white/80 p-6 shadow-sm sm:p-8">
        <div className="text-center font-bold italic text-slate-900">
          {/* === EXACT ORIGINAL TEXT (final quote) === */}
          <p>
            At SFLWF, we believe that talent should never be limited by financial
            circumstances. <br />
            By investing in young athletes today, we are developing not only
            future champions in tennis but also confident, disciplined, and
            responsible individuals who will inspire the next generation.
          </p>
        </div>
      </motion.div>


    </motion.div>
  );
}