"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import Image from "next/image";
import Logo from "@/assets/sflwflogo.jpeg";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Contact", path: "/contact" },
  ];

  const programs = [
    "Tennis Coaching",
    "Junior Development",
    "Fitness & Wellness",
    "Leadership Training",
    "Community Outreach",
    "Education Support",
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      link: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <FaYoutube />,
      link: "https://youtube.com",
      label: "YouTube",
    },
  ];

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
relative overflow-hidden
bg-gradient-to-b
from-[#FAFAF8]
via-white
to-[#F5F8F3]
text-slate-900
"
    >
      {/* Top Gradient Line */}

      <div
        className="
h-1 w-full
bg-gradient-to-r
from-lime-400
via-emerald-400
to-green-500
"
      />

      {/* Background Glow */}

      <div
        className="
absolute -top-20 -left-20
h-72 w-72
rounded-full
bg-lime-300/30
blur-[140px]
"
      />

      <div
        className="
absolute bottom-0 right-0
h-96 w-96
rounded-full
bg-emerald-300/20
blur-[160px]
"
      />

      <div
        className="
absolute top-1/2 left-1/2
-translate-x-1/2
-translate-y-1/2
h-[500px] w-[500px]
rounded-full
bg-green-200/20
blur-[200px]
"
      />

      <div
        className="
absolute inset-0
opacity-[0.04]
pointer-events-none
"
        style={{
          backgroundImage: `
linear-gradient(#94a3b8 1px,transparent 1px),
linear-gradient(90deg,#94a3b8 1px,transparent 1px)
`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* MAIN */}

      <div
        className="
relative z-10
max-w-7xl mx-auto
px-5 sm:px-8 lg:px-12
py-14
"
      >
        <div
          className="
grid grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-10
"
        >
          {/* BRAND */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <Image
                src={Logo}
                alt="Serve For Life Foundation"
                width={110}
                height={110}
                className="
rounded-xl
shadow-lg
hover:scale-105
transition duration-500
"
              />
            </Link>

            <h2
              className="
mt-5
text-3xl
font-bold
text-slate-900
"
            >
              Serve For Life
            </h2>

            <p
              className="
mt-3
text-slate-600
leading-relaxed
text-sm
"
            >
              Empowering youth through Tennis, Education, Leadership and
              Community Development while creating opportunities for a brighter
              future.
            </p>

            <div
              className="
flex gap-3 mt-6
"
            >
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                  }}
                  className="
h-10 w-10
rounded-full
bg-white
border
border-lime-100
shadow-sm
flex items-center justify-center
text-slate-600
hover:bg-lime-500
hover:text-white
transition-all
"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3
              className="
text-lg
font-bold
uppercase
tracking-wide
text-lime-600
mb-5
"
            >
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="
group
flex items-center gap-3
text-slate-600
hover:text-lime-600
transition
text-sm
"
                  >
                    <span
                      className="
h-2 w-2
rounded-full
bg-lime-400
group-hover:scale-150
transition
"
                    />

                    <span
                      className="
group-hover:translate-x-1
transition
"
                    >
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* PROGRAMS */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3
              className="
text-lg
font-bold
uppercase
tracking-wide
text-lime-600
mb-5
"
            >
              Our Programs
            </h3>

            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li
                  key={index}
                  className="
flex items-center gap-3
text-slate-600
text-sm
group
"
                >
                  <span
                    className="
text-lime-500
"
                  >
                    🎾
                  </span>

                  <span
                    className="
group-hover:text-lime-600
group-hover:translate-x-1
transition
"
                  >
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3
              className="
text-lg
font-bold
uppercase
tracking-wide
text-lime-600
mb-5
"
            >
              Contact Us
            </h3>

            <div className="space-y-5">
              <div
                className="
flex items-start gap-4
"
              >
                <FaMapMarkerAlt
                  className="
text-lime-500
mt-1
"
                />

                <p
                  className="
text-slate-600
text-sm
leading-relaxed
"
                >
                  Bhopal, Madhya Pradesh, India
                </p>
              </div>

              <div
                className="
flex items-center gap-4
"
              >
                <FaPhoneAlt
                  className="
text-lime-500
"
                />

                <p
                  className="
text-slate-600
text-sm
"
                >
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div
                className="
flex items-center gap-4
"
              >
                <FaEnvelope
                  className="
text-lime-500
"
                />

                <p
                  className="
text-slate-600
text-sm
"
                >
                  info@serveforlife.org
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="
mt-14
pt-6
border-t
border-slate-200
flex
flex-col
md:flex-row
items-center
justify-between
gap-6
"
        >
          <div className="text-center md:text-left">
            <p
              className="
text-sm
text-slate-500
"
            >
              © {new Date().getFullYear()}{" "}
              <span
                className="
font-semibold
text-lime-600
"
              >
                Serve For Life Foundation
              </span>
              . All Rights Reserved.
            </p>

            <p
              className="
mt-2
text-xs
text-slate-400
"
            >
              Empowering communities through Tennis • Education • Leadership
            </p>
          </div>

          <div
            className="
flex items-center
gap-4
text-xs
"
          >
            <Link
              href="/privacy"
              className="
text-slate-500
hover:text-lime-600
transition
"
            >
              Privacy Policy
            </Link>

            <span className="text-slate-300">|</span>

            <Link
              href="/terms"
              className="
text-slate-500
hover:text-lime-600
transition
"
            >
              Terms & Conditions
            </Link>

            <span className="text-slate-300">|</span>

            <Link
              href="/faq"
              className="
text-slate-500
hover:text-lime-600
transition
"
            >
              FAQ
            </Link>
          </div>
        </motion.div>

        {/* SCROLL TOP BUTTON */}

        <motion.button
          whileHover={{
            scale: 1.1,
            y: -5,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={scrollTop}
          className="
fixed
bottom-6
right-6
h-14
w-14
rounded-full
bg-gradient-to-r
from-lime-500
to-emerald-500
text-white
shadow-xl
shadow-lime-300/40
flex
items-center
justify-center
z-50
"
        >
          <FaArrowUp />
        </motion.button>

        {/* DECORATIVE TENNIS BALLS */}

        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
hidden
lg:block
absolute
top-24
right-20
h-14
w-14
rounded-full
bg-lime-300/20
border
border-lime-300/40
"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: -360,
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
hidden
xl:block
absolute
bottom-20
left-16
h-20
w-20
rounded-full
bg-emerald-300/20
border
border-emerald-300/40
"
        ></motion.div>
      </div>
    </footer>
  );
}
