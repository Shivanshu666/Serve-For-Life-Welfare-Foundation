
"use client";

import Link from "next/link";
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
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F1F4EC] px-6 pb-24 pt-16 mt-10 text-[#182D22] sm:px-8 lg:pb-28 lg:pt-20">

  <div className="relative z-10 mx-auto max-w-6xl">
    {/* Hero Content */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="max-w-4xl"
    >

      {/* <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#2F5D3A]">
        <span className="h-px w-6 bg-[#2F5D3A]" />
        Our Story
      </div> */}

      <h1 className="mt-6 max-w-4xl font-serif text-3xl font-bold leading-[1.05] tracking-tight text-[#182D22] sm:text-6xl lg:text-7xl">
        Every child has{" "} <br />
       <span className="text-4xl text-[#2F5D3A]">
          'Right to Play'.
        
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
          BELIEF
      ===================================================== */}

      <section className="border-b border-[#182D22]/10 bg-[#F1F4EC] px-6 py-24 sm:px-8 lg:py-28">

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


            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >

              <motion.p
                variants={fadeUp}
                className="max-w-2xl text-base leading-8 text-[#3c4237] sm:text-lg"
              >
                Every child has a Right to Play. At Serve For Life
                Welfare Foundation, we believe sport isn't just
                recreation — it's a way to channel restless,
                negative energy into something purposeful and to
                help every child discover a sense of direction and
                purpose for themselves.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-[#3c4237] sm:text-lg"
              >
                Sport shapes how children grow physically,
                emotionally and socially — building along the way;
              </motion.p>


              {/* Qualities */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-2"
              >
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
          RIGHT TO PLAY
      ===================================================== */}



      {/* =====================================================
          OFF THE COUCH
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

            </motion.div>


            {/* Transformations */}
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

                  <span className="text-[#A9461E]">
                    →
                  </span>

                  <span className="font-bold text-[#2F5D3A]">
                    {item.to}
                  </span>

                </motion.div>
              ))}

            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          VISION
      ===================================================== */}


      {/* =====================================================
          VISION STATEMENT
      ===================================================== */}

      <section className="bg-[#F1F4EC] px-6 py-20 sm:px-8">

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
            <span className="text-[#2F5D3A]">
              play
            </span>{" "}
            is as much a part of a{" "}
            <span className="text-[#2F5D3A]">
              child's education
            </span>{" "}
            as academics, regardless of a child's economic
            background.

          </p>

          <p className="mt-5 max-w-4xl text-center text-base leading-8 text-[#4a5045]">
            We're not just building{" "}
            <strong className="text-[#182D22]">
              athletes
            </strong>{" "}
            — we're building{" "}
            <strong className="text-[#2F5D3A]">
              healthier children, stronger communities with 
              brighter futures.
            </strong>
            
          </p>

        </motion.div>

      </section>




      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      {/* <section className="bg-[#F1F4EC] px-6 py-20 text-center sm:px-8">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl"
        >

          <div className="mx-auto flex h-14 w-14 items-center justify-center bg-[#2F5D3A] text-xl text-[#CBDB4E]">
            <FaRunning />
          </div>

          <h2 className="mt-7 font-serif text-3xl font-semibold text-[#182D22] sm:text-4xl">
            Be Part of the Journey
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#4a5045] sm:text-base">
            Together, we can create more opportunities for
            children to play, learn, grow and discover their
            purpose.
          </p>

          <Link
            href="/get-involved"
            className="mt-7 inline-flex items-center gap-3 bg-[#2F5D3A] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#F1F4EC] transition hover:bg-[#A9461E]"
          >
            Be Part of the Journey
            <FaArrowRight />
          </Link>

        </motion.div>

      </section> */}



    </main>
  );
}

