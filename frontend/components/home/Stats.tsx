// components/Stats.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ---------- Data ----------
const statsData = [
  {
    number: "240",
    suffix: "+",
    primary: "Children",
    secondary: "Empowered",
    color: "#000000",
  },
  {
    number: "03",
    suffix: "",
    primary: "Schools",
    secondary: "Reached",
    color: "#000000",
  },
  {
    number: "04",
    suffix: "",
    primary: "Programs",
    secondary: "Ongoing",
    color: "#000000",
  },
];

// ---------- CountUp Component ----------
function CountUp({
  target,
  duration = 2,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const startValue = 0;
    const endValue = target;

    let animationFrame: number;

    const updateCount = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;

      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic animation
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = Math.floor(
        startValue + (endValue - startValue) * eased
      );

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

// ---------- Animation Variants ----------
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

// ---------- Component ----------
export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-white ">
      <div className="relative z-10 mx-auto flex max-w-7xl justify-center px-6 sm:px-8">

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={stagger}
          className="
            grid
            w-full
            max-w-6xl
            grid-cols-1
            justify-items-center
            gap-10
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {statsData.map((stat, idx) => {
            const numericTarget = parseInt(stat.number, 10);

            return (
              <div
                key={idx}
                className="relative flex w-full justify-center"
              >
                {/* VERTICAL DIVIDER (only between items, lg and up) */}
                {idx > 0 && (
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -left-5
                      top-1/2
                      hidden
                      h-24
                      w-3
                      -translate-y-1/2
                      bg-gradient-to-b
                      from-transparent
                      via-slate-300
                      to-transparent
                      lg:block
                    "
                  />
                )}

                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    relative
                    w-full
                    max-w-sm
                    overflow-hidden
                    rounded-3xl
                    p-8
                    text-center
                    sm:p-10
                  "
                >
                  {/* Content */}
                  <div className="relative z-10">

                    {/* BIG NUMBER */}
                    <h3
                      className="
                        text-4xl
                        font-black
                        leading-none
                        tracking-tight
                        sm:text-5xl
                      "
                      style={{
                        color: stat.color,
                      }}
                    >
                      <CountUp
                        target={numericTarget}
                        duration={2}
                      />
                      {stat.suffix}
                    </h3>

                    {/* PRIMARY TEXT */}
                    <p
                      className="
                        mt-5
                        text-xl
                        font-bold
                        text-slate-800
                        sm:text-2xl
                      "
                    >
                      {stat.primary}
                    </p>

                    {/* SECONDARY TEXT */}
                    <p
                      className="
                        mt-1
                        text-lg
                        font-medium
                        text-slate-500
                        sm:text-xl
                      "
                    >
                      {stat.secondary}
                    </p>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
      
{/* <section className="bg-white py-20">
  <div className="mx-auto max-w-6xl px-6">

 
    <div className="mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
        Find Us
      </p>

      <h2 className="mt-2 text-4xl font-bold text-gray-800 md:text-5xl">
        Our Location
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-gray-500">
        Visit Serve For Life Foundation and be a part of our journey.
      </p>

      <div className="mx-auto mt-4 h-0.5 w-[80px] bg-emerald-500" />
    </div>

    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">

    
      <iframe
        src="https://www.google.com/maps?q=21.203934480489526,81.28172167504896&t=k&z=16&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        title="Serve For Life Foundation Satellite Location"
      />

    </div>

    
    <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 px-6 py-5 sm:flex-row">

      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-emerald-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21s8-4.438 8-11a8 8 0 10-16 0c0 6.562 8 11 8 11z"
            />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800">
            Serve For Life Foundation
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Prem Nagar, Chhattisgarh
          </p>
        </div>
      </div>

     
      <a
        href="https://maps.app.goo.gl/Z6jomY2U65ZLXbvA7?g_st=ac"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg"
      >
        View on Google Maps →
      </a>

    </div>

  </div>
</section> */}
    </section>
  );
}