
// components/Program3.tsx
"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FaTrophy, FaHandsHelping } from "react-icons/fa";

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

export default function Program3() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
      className="space-y-12"
    >
      {/* ===== HERO BANNER ===== */}
      <motion.div
        variants={fadeUp}
        className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg sm:h-[400px]"
      >
        <Image
          src="/program/shoesfB.png"
          alt="Shoes for ALL Campaign"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-10 sm:left-10">
          <span className="inline-block rounded-full bg-lime-500/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Access to Sport
          </span>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Shoes for ALL
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
            One Pair. One Child. A Whole New Begining
          </p>
        </div>
      </motion.div>

      {/* ===== OVERVIEW + STATS ===== */}
      <motion.div
        variants={fadeUp}
        className="grid gap-8 md:grid-cols-3"
      >
        <div className="col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            Program Overview
          </h2>

          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            The Serve For Life{" "}
            <span className="font-semibold text-lime-700">
              “Shoes for ALL” campaign
            </span>{" "}
            aims to ensure that every child has access to appropriate sports
            shoes so that lack of equipment does not become a barrier to
            participation in sport.
          </p>

          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Providing children with{" "}
            <span className="font-bold text-slate-900">
              proper footwear
            </span>{" "}
            creates a safer, more comfortable, and inclusive environment for
            them to play, while encouraging greater interest and participation
            in sports.
          </p>

          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            As part of this initiative,{" "}
            <span className="font-semibold text-lime-700">SFLWF</span> aims to
            provide{" "}
            <span className="font-bold text-slate-900">
              500 pairs of sports shoes
            </span>{" "}
            to children in schools where the Child Empowerment Sports School
            Program is being implemented.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4 rounded-2xl bg-lime-50/80 p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-lime-700">
            At a Glance
          </h3>

          <div className="space-y-4">
            {/* ACCESS */}
            <div className="flex items-start gap-3">
              <FaTrophy className="mt-1 text-lime-600" />

              <div>
                <p className="font-bold text-slate-800">ACCESS</p>

                <p className="text-sm leading-relaxed text-slate-500">
                  Ensure every child has access to appropriate sports shoes for
                  participation in physical activities.
                </p>
              </div>
            </div>

            {/* SAFETY */}
            <div className="flex items-start gap-3">
              <FaHandsHelping className="mt-1 text-lime-600" />

              <div>
                <p className="font-bold text-slate-800">SAFETY</p>

                <p className="text-sm leading-relaxed text-slate-500">
                  Provide proper footwear to create a safer and more
                  comfortable environment for children to play.
                </p>
              </div>
            </div>

            {/* INCLUSION */}
            <div className="flex items-start gap-3">
              <FaTrophy className="mt-1 text-lime-600" />

              <div>
                <p className="font-bold text-slate-800">INCLUSION</p>

                <p className="text-sm leading-relaxed text-slate-500">
                  Reduce equipment-related barriers and create equal
                  opportunities for children to participate in sports.
                </p>
              </div>
            </div>

            {/* 500 PAIRS */}
            <div className="flex items-start gap-3">
              <FaHandsHelping className="mt-1 text-lime-600" />

              <div>
                <p className="font-bold text-slate-800">500 PAIRS</p>

                <p className="text-sm leading-relaxed text-slate-500">
                  Aim to provide 500 pairs of sports shoes to children in
                  schools implementing the <span className="text-black font-black">Child Empowerment School
                  Program</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== FINAL QUOTE ===== */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl bg-white/80 p-6 shadow-sm sm:p-8"
      >
        <div className="text-center font-bold italic text-slate-900">
          <p>
            Every child deserves the Right Shoes to Play. <br /> With the “Shoes for ALL” Campaign, we aim to remove
            equipment barriers and help children take every step towards a
            healthier, more active future.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

