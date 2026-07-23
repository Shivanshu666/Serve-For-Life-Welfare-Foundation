"use client";
import {FaGlobeAsia} from "react-icons/fa"

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
  <section className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-8">
  {/* Background Glow */}
  <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-lime-100 blur-[160px]" />
  <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-green-100 blur-[160px]" />

  <div className="relative mx-auto max-w-7xl">
    {/* Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="inline-flex items-center rounded-full border border-lime-200 bg-lime-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-lime-700">
        Our Purpose
      </span>

      <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
        Tennis for{" "}
        <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
          ALL
        </span>
      </h2>

      <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
        To transform lives through tennis by making quality sports
        education accessible to every child, nurturing character,
        promoting inclusion, and creating opportunities beyond the
        court.
      </p>
    </motion.div>

    {/* Cards */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2"
    >
      {/* Mission */}
      <motion.div
        variants={fadeUp}
        className="rounded-3xl border border-lime-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-lime-300 hover:shadow-xl sm:p-8"
      >
        <h3 className="text-2xl font-bold text-lime-600">
          Our Mission
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          To transform lives through the power of sport by creating
          sustainable, inclusive, and structured sports development
          programs that empower children with opportunities to learn,
          grow, and succeed.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-lime-100 px-4 py-2 text-sm font-medium text-lime-700">
            Serve
          </span>

          <span className="rounded-full bg-lime-100 px-4 py-2 text-sm font-medium text-lime-700">
            Empower
          </span>

          <span className="rounded-full bg-lime-100 px-4 py-2 text-sm font-medium text-lime-700">
            Transform
          </span>
        </div>
      </motion.div>

      {/* Vision */}
      <motion.div
        variants={fadeUp}
        className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl sm:p-8"
      >
        <h3 className="text-2xl font-bold text-emerald-600">
          Our Vision
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          To create an inclusive society where every child,
          irrespective of socio-economic background, has access to
          quality sports education and the opportunity to realize
          their full potential through sport.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
          <FaGlobeAsia />
          <span>Sport as a pillar of education</span>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

  );
}