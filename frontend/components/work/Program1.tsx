// components/Program1.tsx  ///
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  FaArrowRight,
  FaSearch,
  FaHandsHelping,
  FaSeedling,
  FaArrowUp,
} from "react-icons/fa";

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
          src="/images/program11.jpeg"
          alt="Child Empowerment Program"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-10 sm:left-10">
          <span className="inline-block rounded-full bg-emerald-500/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Child Development
          </span>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            SFLWF Child Empowerment School Program
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
            Building confidence, teamwork, and leadership — and finding <span className="font-bold italic">JOY</span> through sport.
          </p>
        </div>
      </motion.div>

      {/* ===== OVERVIEW + AT A GLANCE (SIDE BY SIDE) ===== */}
      <motion.div
        variants={fadeUp}
        className="mx-auto w-full"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {/* LEFT — Program Overview */}
          <div className="col-span-2 space-y-4">
            <h2 className="text-center text-2xl font-bold text-slate-800 sm:text-3xl">
              Program Overview
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              The Child Empowerment School Program by Serve For Life Welfare Foundation (SFLWF)
              uses the power of sport and play to help children from underserved
              communities build <span className="font-semibold text-emerald-700">confidence</span>,{" "}
              <span className="font-semibold text-emerald-700">teamwork</span>,{" "}
              <span className="font-semibold text-emerald-700">leadership</span> and
              <span className="font-semibold text-emerald-700"> healthy habits.</span>
            </p>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Launched in August 2026, the eight‑month program engages around{" "}
              <span className="font-semibold text-slate-800">240 children, aged 8–14</span>{" "}
              from Junwani, Durg. Through weekly sessions led by the SFLWF coaching team,
              children participate in fun, structured activities that develop physical
              skills, coordination, communication, and teamwork.
            </p>
          </div>

          {/* RIGHT — At a Glance */}
          <div className="space-y-4 rounded-2xl bg-lime-50/80 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lime-700">
              At a Glance
            </h3>

            <div className="space-y-4">
              {/* FIND */}
              <div className="flex items-start gap-3">
                <FaSearch className="mt-1 text-lime-600" />

                <div>
                  <p className="font-bold text-slate-800">FIND</p>

                  <p className="text-sm leading-relaxed text-slate-500">
                    Identify children from underserved communities who show talent,
                    potential, and a passion for sport.
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
                <FaSeedling className="mt-1 text-lime-600" />

                <div>
                  <p className="font-bold text-slate-800">GROW</p>

                  <p className="text-sm leading-relaxed text-slate-500">
                    Develop children through structured training, mentorship,
                    competitive exposure, and long-term development.
                  </p>
                </div>
              </div>

              {/* RISE */}
              <div className="flex items-start gap-3">
                <FaArrowUp className="mt-1 text-lime-600" />

                <div>
                  <p className="font-bold text-slate-800">RISE</p>

                  <p className="text-sm leading-relaxed text-slate-500">
                    Empower children to become confident, disciplined, and resilient
                    individuals who inspire their communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== KEY BENEFITS ===== */}
      <motion.div variants={fadeUp}>
        <h2 className="mt-5 text-center text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
          What the Program{' '}
          <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
            builds?
          </span>
        </h2>
      </motion.div>

      {/* ===== AT THE PLAYGROUND ===== */}
      <motion.div variants={fadeUp} className="rounded-2xl bg-white/80 p-6 shadow-sm sm:p-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-800 sm:text-3xl">
          At the Playground - Skill and Confidence
        </h2>
        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
          The program builds the confidence to try, fail, and try again—all while keeping the <span className="font-bold italic">JOY</span> of learning at its heart. Through the experience, children develop teamwork, respect, and the courage to speak up, express themselves, and believe in their own abilities.
        </p>
        <div className="mt-6 border-l-4 border-emerald-400/60 pl-4 italic text-slate-900">
          <p className="text-center font-bold">
            When children are given the opportunity to play, learn and lead —
            <br />
            they gain more than sporting skills — they gain the confidence to shape
            their own future.
          </p>
        </div>
      </motion.div>

      {/* ===== BEYOND THE PLAYGROUND ===== */}
      <motion.div variants={fadeUp} className="rounded-2xl bg-white/80 p-6 shadow-sm sm:p-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-800 sm:text-3xl">
          Beyond the Playground - Habits and Wellbeing
        </h2>
        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
          Beyond the playing field, the program encourages children to learn about
          healthy living, hydration, mental wellbeing, discipline, and positive habits,
          while creating a safe space where they can express themselves, make friends,
          and discover their potential.
        </p>
        <div className="mt-6 border-l-4 border-emerald-400/60 pl-4 italic text-slate-900">
          <p className="text-center font-bold">
            As the program continues through the year, SFLWF hopes these children carry its lessons far beyond the playing area – <br /> into their Schools, Families and Communities at large.
          </p>
        </div>
      </motion.div>

      {/* ===== CTA ===== */}
      <motion.div variants={fadeUp} className="text-center">
        <Link
          href="/involved"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 px-8 py-3 font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
        >
          Support this Program
          <FaArrowRight />
        </Link>
      </motion.div>
    </motion.div>
  );
}