"use client";

import { motion, type Variants } from "framer-motion";
import {
  FaHandsHelping,
  FaRocket,
  FaLeaf,
} from "react-icons/fa";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export default function Philosophy() {
  const pillars = [
    {
      title: "Serve",
      tagline: "Purpose in Action",
      icon: FaHandsHelping,
      gradient: "from-emerald-400 to-teal-400",
      glowBg: "bg-emerald-200/60",
      accentText: "text-emerald-600",
      borderHover: "group-hover:border-emerald-300",
      description:
        "We exist to serve children and communities by creating opportunities where none exist — ensuring every child has the chance to play, learn, grow and thrive.",
    },

    {
      title: "Empower",
      tagline: "Unlocking Potential",
      icon: FaRocket,
      gradient: "from-lime-400 to-emerald-400",
      glowBg: "bg-lime-200/60",
      accentText: "text-lime-600",
      borderHover: "group-hover:border-lime-300",
      description:
        (<>We use sport to build more than athletes— <br />we build confidence, resilience, leadership, discipline, and life skills for a brighter future.</>),
    },

    {
      title: "Transform",
      tagline: "Enduring Impact",
      icon: FaLeaf,
      gradient: "from-teal-400 to-cyan-400",
      glowBg: "bg-teal-200/60",
      accentText: "text-teal-600",
      borderHover: "group-hover:border-teal-300",
      description:
        "We believe sport has the power to transform individuals, families, schools, and communities — creating lasting social impact far beyond the Field of Play.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 text-slate-900 sm:py-20">
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#a7f3d0_1px,transparent_1px),linear-gradient(to_bottom,#a7f3d0_1px,transparent_1px)]
          bg-[size:4rem_4rem]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
          opacity-20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          h-[500px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-emerald-300/30
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-teal-300/25
          blur-[120px]
        "
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-300
              bg-emerald-50
              px-4
              py-1.5
              text-lg
              font-semibold
              uppercase
              tracking-wider
              text-emerald-700
              backdrop-blur-md
            "
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />

            Core Philosophy
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-900
              sm:text-6xl
            "
          >
            The{" "}

            <span
              className="
                bg-gradient-to-r
                from-emerald-500
                via-teal-400
                to-lime-500
                bg-clip-text
                text-transparent
              "
            >
              SET{" "}
              <span className="text-slate-900">
                Framework
              </span>
            </span>
          </h2>

          {/* Subtitle */}

          <p className="mt-5 text-lg font-bold leading-relaxed text-slate-800">
            Serve · Empower · Transform
          </p>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            — Is the philosophy at the heart of every SFLWF program.
            <br />
            The three pillars behind everything we do.
          </p>
        </motion.div>

        {/* ================= THREE PILLARS ================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-3xl
                  border
                  border-emerald-100
                  bg-white
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:bg-white
                  hover:shadow-2xl
                  hover:shadow-emerald-200/60
                  ${pillar.borderHover}
                `}
              >
                {/* Hover Glow */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    ${pillar.glowBg}
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:scale-150
                  `}
                />

                <div className="relative z-10">

                  {/* ================= TOP ROW ================= */}

                  <div className="flex items-center justify-between">

                    {/* Icon */}

                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        ${pillar.gradient}
                        text-2xl
                        text-white
                        shadow-lg
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      `}
                    >
                      <Icon />
                    </div>

                    {/* Number */}

                    <span
                      className="
                        font-mono
                        text-3xl
                        font-black
                        tracking-tighter
                        text-emerald-100
                        transition-colors
                        duration-300
                        group-hover:text-emerald-200
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* ================= TITLE ================= */}

                  <div className="mt-8">

                    <span
                      className={`
                        text-xs
                        font-bold
                        uppercase
                        tracking-widest
                        ${pillar.accentText}
                      `}
                    >
                      {pillar.tagline}
                    </span>

                    <h3
                      className="
                        mt-1
                        text-3xl
                        font-bold
                        tracking-tight
                        text-slate-900
                      "
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  {/* ================= DESCRIPTION ================= */}

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-relaxed
                      text-slate-600
                      transition-colors
                      group-hover:text-slate-700
                    "
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}