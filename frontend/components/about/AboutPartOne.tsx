"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaQuoteLeft,
  FaSchool,
  FaChild,
  FaTrophy,
  FaHandsHelping,
  FaFutbol,
} from "react-icons/fa";

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

const stagger = {
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

const stats = [
  {
    icon: <FaSchool />,
    value: "90%",
    label: "Schools lack sports infrastructure",
  },

  {
    icon: <FaChild />,
    value: "₹2",
    label: "Average annual spend per child on sports",
  },

  {
    icon: <FaTrophy />,
    value: "1000+",
    label: "Children impacted",
  },

  {
    icon: <FaHandsHelping />,
    value: "40+",
    label: "Volunteers & Coaches",
  },
];

export default function AboutPartOne() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="
relative min-h-[65vh]
flex items-center justify-center
px-6 sm:px-8 lg:px-12
pt-32 pb-20
overflow-hidden
bg-gradient-to-b
from-[#F8FBF8]
via-white
to-[#FCFCFC]
"
      >
        <div
          className="
absolute -top-40 -right-40
h-96 w-96 rounded-full
bg-emerald-200/40
blur-[160px]
"
        />

        <div
          className="
absolute -bottom-40 -left-40
h-96 w-96 rounded-full
bg-lime-200/40
blur-[160px]
"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="
relative z-10
max-w-4xl
mx-auto
text-center
"
        >
          <h1
            className="
text-4xl
sm:text-5xl
lg:text-6xl
font-bold
leading-tight
text-slate-900
"
          >
            Every Child Has the
            <br />
            <span
              className="
bg-gradient-to-r
from-emerald-500
to-lime-500
bg-clip-text
text-transparent
"
            >
              Right to Play
            </span>
          </h1>

          <div className="mt-6 flex justify-center">
            <FaQuoteLeft
              className="
text-4xl
text-emerald-400/40
"
            />
          </div>

          <p
            className="
mt-6
text-slate-600
text-lg
sm:text-xl
max-w-3xl
mx-auto
leading-relaxed
"
          >
            Serve For Life Welfare Foundation is a purpose-driven, non-profit
            organization established with a simple yet powerful vision—to give
            back to sport and society by creating opportunities for every child
            to experience the transformative power of play.
          </p>

          <div
            className="
mt-10
flex
flex-wrap
justify-center
gap-4
"
          >
            <Link
              href="/get-involved"
              className="
px-8
py-3.5
rounded-full
bg-gradient-to-r
from-emerald-500
to-lime-500
text-white
font-semibold
shadow-lg
hover:scale-105
transition
flex
items-center
gap-2
"
            >
              Get Involved
              <FaArrowRight />
            </Link>

            <Link
              href="/programs"
              className="
px-8
py-3.5
rounded-full
border
border-slate-300
text-slate-700
hover:bg-slate-100
transition
"
            >
              Our Programs
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}

      <section
        className="
py-16
px-6
sm:px-8
lg:px-12
bg-[#F8FBF8]
"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={stagger}
            className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="
p-6
rounded-3xl
bg-white
border
border-emerald-100
shadow-lg
shadow-emerald-100/40
text-center
hover:-translate-y-2
transition
"
              >
                <div
                  className="
text-4xl
text-emerald-500
mb-3
flex
justify-center
"
                >
                  {stat.icon}
                </div>

                <h3
                  className="
text-3xl
font-bold
text-slate-900
"
                >
                  {stat.value}
                </h3>

                <p
                  className="
mt-2
text-sm
text-slate-600
"
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CHALLENGE ================= */}

      <section
        className="
py-20
px-6
sm:px-8
lg:px-12
bg-white
"
      >
        <div
          className="
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-12
items-center
"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span
              className="
text-emerald-600
font-semibold
tracking-widest
uppercase
text-sm
"
            >
              The Challenge
            </span>

            <h2
              className="
mt-3
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
text-slate-900
"
            >
              Why
              <span
                className="
text-emerald-500
"
              >
                Every Child
              </span>
              Needs Sport
            </h2>

            <p
              className="
mt-5
text-slate-600
leading-relaxed
"
            >
              Sport is not merely a recreational activity; it is essential for
              children's physical, emotional, social, and psychological
              development. It builds discipline, confidence, teamwork,
              leadership and resilience.
            </p>

            <p
              className="
mt-4
text-slate-600
leading-relaxed
"
            >
              Unfortunately millions of children across India still lack access
              to basic sports infrastructure, equipment and trained coaches.
            </p>

            <div
              className="
mt-6
p-5
rounded-2xl
bg-red-50
border
border-red-100
"
            >
              <p
                className="
text-red-600
text-sm
font-medium
"
              >
                ⚠️ Nearly 90% of schools lack adequate sports infrastructure and
                funding.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="
rounded-3xl
p-8
bg-gradient-to-br
from-emerald-50
to-lime-50
border
border-emerald-100
"
          >
            <div
              className="
flex
items-center
gap-4
mb-6
"
            >
              <FaFutbol
                className="
text-5xl
text-emerald-500
"
              />

              <h3
                className="
text-2xl
font-bold
text-slate-900
"
              >
                The Consequences
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                "Critical life skills development",
                "Improved mental well-being",
                "Increased school engagement",
                "Confidence building",
                "Social & emotional growth",
              ].map((item, index) => (
                <li
                  key={index}
                  className="
flex
items-center
gap-3
text-slate-600
"
                >
                  <span
                    className="
h-2
w-2
rounded-full
bg-emerald-500
"
                  />

                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
