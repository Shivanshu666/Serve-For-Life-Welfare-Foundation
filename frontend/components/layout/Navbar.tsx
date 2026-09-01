
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

import NaviLogo from "@/assets/sflwflogo.jpeg";

const links = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "About Us", href: "/about" },
  { name: "Get Involved", href: "/getInvolved" },
  {
    name: "Our Work",
    href: "/work",
    dropdown: [
      { name: "Our Programs", href: "/work" },
      // { name: "Our Programs", href: "/work/programs" },
      // { name: "Our Impact", href: "/work/impact" },
      { name: "Success Stories", href: "/work/stories" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    x: -30,
  },

  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9] as const,
    },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-200 bg-white/90 py-2 shadow-lg backdrop-blur-xl"
            : "bg-white/60 py-5 backdrop-blur-md"
        }`}
      >
        {/* Background Glow */}
        <div className="absolute left-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-emerald-300/30 blur-2xl" />

        <div
          className={`relative mx-auto flex max-w-7xl items-center justify-between ${
            scrolled ? "px-5" : "px-6 sm:px-8 lg:px-12"
          }`}
        >
          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="group relative z-10 flex items-center gap-3"
          >
            <div className="relative">
              <Image
                src={NaviLogo}
                alt="Serve For Life Foundation"
                width={48}
                height={48}
                priority
                className="h-12 w-auto rounded-xl shadow-md transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 -z-10 rounded-xl bg-emerald-300/30 blur-xl" />
            </div>
          </Link>

          {/* ================= DESKTOP MENU ================= */}

          <ul className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const hasDropdown =
                "dropdown" in link && link.dropdown;

              const isWorkActive =
                link.name === "Our Work" &&
                (pathname === "/work" ||
                  pathname.startsWith("/work/"));

              const isActive =
                pathname === link.href || isWorkActive;

              return (
                <li
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    hasDropdown && setWorkOpen(true)
                  }
                  onMouseLeave={() =>
                    hasDropdown && setWorkOpen(false)
                  }
                >
                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-50 text-emerald-600"
                        : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                    }`}
                  >
                    {link.name}

                    {hasDropdown && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          workOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}

                    {isActive && (
                      <motion.div
                        layoutId="nav"
                        className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-emerald-500 to-lime-500"
                      />
                    )}
                  </Link>

                  {/* ================= DROPDOWN ================= */}

                  {hasDropdown && workOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-200/60">
                        {hasDropdown &&
                          link.dropdown.map((item) => {
                            const active =
                              pathname === item.href;

                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                                  active
                                    ? "bg-emerald-50 text-emerald-600"
                                    : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                                }`}
                              >
                                {item.name}
                              </Link>
                            );
                          })}
                      </div>
                    </motion.div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* ================= CTA + MOBILE ================= */}

          <div className="flex items-center gap-4">
            <Link
              href="/donate"
              className="hidden rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 md:block"
            >
              Donate Now
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 transition hover:text-emerald-600 md:hidden"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-8"
            >
              <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur-xl">
                <ul className="space-y-3">
                  {links.map((link, index) => {
                    const hasDropdown =
                      "dropdown" in link && link.dropdown;

                    const active =
                      pathname === link.href ||
                      (link.name === "Our Work" &&
                        pathname.startsWith("/work"));

                    return (
                      <motion.li
                        key={link.name}
                        custom={index}
                        initial="closed"
                        animate="open"
                        variants={menuVariants}
                      >
                        {hasDropdown ? (
                          <>
                            <button
                              onClick={() =>
                                setMobileWorkOpen(
                                  !mobileWorkOpen
                                )
                              }
                              className={`flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-3xl font-bold transition ${
                                active
                                  ? "bg-emerald-50 text-emerald-600"
                                  : "text-slate-800 hover:bg-emerald-50 hover:text-emerald-600"
                              }`}
                            >
                              Our Work

                              <ChevronDown
                                size={26}
                                className={`transition-transform duration-300 ${
                                  mobileWorkOpen
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {mobileWorkOpen && (
                                <motion.div
                                  initial={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  animate={{
                                    height: "auto",
                                    opacity: 1,
                                  }}
                                  exit={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-2 space-y-2 rounded-2xl bg-slate-50 p-3">
                                    {link.dropdown.map(
                                      (item) => (
                                        <Link
                                          key={item.name}
                                          href={item.href}
                                          onClick={() =>
                                            setIsOpen(false)
                                          }
                                          className="block rounded-xl px-4 py-3 text-center text-lg font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-600"
                                        >
                                          {item.name}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block rounded-2xl py-4 text-center text-3xl font-bold transition ${
                              active
                                ? "bg-emerald-50 text-emerald-600"
                                : "text-slate-800 hover:bg-emerald-50 hover:text-emerald-600"
                            }`}
                          >
                            {link.name}
                          </Link>
                        )}
                      </motion.li>
                    );
                  })}

                  {/* Donate */}
                  <motion.li
                    custom={links.length}
                    initial="closed"
                    animate="open"
                    variants={menuVariants}
                  >
                    <Link
                      href="/donate"
                      onClick={() => setIsOpen(false)}
                      className="block rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 py-4 text-center text-xl font-bold text-white shadow-lg"
                    >
                      Donate Now ❤️
                    </Link>
                  </motion.li>
                </ul>

                <p className="mt-8 text-center text-sm uppercase tracking-widest text-slate-400">
                  Serve. Empower. Transform.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
