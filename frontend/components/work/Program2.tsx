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
          src="/images/program22.jpg"
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

    <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
      The{" "}
      <span className="font-semibold text-lime-700">
        SFLWF (SET) Athlete Sponsorship Program
      </span>{" "}
      is a flagship initiative designed to identify, nurture, and support
      talented young tennis players who demonstrate strong potential but face
      financial barriers in pursuing their sporting aspirations.
    </p>

    <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
      Guided by the{" "}
      <span className="font-semibold text-lime-700">
        SET Framework
      </span>{" "}
      —{" "}
      <span className="font-bold text-black">Serve</span>{" "}
      •{" "}
      <span className="font-bold text-black">Empower</span>{" "}
      •{" "}
      <span className="font-bold text-black">Transform</span>{" "}
      — the program focuses on providing deserving athletes, particularly
      those from economically under-resourced backgrounds, with meaningful
      support that directly contributes to their development and performance.
    </p>

    <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
      Through a structured pathway, selected athletes receive assistance in
      the following key areas:
    </p>

    {/* Support Areas */}
    <ul className="space-y-1 text-base leading-relaxed text-slate-600 sm:text-lg">
      <li className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-600" />
        <span>
          <span>Coaching</span>
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-600" />
        <span>
          <span>
            Tournament participation and competitive exposure
          </span>
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-600" />
        <span>
          <span>
            Tennis equipment and playing essentials
          </span>
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-600" />
        <span>
          <span>
            Athlete development and mentorship
          </span>
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-600" />
        <span>
          <span>
            Improved accessibility to training and competitive opportunities
          </span>
        </span>
      </li>
    </ul>

    <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
      Beyond sporting success, the program aims to develop{" "}
      <span className="font-bold text-slate-900">
        confident, disciplined, and resilient individuals
      </span>{" "}
      who embody the Foundation’s core values and serve as positive role
      models within their communities.
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

          <p className="text-sm leading-relaxed text-slate-500">
            Identify talented young tennis players with strong potential
            and sporting aspirations.
          </p>
        </div>
      </div>

      {/* FUND */}
      <div className="flex items-start gap-3">
        <FaHandsHelping className="mt-1 text-lime-600" />

        <div>
          <p className="font-bold text-slate-800">FUND</p>

          <p className="text-sm leading-relaxed text-slate-500">
            Reduce financial barriers by supporting coaching, equipment,
            tournaments, and other essential sporting needs.
          </p>
        </div>
      </div>

      {/* GROW */}
      <div className="flex items-start gap-3">
        <FaTrophy className="mt-1 text-lime-600" />

        <div>
          <p className="font-bold text-slate-800">GROW</p>

          <p className="text-sm leading-relaxed text-slate-500">
            Develop athletes through structured training, mentorship,
            competitive exposure, and long-term development.
          </p>
        </div>
      </div>

      {/* RISE */}
      <div className="flex items-start gap-3">
        <FaHandsHelping className="mt-1 text-lime-600" />

        <div>
          <p className="font-bold text-slate-800">RISE</p>

          <p className="text-sm leading-relaxed text-slate-500">
            Empower athletes to become confident, disciplined, and resilient
            individuals who inspire their communities.
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.div>




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