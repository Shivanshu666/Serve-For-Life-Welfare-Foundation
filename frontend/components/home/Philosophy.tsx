"use client";

import { motion } from "framer-motion";
import { FaHandsHelping, FaRocket, FaLeaf, FaArrowRight, FaSparkles } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

export default function Philosophy() {
  const pillars = [
    {
      title: "Serve",
      tagline: "Purpose in Action",
      icon: FaHandsHelping,
      gradient: "from-emerald-500 to-teal-500",
      glowBg: "bg-emerald-500/10",
      accentText: "text-emerald-600 dark:text-emerald-400",
      borderHover: "group-hover:border-emerald-500/50",
      description:
        "We exist to serve children and communities by creating opportunities where none exist — ensuring every child has the chance to play, learn, and grow.",
    },
    {
      title: "Empower",
      tagline: "Unlocking Potential",
      icon: FaRocket,
      gradient: "from-lime-500 to-emerald-500",
      glowBg: "bg-lime-500/10",
      accentText: "text-lime-600 dark:text-lime-400",
      borderHover: "group-hover:border-lime-500/50",
      description:
        "We empower young people through sport by building confidence, resilience, leadership, discipline, and the life skills that prepare them for lifelong success.",
    },
    {
      title: "Transform",
      tagline: "Enduring Impact",
      icon: FaLeaf,
      gradient: "from-teal-500 to-cyan-500",
      glowBg: "bg-teal-500/10",
      accentText: "text-teal-600 dark:text-teal-400",
      borderHover: "group-hover:border-teal-500/50",
      description:
        "We believe sport has the power to transform individuals, families, schools, and communities — creating lasting social impact far beyond the playing field.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 text-slate-100">
      {/* Background Gradients & Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-400 uppercase backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Core Philosophy
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            The{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 bg-clip-text text-transparent">
              SET <span className="text-white">Framework</span>
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Serve · Empower · Transform
          </p>
             <p className="mt-5 text-lg leading-relaxed text-slate-400">
            — Is the Philosophy at the heart of every SFLWF program. <br /> The Three Pillars Behind Everything We Do.
          </p>
        </motion.div>

        {/* 3 Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-emerald-950/50 ${pillar.borderHover}`}
              >
                {/* Ambient dynamic hover glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full ${pillar.glowBg} blur-3xl transition-all duration-500 group-hover:scale-150`}
                />

                <div>
                  {/* Top metadata row */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.gradient} text-2xl text-slate-950 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon />
                    </div>
                    <span className="font-mono text-3xl font-black tracking-tighter text-slate-800 transition-colors duration-300 group-hover:text-slate-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-8">
                    <span className={`text-xs font-bold tracking-widest uppercase ${pillar.accentText}`}>
                      {pillar.tagline}
                    </span>
                    <h3 className="mt-1 text-3xl font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                    {pillar.description}
                  </p>
                </div>

   
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Tagline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-20 border-t border-slate-800/60 pt-8 text-center"
        >
          <p className="text-sm text-slate-400">
            <span className="font-semibold text-emerald-400">SFLWF</span> —{" "}
            <span className="italic text-slate-300">Serving, Empowering, Transforming</span>{" "}
            communities through the power of sport.
          </p>
          <p className="mt-2 text-xs uppercase tracking-widest text-slate-600">
            © 2026 Serve For Life Welfare Foundation
          </p>
        </motion.div>
      </div>
    </section>
  );
}