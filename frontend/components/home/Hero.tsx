"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20 overflow-hidden bg-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-emerald-50/40 -z-10" />

      {/* Ambient Glow — soft, professional */}
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-emerald-100/60 blur-[160px]" />
      <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-green-50 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center lg:text-left"
        >

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-sm font-semibold tracking-wider uppercase mb-5"
          >
            Sport For ALL
          </motion.span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="text-slate-900">
              Changing Lives
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-500 bg-clip-text text-transparent">
              Through Sport
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-slate-600 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Empowering under resoured children an Chattishgarh Durg/Bhilai through free coaching,
            mentorship, and equipment — on and off the court.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              href="/getInvolved"
              className="px-8 py-3.5 rounded-full bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Get Involved
              <FaArrowRight className="text-sm" />
            </Link>

            <Link
              href="/about"
              className="px-8 py-3.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Free Coaching
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Mentorship
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Equipment
            </div>
          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">

            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-100/70 via-green-50/70 to-emerald-100/70 blur-[60px]" />

            {/* Decorative Ring */}
            <div className="absolute inset-3 rounded-full border border-emerald-200" />

            {/* Main Circle — now holding the tennis photo */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-[0_25px_70px_rgba(16,185,129,0.25)] ring-4 ring-white">

              {/* Photo */}
              <Image
                src="/images/tennis-hero.jpg"
                alt="Young athlete playing tennis with Apex Tennis Foundation"
                fill
                priority
                sizes="(min-width: 1024px) 450px, (min-width: 640px) 384px, 288px"
                className="object-cover"
              />

              {/* Emerald tint overlay — keeps it on-brand instead of a raw photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 via-green-500/10 to-emerald-900/40 mix-blend-multiply" />

              {/* Soft inner ring for polish */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/40" />
            </div>

            {/* Floating Bubble 1 */}
            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-emerald-200/60 blur-xl"
            />

            {/* Floating Bubble 2 */}
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-green-200/50 blur-2xl"
            />

            {/* Small Floating Dot */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-12 left-8 h-5 w-5 rounded-full bg-emerald-400 shadow-md"
            />

            {/* Small Floating Dot */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-14 right-10 h-3 w-3 rounded-full bg-green-600"
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
}