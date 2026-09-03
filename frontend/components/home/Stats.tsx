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
    number: "02",
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
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
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
              <motion.div
                key={idx}
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
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}