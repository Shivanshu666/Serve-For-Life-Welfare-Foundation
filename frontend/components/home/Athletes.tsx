// components/home/Athletes.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Import your images
import athlete1 from "@/assets/athlete/athlete1.jpeg";
import athlete2 from "@/assets/athlete/athlete2.jpeg";
import athlete3 from "@/assets/athlete/athlete3.jpeg";

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

const athletes = [
  {
    name: "Abhinav Singh",
    // age: "14",
    image: athlete1,
    desc: "Kids love him when he walks in and want to be around him. He is being looked up as a role model for the academy players. He loves to hit the ball with power and passion. He loves being on the court and enjoys playing all court tennis. He is being admired by our Adults group as well and is willing to play and hit with anyone who wants to. ",
  },
  {
    name: "Tanvya Goel ",
    // age: "13",
    image: athlete2,
    desc: "An emerging young player who is in high school this year, he is a dedicated athlete who approaches every opportunity to improve with determination and focus. He enjoys training, embraces hard work and brings a strong work ethic to everything he does on and off the court.",
  },
  {
    name: "Vanya Pundir",
    // age: "15",
    image: athlete3,
    desc: "Vanya loves a challenge on the tennis court. She thrives on competition and shares her passion for the game with her dad. With powerful shots, enthusiasm and a strong desire to improve, she is always eager to step onto the court, play her best and keep getting better.",
  },
];

export default function Athletes() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FCFCFC] to-[#F8FBF8] py-24 px-6 sm:px-8 lg:px-12">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-lime-100 blur-[180px]" />
      <div className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-emerald-100 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-lime-200 bg-lime-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-lime-700">
            Game Changers
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Meet Our Sponsored{" "}
            <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
              Junior Athletes
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We support these hardworking young players as they pursue
            their tennis dreams. Your donation helps cover training,
            coaching, equipment, and tournament expenses.
          </p>
        </motion.div>

        {/* Athlete Cards – centered grid (no horizontal scroll) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl"
        >
          {athletes.map((athlete, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-lime-100 bg-white shadow-lg shadow-lime-100/40 transition-all duration-500 hover:-translate-y-2 hover:border-lime-300 hover:shadow-2xl hover:shadow-lime-200/40"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={athlete.image}
                  alt={athlete.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900">
                  {athlete.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {athlete.desc}
                </p>

                <div className="mt-6 h-px bg-gradient-to-r from-lime-200 via-emerald-200 to-transparent" />

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-lime-600">
                    Sponsored Athlete
                  </span>

                  <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime-700">
                    Tennis
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-[32px] border border-lime-200 bg-gradient-to-r from-lime-50 via-white to-emerald-50 p-10 shadow-xl shadow-lime-100/40">
            <h3 className="text-3xl font-bold text-slate-900">
              Help Young Athletes Achieve Their Dreams
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Every donation provides coaching, equipment, tournament
              opportunities, and mentorship for talented young tennis
              players. Together, we can build brighter futures through
              the power of sport.
            </p>

            <Link
              href="/involved"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-300/40"
            >
              Support Our Athletes
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}