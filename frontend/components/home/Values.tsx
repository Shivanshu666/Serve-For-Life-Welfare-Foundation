"use client";

import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaTrophy,
  FaUsers,
  FaHeart,
  FaShieldAlt,
  FaGlobeAsia,
} from "react-icons/fa";

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
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const values = [
  {
    icon: <FaHandsHelping />,
    title: "Serve",
    desc: "We exist to serve children and communities by creating opportunities where none exist.",
  },
  {
    icon: <FaTrophy />,
    title: "Empower",
    desc: "We empower young people through sport by building confidence, resilience, and leadership.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Transform",
    desc: "Sport has the power to transform individuals, families, schools, and communities.",
  },
  {
    icon: <FaHeart />,
    title: "Respect",
    desc: "We foster a culture of respect – for oneself, for others, for diversity, and for the game.",
  },
  {
    icon: <FaUsers />,
    title: "Inclusion",
    desc: "Every child deserves an equal opportunity to participate regardless of background.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity",
    desc: "We uphold the highest standards of honesty, transparency, and ethical conduct.",
  },
];

export default function Values() {
  return (
 <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden bg-gradient-to-b from-[#F8FBF8] via-white to-[#FCFCFC]">

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
      className="text-center max-w-3xl mx-auto"
    >

      <span className="inline-flex items-center px-4 py-2 rounded-full bg-lime-100 border border-lime-200 text-lime-700 text-sm font-semibold tracking-widest uppercase">
        What We Stand For
      </span>

      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
        Our Core{" "}
        <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
          Values
        </span>
      </h2>

      <p className="mt-6 text-lg text-slate-600 leading-relaxed">
        Everything we do is guided by these core values that inspire
        our mission and shape the future of every child we support.
      </p>

    </motion.div>

    {/* Value Cards */}

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
    >

      {values.map((value, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          className="group relative overflow-hidden rounded-3xl border border-lime-100 bg-white p-7 shadow-lg shadow-lime-100/40 transition-all duration-500 hover:-translate-y-2 hover:border-lime-300 hover:shadow-2xl hover:shadow-lime-200/40"
        >

          {/* Glow */}
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-lime-100 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

          <div className="relative z-10">

            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-100 to-emerald-100 text-3xl text-lime-600 group-hover:scale-110 transition-transform duration-300">
              {value.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              {value.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {value.desc}
            </p>

          </div>

        </motion.div>
      ))}

    </motion.div>

  </div>

</section>
  );
}