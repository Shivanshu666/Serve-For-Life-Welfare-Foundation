
"use client";

import Link from "next/link";
// import { motion } from "framer-motion";
import { motion, type Variants } from "framer-motion";
import {
  FaArrowRight,
  FaFutbol,
  FaHeart,
  FaPeopleArrows,
} 
from "react-icons/fa";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
export default function AboutPartOne() {
  return (
    <>
      {/* ================= OUR STORY ================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FBF8] via-white to-[#FCFCFC] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-200/30 blur-[150px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-lime-200/30 blur-[150px]" />

        {/* Decorative Circle */}
        <div className="pointer-events-none absolute right-[8%] top-[18%] hidden h-32 w-32 rounded-full border border-emerald-100 lg:block" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-emerald-400" />

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
                Our Story
              </span>

              <span className="h-px w-10 bg-emerald-400" />
            </div>

           <h1 className="text-slate-700">
  <span className="block text-3xl font-bold leading-tight sm:text-4xl">
    Every Child Has the
  </span>

  <span className="mt-3 block bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl lg:text-7xl">
    Right to Play
  </span>
</h1>
{/* 
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Creating opportunities for children to discover the power of
              sport, purpose and play.
            </p> */}
          </motion.div>

          {/* Main Story Layout */}
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* LEFT — RIGHT TO PLAY CARD */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-8 shadow-xl shadow-emerald-100/40 sm:p-10">
                {/* Decorative Blur */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-200/30 blur-3xl" />

                {/* Icon */}
                <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-500 text-2xl text-white shadow-lg shadow-emerald-200">
                  <FaFutbol />
                </div>

                <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Our Belief
                </p>

                <h2 className="relative mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  The Right
                  <br />
                  <span className="bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent">
                    to Play.
                  </span>
                </h2>

                <p className="relative mt-5 leading-relaxed text-slate-600">
              Every child has a Right to Play. At Serve For Life Welfare Foundation, we believe sport isn't just recreation — it's a way to channel restless, negative energy into something purposeful and to help every child discover a sense of direction and purpose for themselves.
                </p>

                {/* RP Highlight */}
                <div className="relative mt-8 flex items-center gap-4 border-t border-emerald-100 pt-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-lg font-extrabold text-emerald-600">
                    R
                  </div>

                  <div className="h-px flex-1 bg-gradient-to-r from-emerald-300 to-transparent" />

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-100 text-lg font-extrabold text-lime-600">
                    P
                  </div>
                </div>

                <div className="relative mt-4 flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <span>Right</span>
                  <span>Play</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — STORY CONTENT */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="space-y-7"
            >
              <motion.div variants={fadeUp}>
                <p className="text-lg leading-8 text-slate-600">
                  <span className="font-bold text-slate-900">
                    Serve For Life Welfare Foundation
                  </span>{" "}
                  is a purpose-driven, non-profit organization established with
                  a simple yet powerful vision — to give back to sport and to
                  society by creating opportunities for every child to
                  experience the transformative power of play.
                </p>
              </motion.div>


              <motion.div variants={fadeUp}>
                <p className="leading-8 text-slate-600">
              In a world of screens and couches, we want children to look up, step outside, and simply come out and play. Because sport shapes how children grow physically, emotionally and socially — building discipline, resilience, confidence and leadership along the way.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid gap-4 pt-2 sm:grid-cols-2"
              >
                {/* Card 1 */}
                <div className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <FaHeart />
                  </div>

                  <h3 className="font-bold text-slate-900">
                    Beyond Recreation
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Building confidence, resilience and a sense of purpose.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-50 text-lime-600 transition group-hover:bg-lime-500 group-hover:text-white">
                    <FaPeopleArrows />
                  </div>

                  <h3 className="font-bold text-slate-900">
                    Stronger Communities
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Helping children grow together through teamwork and play.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* VISION STRIP */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeUp}
  className="relative mt-16 rounded-2xl border border-emerald-100/70 bg-emerald-50/40 px-6 py-8 text-center sm:px-8 sm:py-10"
>
  {/* Our Vision — big with red bottom line */}
  <div className="relative inline-block">
    <p className="text-2xl font-bold uppercase tracking-[0.15em] text-slate-800 sm:text-3xl">
      Our Vision
    </p>
    <span className="absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-red-400" />
  </div>

  <h2 className="mx-auto mt-9 max-w-4xl text-base font-medium leading-relaxed text-slate-700 sm:text-lg lg:text-xl">
    We envision a future where{" "}
    <span className="font-bold bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent">
      play
    </span>{" "}
    is as much a part of a{" "}
    <span className="font-bold text-emerald-500">child's education</span>{" "}
    as academics, regardless of a school's economic circumstances.{" "}
    We're not just building{" "}
    <span className="font-bold text-slate-900">athletes</span> — we're building{" "}
    <span className="font-bold bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent">
      healthier children, stronger communities, and brighter futures
    </span>
    , one child at a time.
  </h2>

  <Link
    href="/get-involved"
    className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:scale-105 hover:shadow-md"
  >
    Be Part of the Journey
    <FaArrowRight className="text-xs" />
  </Link>
</motion.div>
        </div>
      </section>
    </>
  );
}
