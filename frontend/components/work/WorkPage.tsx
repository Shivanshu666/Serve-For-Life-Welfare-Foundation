"use client";

import { motion } from "framer-motion";
import Athletes from "@/components/home/Athletes";
import {
  FaChild,
  FaTrophy,
  FaHeart,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Programs() {
  return (
    <section className="relative overflow-hidden bg-slate-100 px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Darker background glows */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-emerald-200/30 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-lime-200/30 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ===== HEADER ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
     
          <h2 className="mt-5 text-4xl font-bold text-slate-800 sm:text-5xl">
            Creating Impact{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
              Through Sport
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Two flagship initiatives, driving change in our sports ecosystem.
          </p>
        </motion.div>

        {/* ===== PROGRAMS — SINGLE COLUMN, NO BORDERS ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mt-16 space-y-16"
        >
          {/* ——— Child Empowerment Program ——— */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-white/90 p-8 shadow-md transition hover:shadow-lg sm:p-10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-200/60 text-emerald-700">
                <FaChild className="text-xl" />
              </div>
              <div>
              
                <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                 SFLWF Child Empowerment School Program
                </h3>
              </div>
            </div>

            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              <p>
                The Child Empowerment School Program by Serve For Life Welfare Foundation (SFLWF)
                uses the power of sport and play to help children from underserved
                communities build <span className="font-semibold text-emerald-700">confidence</span>,{" "}
                <span className="font-semibold text-emerald-700">teamwork</span>,{" "}
                <span className="font-semibold text-emerald-700">leadership</span> and
                <span className="font-semibold text-emerald-700"> healthy habits.</span>
               
              </p>

              <p>
                Launched in August 2026, the eight‑month program engages around{" "}
                <span className="font-semibold text-slate-800">120 children, aged 8–12</span>{" "}
                from Junwani, Durg. Through weekly sessions led by the SFLWF coaching team,
                children participate in fun, structured activities that develop physical
                skills, coordination, communication, and teamwork.
              </p>

              <p>
                Beyond the playing field, the program encourages children to learn about
                healthy living, hydration, mental wellbeing, discipline, and positive habits,
                while creating a safe space where they can express themselves, make friends,
                and discover their potential.
              </p>

              <div className="border-l-4 text-center font-bold border-emerald-400/60 pl-4 italic text-slate-900">
                 When children are given the opportunity to play, learn and lead — 
                <br />'they gain more than sporting skills — they gain the confidence to shape
                their own future'.
              </div>
            </div>
          </motion.div>

          {/* ——— SET Athlete Sponsorship Program ——— */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-white/90 p-8 shadow-md transition hover:shadow-lg sm:p-10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-lime-200/60 text-lime-700">
                <FaTrophy className="text-xl" />
              </div>
              <div>
              
                <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                  SFLWF (SET) Athlete Sponsorship Program
                </h3>
              </div>
            </div>

            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              <p>
                The Serve For Life Welfare Foundation (SFLWF), through its{" "}
                <span className="font-semibold text-lime-700">SET Framework</span> —
              <span className="font-bold text-black"> Serve</span> <span className="font-bold text-black">• Empower</span> <span className="font-bold text-black">• Transform</span> — is committed to identifying, nurturing,
                and supporting talented young tennis players from economically
                under‑resourced backgrounds <span className="font-bold italic text-slate-900">who have the game but not the means. </span> 
              </p>

              <p>
                The SFLWF (SET) Athlete Sponsorship Program is designed to bridge this
                gap by providing deserving athletes with holistic support, enabling
                them to train, compete, and develop in a structured high‑performance
                environment.
              </p>

<Athletes/>
<div className="font-bold italic text-center text-slate-900">

              <p>
                
                At SFLWF, we believe that talent should never be limited by financial
                circumstances. <br />By investing in young athletes today, we are developing
                not only future champions in tennis but also confident, disciplined,
                and responsible individuals who will inspire the next generation.
              </p>
</div>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== CLOSING NOTE ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl rounded-2xl bg-slate-200/60 px-6 py-8">
            <FaHeart className="mx-auto mb-3 text-2xl text-emerald-500" />
            <p className="text-base text-slate-700 sm:text-lg">
              Both programs are rooted in the belief that sport can{" "}
              <span className="font-semibold text-emerald-700">transform lives</span>.
              <br />
              Every child, every athlete deserves the opportunity to dream and achieve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}