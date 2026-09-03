"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  FaArrowRight,
  FaFutbol,
  FaHeart,
  FaPeopleArrows,
  FaSchool,
  FaRunning,
} from "react-icons/fa";

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
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
      staggerChildren: 0.15,
    },
  },
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AboutPartOne() {
  const qualities = [
    "Discipline",
    "Resilience",
    "Confidence",
    "Teamwork",
    "Leadership",
    "Healthy Lifestyles",
  ];

  const transformations = [
    {
      from: "Screen Time",
      to: "Play Time",
    },
    {
      from: "Idle Energy",
      to: "Purposeful Play",
    },
    {
      from: "Restlessness",
      to: "Resilience",
    },
    {
      from: "Negative Energy",
      to: "A Sense of Purpose",
    },
  ];

  return (
    <main className="bg-[#F1F4EC] text-[#1E231C]">

      {/* =====================================================
          HERO – with background image
      ===================================================== */}
<section className="relative mt-10 min-h-[600px] overflow-hidden bg-[#F1F4EC] px-6 pb-24 pt-16 text-[#182D22] sm:min-h-[650px] sm:px-8 lg:min-h-[700px] lg:pb-28 lg:pt-20">

  {/* Background Image - Full Section */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/PreHero.jpeg"
      alt="Children playing sports"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />

    {/* Image Overlay */}
    <div className="absolute inset-0 bg-[#F1F4EC]/70" />
  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto flex min-h-[500px] max-w-6xl items-center sm:min-h-[550px] lg:min-h-[600px]">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="max-w-4xl"
    >
      <h1 className="mt-6 max-w-4xl font-serif font-bold leading-[1.05] tracking-tight text-[#182D22]">
        <span className="text-2xl sm:text-4xl lg:text-5xl">
          Every child has
        </span>

        <br />

        <span className="text-5xl text-[#2F5D3A] sm:text-7xl lg:text-8xl">
          ‘Right to Play’
        </span>

        <span className="text-2xl text-[#2F5D3A]">
          ■
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-base leading-8 text-[#182D22]/75 sm:text-lg">
        Serve For Life Welfare Foundation is a purpose-driven
        non-profit organization established with a simple yet
        powerful vision — to give back to sport and to society
        by creating opportunities for every child to experience
        the transformative power of play.
      </p>
    </motion.div>
  </div>
</section>

      {/* =====================================================
          BELIEF – with image next to text
      ===================================================== */}

      <section className="border-b border-[#182D22]/10 bg-white px-6 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-24">
            {/* Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-[#2F5D3A]">
                <span className="h-px w-6 bg-[#2F5D3A]" />
                What We Believe
              </div>
              <h2 className="mt-5 max-w-md font-serif text-4xl font-semibold leading-tight text-[#182D22] sm:text-5xl">
                Playing is development,
                <br />
                not a break from it.
              </h2>
            </motion.div>

            {/* Content + Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="max-w-2xl text-base leading-8 text-[#3c4237] sm:text-lg">
                Every child has a <span>
  <span className="font-bold text-black">'R</span>ight to <span className="font-bold text-black">P</span>lay'
</span>. At Serve For Life
                Welfare Foundation, we believe sport isn't just
                recreation — it's a way to channel restless,
                negative energy into something purposeful and to
                help every child discover a sense of direction and
                purpose for themselves.
              </motion.p>

              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-[#3c4237] sm:text-lg">
                Sport shapes how children grow physically,
                emotionally and socially — building along the way;
              </motion.p>

              {/* Image inserted here */}
              <motion.div variants={fadeUp} className="mt-8">
                <Image
                  src="/images/About2.jpeg"
                  alt="Kids playing tennis"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover shadow-md"
                />
              </motion.div>

              {/* Qualities */}
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
                {qualities.map((quality) => (
                  <span
                    key={quality}
                    className="border border-[#182D22]/15 bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-[#2F5D3A]"
                  >
                    {quality}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OFF THE COUCH – with image and transformations
      ===================================================== */}

    <section className="border-b border-[#182D22]/10 bg-[#EAEEE2] px-6 py-24 sm:px-8 lg:py-28">
  <div className="mx-auto max-w-6xl">

    {/* ================= TOP: LEFT + RIGHT ================= */}
    <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">

      {/* ================= LEFT SIDE ================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="flex flex-col justify-center"
      >
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-[#2F5D3A]">
          <span className="h-px w-6 bg-[#2F5D3A]" />
          From Restless to Purposeful
        </div>

        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#182D22] sm:text-5xl">
          Screens down,
          <br />
          Shoes on.
        </h2>

        <p className="mt-6 text-base leading-8 text-[#3c4237] sm:text-lg">
          In a world of screens and couches, we want children
          to look up, step outside, and simply come out and
          play. We give that energy somewhere to go — onto
          the court, into a game, toward a goal — and help
          every child channel it into a sense of purpose for
          themselves.
        </p>
      </motion.div>

      {/* ================= RIGHT SIDE ================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="flex flex-col justify-center gap-4"
      >
        {transformations.map((item) => (
          <motion.div
            key={item.from}
            variants={fadeUp}
            className="
              flex
              items-center
              gap-4
              border
              border-[#182D22]/10
              bg-white
              px-6
              py-5
              font-mono
              text-sm
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
              sm:text-base
            "
          >
            <span className="text-[#8a8f80] line-through decoration-[#A9461E]">
              {item.from}
            </span>

            <span className="text-lg text-[#A9461E]">
              →
            </span>

            <span className="font-bold text-[#2F5D3A]">
              {item.to}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* ================= BOTTOM: FULL WIDTH IMAGE ================= */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mt-14 w-full"
    >
      <Image
        src="/images/About1.jpeg"
        alt="Children playing and participating in sports"
        width={1200}
        height={600}
        className="
          h-full
          w-full
          rounded-2xl
          object-cover
          shadow-md
          sm:h-full
          lg:h-full
        "
      />
    </motion.div>

  </div>
</section>

      {/* =====================================================
          VISION STATEMENT – with background image
      ===================================================== */}

      <section className="relative bg-white px-6 py-20 sm:px-8 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f6ef?w=1200&q=80"
            alt="Sports facility"
            fill
            className="object-cover"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto max-w-5xl border-l-4 border-[#CBDB4E] pl-6 sm:pl-10"
        >
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#2F5D3A]">
            Our Future
          </div>

          <p className="mt-5 font-serif text-2xl font-medium leading-relaxed text-[#182D22] sm:text-3xl">
            We envision a future where{" "}
            <span className="text-[#2F5D3A]">play</span> is as much a part of a{" "}
            <span className="text-[#2F5D3A]">child's education</span> as academics,
            regardless of a child's economic background.
          </p>

          <p className="mt-5 max-w-4xl text-center text-base leading-8 text-[#4a5045]">
            We're not just building{" "}
            <strong className="text-[#182D22]">athletes</strong> — we're building{" "}
            <strong className="text-[#2F5D3A]">
              healthier children, stronger communities with brighter futures.
            </strong>
          </p>

          {/* Additional image for vision */}
          <div className="mt-8">
            <Image
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80"
              alt="Children playing together"
              width={800}
              height={400}
              className="rounded-2xl object-cover shadow-md"
            />
          </div>
        </motion.div>
      </section>

 

    </main>
  );
}