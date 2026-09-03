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



export default function Promise() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FCFCFC] to-[#F7FBF7] py-12 px-6 sm:px-8 lg:px-12">

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
          {/* <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-lime-100 to-emerald-100 text-4xl text-lime-600 shadow-lg">
            <FaHeart />
          </div> */}

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
            
At Serve For Life Welfare Foundation, we do more than teach children how to play a sport - we help them build character, develop confidence, discover opportunity and create a future filled with possibility.

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

<div className="mx-auto mt-10 max-w-4xl rounded-3xl p-8 text-center shadow-xl shadow-slate-100/60">
  <p className="bg-gradient-to-r text-5xl from-red-500 via-blue-500 via-green-500 to-yellow-500 bg-[length:300%_auto] bg-clip-text font-bold leading-relaxed text-transparent animate-[gradientMove_4s_ease_infinite]">
    Changing Lives Through Tennis.
  </p>
</div>
        </motion.div>

        {/* Community Impact Cards */}

       

      

      </div>
    </section>
  );
}