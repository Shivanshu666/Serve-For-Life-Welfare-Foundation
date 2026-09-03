"use client";

import { FaGlobeAsia, FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const stagger = {
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

export default function Purpose() {
  return (
    <section className="relative overflow-hidden bg-white py-5 px-4 sm:px-6 lg:px-8">
      {/* Background Glow — soft and layered */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-lime-100/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-emerald-100/20 blur-[140px]" />

      {/* Decorative tennis-ball inspired floating blobs */}
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-16 w-16 rounded-full bg-lime-200/30 blur-2xl" />
      <div className="pointer-events-none absolute left-[5%] bottom-[30%] h-20 w-20 rounded-full bg-emerald-200/30 blur-2xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* ===== HEADER ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-5xl text-center"
        >
                 <span className="inline-flex text-4xl items-center rounded-full border border-lime-200 bg-lime-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-lime-700">
            Our Purpose
          </span>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-xl">
            To transform lives through sport by making quality sports education
            accessible to every child — nurturing character, promoting inclusion,
            and creating opportunities that extend far beyond the play grounds.
          </p>

      
        </motion.div>

        {/* ===== CARDS GRID ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12"
        >
          {/* ——— MISSION CARD ——— */}
          <motion.div
            variants={fadeUp}
            className="group relative rounded-3xl border border-lime-200/60 bg-gradient-to-br from-white via-lime-50/30 to-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-lime-300 hover:shadow-xl sm:p-10"
          >
            {/* Decorative accent blob */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lime-200/20 blur-3xl" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-400 text-2xl text-white shadow-lg shadow-lime-200/50">
                <FaBullseye />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="h-1 w-10 rounded-full bg-lime-400" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-600">
                     Mission
                  </span>
                </div>
                <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Sustainable, Inclusive, Structured Sport - for ALL
                </h3>
              </div>
            </div>

            <p className="relative mt-5 text-lg leading-relaxed text-slate-600 sm:text-lg">
          Create inclusive, structured and sustainable opportunities for children to play, learn, grow and thrive through sport. Through our <span className="font-bold text-black">SET</span> framework—<span className="font-bold text-black">Serve, Empower, Transform,</span> we use sport to <span className="font-bold italic">build confidence, character, skills and pathways to a better future </span> .
            </p>

            

   
          </motion.div>

          {/* ——— VISION CARD ——— */}
          <motion.div
            variants={fadeUp}
            className="group relative rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white via-emerald-50/30 to-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl sm:p-10"
          >
            {/* Decorative accent blob */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-200/20 blur-3xl" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 text-2xl text-white shadow-lg shadow-emerald-200/50">
                <FaEye />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="h-1 w-10 rounded-full bg-emerald-400" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    Vision
                  </span>
                </div>
                <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  An Inclusive Society Built Through Sport
                </h3>
              </div>
            </div>

            <p className="relative mt-5 text-lg leading-relaxed text-slate-600 sm:text-lg">
        A future where every child, regardless of background, has access to quality sport and the opportunity to realise their potential - creating <span className="font-bold italic">healthier individuals, stronger communities and a more equitable society</span> .

            </p>

       
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}