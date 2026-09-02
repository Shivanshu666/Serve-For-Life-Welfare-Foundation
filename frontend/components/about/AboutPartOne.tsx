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
<section className="relative overflow-hidden bg-[#F1F4EC] px-6 pb-24 pt-16 mt-10 text-[#182D22] sm:px-8 lg:pb-28 lg:pt-20">
  {/* Background image – covers the entire section */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/PreHero.png"
      alt="Children playing sports"
      fill
      className="object-cover object-center opacity-20"
      priority
    />
  </div>

  {/* Content – sits on top of the image */}
  <div className="relative z-10 mx-auto max-w-6xl">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="max-w-4xl"
    >
      <h1 className="mt-6 max-w-4xl font-serif font-bold leading-[1.05] tracking-tight text-[#182D22]">
        <span className="text-2xl sm:text-4xl lg:text-5xl">Every child has</span>
        <br />
        <span className="text-5xl sm:text-7xl lg:text-8xl text-[#2F5D3A]">
          ‘Right to Play’.
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
                Play is development,
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
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80"
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
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
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

              <p className="mt-6 max-w-xl text-base leading-8 text-[#3c4237] sm:text-lg">
                In a world of screens and couches, we want children
                to look up, step outside, and simply come out and
                play. We give that energy somewhere to go — onto
                the court, into a game, toward a goal — and help
                every child channel it into a sense of purpose for
                themselves.
              </p>

              {/* Image inside text block */}
              <div className="mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80"
                  alt="Children running"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover shadow-md"
                />
              </div>
            </motion.div>

            {/* Transformations with image background? Keep transformations as is */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="flex flex-col gap-3"
            >
              {transformations.map((item) => (
                <motion.div
                  key={item.from}
                  variants={fadeUp}
                  className="flex items-center gap-3 border border-[#182D22]/10 bg-white px-5 py-4 font-mono text-xs sm:text-sm"
                >
                  <span className="text-[#8a8f80] line-through decoration-[#A9461E]">
                    {item.from}
                  </span>
                  <span className="text-[#A9461E]">→</span>
                  <span className="font-bold text-[#2F5D3A]">
                    {item.to}
                  </span>
                </motion.div>
              ))}
              {/* Add a small image below transformations */}
              <div className="mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80"
                  alt="Tennis action"
                  width={400}
                  height={300}
                  className="rounded-2xl object-cover shadow-md"
                />
              </div>
            </motion.div>
          </div>
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