"use client";

import { motion } from "framer-motion";
import {
  FaHeart,
  FaChild,
  FaTrophy,
  FaHandsHelping,
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

const impactStats = [
  {
    icon: <FaChild />,
    value: "500+",
    label: "Youth Reached",
  },
  {
    icon: <FaTrophy />,
    value: "12",
    label: "Tournaments Supported",
  },
  {
    icon: <FaHandsHelping />,
    value: "40+",
    label: "Volunteers",
  },
  {
    icon: <FaGlobeAsia />,
    value: "8",
    label: "Partner Schools",
  },
];

export default function Promise() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FCFCFC] to-[#F7FBF7] py-24 px-6 sm:px-8 lg:px-12">

      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-lime-100 blur-[180px]" />

      <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-emerald-100 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Promise Heading */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-lime-100 to-emerald-100 text-4xl text-lime-600 shadow-lg">
            <FaHeart />
          </div>

          <span className="mt-8 inline-flex rounded-full border border-lime-200 bg-lime-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-lime-700">
            Our Promise
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Building Futures Through
            <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
              {" "}Tennis
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Serve For Life Welfare Foundation, we do far more than
            teach children how to play a sport. We help them build
            confidence, develop leadership, strengthen character,
            discover opportunity, and create a future filled with hope.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-lime-100 px-5 py-2 font-semibold text-lime-700">
              Serve
            </span>

            <span className="rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">
              Empower
            </span>

            <span className="rounded-full bg-teal-100 px-5 py-2 font-semibold text-teal-700">
              Transform
            </span>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-lime-200 bg-white p-8 shadow-xl shadow-lime-100/40">
            <p className="text-xl font-semibold text-slate-900 leading-relaxed">
              Changing Lives Through Tennis.
              <br />
              <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                Building Futures Through Sport.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Community Impact Cards */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >   {impactStats.map((item, index) => (
  <motion.div
    key={index}
    variants={fadeUp}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden rounded-3xl border border-lime-100 bg-white p-8 text-center shadow-lg shadow-lime-100/40 transition-all duration-500 hover:border-lime-300 hover:shadow-2xl hover:shadow-lime-200/40"
  >
    {/* Glow */}
    <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-lime-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

    <div className="relative z-10">
      {/* Icon */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-100 to-emerald-100 text-4xl text-lime-600 transition-transform duration-300 group-hover:scale-110">
        {item.icon}
      </div>

      {/* Number */}
      <h3 className="mt-6 text-4xl font-extrabold text-slate-900">
        {item.value}
      </h3>

      {/* Label */}
      <p className="mt-3 text-base font-medium text-slate-600">
        {item.label}
      </p>

      {/* Bottom Accent */}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-lime-400 to-emerald-500" />
    </div>
  </motion.div>
))}</motion.div>

      

      </div>
    </section>
  );
}