"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaEnvelope, FaFutbol } from "react-icons/fa";

const Events = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };


  const countdownItems: string[] = [
    "Days",
    "Hours",
    "Minutes",
    "Seconds",
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAF7] via-white to-[#EEF7F2] text-slate-900 flex items-center justify-center px-6 py-32 overflow-hidden relative">


      {/* Background Glows */}

      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-300/30 blur-[160px]" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-lime-300/20 blur-[160px]" />



      {/* Floating Tennis Balls */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: 360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 h-24 w-24 rounded-full bg-emerald-300/20 border border-emerald-300/30 blur-sm hidden lg:block"
      />



      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: -360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full bg-lime-300/20 border border-lime-300/30 blur-sm hidden lg:block"
      />



      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center max-w-3xl relative z-10"
      >



        <motion.span
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="inline-block px-4 py-1.5 rounded-full bg-lime-100 border border-lime-200 text-lime-700 text-sm font-semibold tracking-wider uppercase mb-6"
        >
          Events
        </motion.span>



        <div className="flex justify-center mb-6">
          <FaCalendarAlt className="text-6xl text-lime-500" />
        </div>




        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">

          <span className="text-slate-900">
            Events
          </span>

          <br />

          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Coming Soon
          </span>

        </h1>




        <p className="mt-6 text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">

          We're working hard to bring you exciting events, tournaments, and community
          programs. Stay tuned for updates!

        </p>





        {/* Divider */}

        <div className="my-8 flex justify-center items-center gap-4">

          <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400/50" />

          <FaFutbol className="text-emerald-500/50 text-2xl" />

          <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-400/50" />

        </div>






        {/* Countdown */}

        <div className="flex justify-center gap-6 mb-8">

          {countdownItems.map((label: string, index: number) => (

            <div
              key={index}
              className="text-center"
            >

              <div className="text-3xl sm:text-4xl font-bold text-emerald-500">
                00
              </div>


              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                {label}
              </div>

            </div>

          ))}

        </div>






        {/* Newsletter */}

        <div className="mt-8 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200 shadow-lg shadow-emerald-100/40 inline-block">


          <p className="text-slate-600 text-sm flex items-center gap-2">

            <FaEnvelope className="text-emerald-500" />

            Subscribe to our newsletter for event announcements.

          </p>




          <div className="mt-4 flex flex-col sm:flex-row gap-3">


            <input

              type="email"

              placeholder="Enter your email"

              className="px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition"

            />




            <button

              className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-emerald-200"

            >

              Notify Me

            </button>


          </div>


        </div>






        {/* Back Home */}

        <div className="mt-10">

          <a

            href="/"

            className="inline-block text-slate-500 hover:text-emerald-500 transition-colors duration-300 text-sm"

          >

            ← Back to Home

          </a>

        </div>




      </motion.div>


    </div>
  );
};


export default Events;