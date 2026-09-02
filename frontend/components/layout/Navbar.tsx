"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

import NaviLogo from "@/assets/sflwflogo.jpeg";

/* =========================================================
   NAVIGATION DATA
========================================================= */

type DropdownItem = {
  name: string;
  href: string;
};

type NavLink = {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
};

const links: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "About Us",
    href: "/about",
    dropdown: [
      {
        name: "Our Story",
        href: "/about",
      },
      {
        name: "Our Team",
        href: "/about/team",
      },
    ],
  },

  {
    name: "Our Work",
    href: "/work",
    dropdown: [
      {
        name: "Our Programs",
        href: "/work",
      },
      {
        name: "Success Stories",
        href: "/work/stories",
      },
    ],
  },

  {
    name: "Events",
    href: "/events",
  },

  {
    name: "Get Involved",
    href: "/involved",
  },

  {
    name: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   MOBILE MENU ANIMATION
========================================================= */

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

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  /* Mobile menu */
  const [isOpen, setIsOpen] = useState(false);

  /* Desktop dropdown */
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  /* Mobile dropdown */
  const [mobileDropdownOpen, setMobileDropdownOpen] =
    useState<string | null>(null);

  /* Scroll state */
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  /* =======================================================
     HANDLE SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU OPEN
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  /* =======================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setIsOpen(false);
    setMobileDropdownOpen(null);
    setDropdownOpen(null);
  }, [pathname]);

  /* =======================================================
     CHECK ACTIVE ROUTE
  ======================================================= */

  const isLinkActive = (link: NavLink) => {
    if (link.name === "Home") {
      return pathname === "/";
    }

    if (link.dropdown) {
      return (
        pathname === link.href ||
        pathname.startsWith(`${link.href}/`)
      );
    }

    return pathname === link.href;
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-slate-200 bg-white/90 py-2 shadow-lg backdrop-blur-xl"
            : "bg-white/60 py-5 backdrop-blur-md"
        }`}
      >
        {/* Background Glow */}

        <div className="pointer-events-none absolute left-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-emerald-300/30 blur-2xl" />

        <div
          className={`relative mx-auto flex max-w-7xl items-center justify-between ${
            scrolled
              ? "px-5"
              : "px-6 sm:px-8 lg:px-12"
          }`}
        >
          {/* =================================================
              LOGO
          ================================================= */}

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

          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <ul className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const hasDropdown =
                Boolean(link.dropdown);

              const isActive =
                isLinkActive(link);

              const isDropdownOpen =
                dropdownOpen === link.name;

              return (
                <li
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (hasDropdown) {
                      setDropdownOpen(link.name);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasDropdown) {
                      setDropdownOpen(null);
                    }
                  }}
                >
                  {/* ================================
                      MAIN NAV LINK
                  ================================= */}

                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-50 text-emerald-600"
                        : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                    }`}
                  >
                    {link.name}

                    {/* Dropdown Arrow */}

                    {hasDropdown && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isDropdownOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    )}

                    {/* Active underline */}

                    {isActive && (
                      <motion.div
                        layoutId="nav"
                        className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-emerald-500 to-lime-500"
                      />
                    )}
                  </Link>

                  {/* =================================================
                      DESKTOP DROPDOWN
                  ================================================= */}

                  <AnimatePresence>
                    {hasDropdown &&
                      isDropdownOpen && (
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
                          exit={{
                            opacity: 0,
                            y: 10,
                            scale: 0.96,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3"
                        >
                          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-200/60">
                            {link.dropdown?.map(
                              (item) => {
                                const active =
                                  pathname ===
                                  item.href;

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
                              }
                            )}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* =================================================
              CTA + MOBILE BUTTON
          ================================================= */}

          <div className="flex items-center gap-4">
            {/* Desktop Donate */}

            <Link
              href="/donate"
              className="hidden rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 md:block"
            >
              Donate Now
            </Link>

            {/* Mobile Menu Button */}

            <button
              type="button"
              aria-label={
                isOpen
                  ? "Close menu"
                  : "Open menu"
              }
              onClick={() => {
                setIsOpen(!isOpen);

                if (isOpen) {
                  setMobileDropdownOpen(null);
                }
              }}
              className="text-slate-800 transition hover:text-emerald-600 md:hidden"
            >
              {isOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-xl"
              onClick={() => {
                setIsOpen(false);
                setMobileDropdownOpen(null);
              }}
            />

            {/* Mobile Menu */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-5 sm:p-8"
            >
              <div className="my-auto w-full max-w-sm rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
                <ul className="space-y-2 sm:space-y-3">
                  {links.map(
                    (link, index) => {
                      const hasDropdown =
                        Boolean(link.dropdown);

                      const active =
                        isLinkActive(link);

                      const isMobileDropdownOpen =
                        mobileDropdownOpen ===
                        link.name;

                      return (
                        <motion.li
                          key={link.name}
                          custom={index}
                          initial="closed"
                          animate="open"
                          variants={menuVariants}
                        >
                          {/* =================================================
                              LINK WITH DROPDOWN
                          ================================================= */}

                          {hasDropdown ? (
                            <>
                              <button
                                type="button"
                                onClick={() => {
                                  setMobileDropdownOpen(
                                    isMobileDropdownOpen
                                      ? null
                                      : link.name
                                  );
                                }}
                                className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-2xl font-bold transition sm:py-4 sm:text-3xl ${
                                  active
                                    ? "bg-emerald-50 text-emerald-600"
                                    : "text-slate-800 hover:bg-emerald-50 hover:text-emerald-600"
                                }`}
                              >
                                {link.name}

                                <ChevronDown
                                  size={24}
                                  className={`transition-transform duration-300 ${
                                    isMobileDropdownOpen
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>

                              {/* =================================================
                                  MOBILE SUBMENU
                              ================================================= */}

                              <AnimatePresence>
                                {isMobileDropdownOpen && (
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
                                    transition={{
                                      duration: 0.25,
                                    }}
                                    className="overflow-hidden"
                                  >
                                    <div className="mt-2 space-y-2 rounded-2xl bg-slate-50 p-2.5 sm:p-3">
                                      {link.dropdown?.map(
                                        (item) => {
                                          const itemActive =
                                            pathname ===
                                            item.href;

                                          return (
                                            <Link
                                              key={
                                                item.name
                                              }
                                              href={
                                                item.href
                                              }
                                              onClick={() => {
                                                setIsOpen(
                                                  false
                                                );
                                                setMobileDropdownOpen(
                                                  null
                                                );
                                              }}
                                              className={`block rounded-xl px-4 py-2.5 text-center text-base font-semibold transition sm:py-3 sm:text-lg ${
                                                itemActive
                                                  ? "bg-emerald-100 text-emerald-700"
                                                  : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                                              }`}
                                            >
                                              {
                                                item.name
                                              }
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          ) : (
                            /* =================================================
                               NORMAL MOBILE LINK
                            ================================================= */

                            <Link
                              href={link.href}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileDropdownOpen(
                                  null
                                );
                              }}
                              className={`block rounded-2xl py-3 text-center text-2xl font-bold transition sm:py-4 sm:text-3xl ${
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
                    }
                  )}

                  {/* =================================================
                      MOBILE DONATE
                  ================================================= */}

                  <motion.li
                    custom={links.length}
                    initial="closed"
                    animate="open"
                    variants={menuVariants}
                    className="pt-2"
                  >
                    <Link
                      href="/donate"
                      onClick={() => {
                        setIsOpen(false);
                        setMobileDropdownOpen(null);
                      }}
                      className="block rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 py-3.5 text-center text-lg font-bold text-white shadow-lg transition hover:scale-[1.02] sm:py-4 sm:text-xl"
                    >
                      Donate Now ❤️
                    </Link>
                  </motion.li>
                </ul>

                {/* Footer */}

                <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-slate-400 sm:mt-8 sm:text-sm">
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