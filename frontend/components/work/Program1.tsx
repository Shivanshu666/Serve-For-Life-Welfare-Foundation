// components/Program1.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FaChild, FaUsers, FaClock, FaHeart, FaArrowRight } from "react-icons/fa";

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

export default function Program1() {
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
          src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1200"
          alt="Child Empowerment Program"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-10 sm:left-10">
          <span className="inline-block rounded-full bg-emerald-500/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Child Development
          </span>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            SFLWF Child Empowerment School Program
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
            Using sport and play to help children from underserved communities build confidence, teamwork, leadership, and healthy habits.
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
            The Child Empowerment School Program by Serve For Life Welfare Foundation (SFLWF)
            uses the power of sport and play to help children from underserved
            communities build <span className="font-semibold text-emerald-700">confidence</span>,{" "}
            <span className="font-semibold text-emerald-700">teamwork</span>,{" "}
            <span className="font-semibold text-emerald-700">leadership</span> and
            <span className="font-semibold text-emerald-700"> healthy habits.</span>
          </p>
          {/* === EXACT ORIGINAL TEXT (second paragraph) === */}
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Launched in August 2026, the eight‑month program engages around{" "}
            <span className="font-semibold text-slate-800">240 children, aged 8–14</span>{" "}
            from Junwani, Durg. Through weekly sessions led by the SFLWF coaching team,
            children participate in fun, structured activities that develop physical
            skills, coordination, communication, and teamwork.
          </p>
        </div>

        {/* Quick Stats */}
        {/* <div className="space-y-4 rounded-2xl bg-emerald-50/80 p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            At a Glance
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaUsers className="text-emerald-600" />
              <div>
                <p className="font-bold text-slate-800">120+</p>
                <p className="text-xs text-slate-500">Children enrolled</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-emerald-600" />
              <div>
                <p className="font-bold text-slate-800">8 Months</p>
                <p className="text-xs text-slate-500">Program duration</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaChild className="text-emerald-600" />
              <div>
                <p className="font-bold text-slate-800">Ages 8–14</p>
                <p className="text-xs text-slate-500">Target group</p>
              </div>
            </div>
          </div>
        </div> */}
      </motion.div>

      {/* ===== KEY BENEFITS ===== */}
      <motion.div variants={fadeUp}>
        <h2 className="mb-6 text-2xl font-bold text-slate-800 sm:text-3xl">
          What Children Gain
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Confidence", "Teamwork", "Leadership", "Healthy Habits"].map((benefit, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white/70 p-4 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <FaHeart />
              </div>
              <p className="font-semibold text-slate-800">{benefit}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ===== BEYOND THE PLAYING FIELD + QUOTE ===== */}
      <motion.div variants={fadeUp} className="rounded-2xl bg-white/80 p-6 shadow-sm sm:p-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-800 sm:text-3xl">
          Beyond the Playing Field
        </h2>
        {/* === EXACT ORIGINAL TEXT (third paragraph) === */}
        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
          Beyond the playing field, the program encourages children to learn about
          healthy living, hydration, mental wellbeing, discipline, and positive habits,
          while creating a safe space where they can express themselves, make friends,
          and discover their potential.
        </p>
        {/* === EXACT ORIGINAL QUOTE (with border) === */}
        <div className="mt-6 border-l-4 border-emerald-400/60 pl-4 italic text-slate-900">
          <p className="text-center font-bold">
            When children are given the opportunity to play, learn and lead —
            <br />
            they gain more than sporting skills — they gain the confidence to shape
            their own future.
          </p>
        </div>
      </motion.div>

      {/* ===== CTA ===== */}
      <motion.div variants={fadeUp} className="text-center">
  <Link
    href="/involved"
    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 px-8 py-3 font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
  >
    Support This Program
    <FaArrowRight />
  </Link>
</motion.div>
    </motion.div>
  );
}