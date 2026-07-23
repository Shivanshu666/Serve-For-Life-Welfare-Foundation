"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaHeart } from "react-icons/fa";

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

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-lime-50 via-white to-emerald-50 py-24 px-6 sm:px-8 lg:px-12">

      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-lime-200/40 blur-[160px]" />

      <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-emerald-200/40 blur-[160px]" />


      <div className="relative max-w-5xl mx-auto">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >

          {/* Icon */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-lime-100 to-emerald-100 text-4xl text-lime-600 shadow-lg shadow-lime-200/40">
            <FaHeart />
          </div>


          {/* Heading */}

          <h2 className="mt-8 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
              Make a Difference?
            </span>
          </h2>


          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Join us in creating a positive impact in the community.
            Whether you volunteer, donate, or partner with us,
            every contribution helps transform a child's future.
          </p>


          {/* Buttons */}

          <div className="mt-10 flex flex-wrap justify-center gap-5">


            <Link
              href="/volunteer"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 px-8 py-4 font-semibold text-white shadow-lg shadow-lime-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Volunteer Now

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>



            <Link
              href="/donate"
              className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-400 hover:bg-lime-50 hover:text-lime-700"
            >
              Make a Donation
            </Link>


          </div>


          {/* Bottom Message */}

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-lime-200 bg-white/80 p-8 shadow-xl shadow-lime-100/50 backdrop-blur">

            <p className="text-xl font-semibold leading-relaxed text-slate-800">
              Together, we can create opportunities,
              inspire young athletes,
              and build a better future through sport.
            </p>


            <div className="mt-6 flex justify-center gap-3 text-sm font-semibold uppercase tracking-widest text-lime-600">

              <span>Serve</span>
              <span>•</span>
              <span>Empower</span>
              <span>•</span>
              <span>Transform</span>

            </div>

          </div>


        </motion.div>

      </div>

    </section>
  );
}