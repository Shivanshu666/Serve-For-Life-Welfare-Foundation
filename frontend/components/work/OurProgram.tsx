"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FaChild, FaTrophy, FaArrowRight } from "react-icons/fa";

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
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

const programs = [
    {
        title: "SFLWF Child Empowerment School Program",
        description:
            "Using sport and play to help children from underserved communities build confidence, teamwork, leadership, and healthy habits.",
        image: "/images/About3.jpeg",
        icon: FaChild,
        href: "/work/Program1",
        tag: "Child Development",
        stats: "120 Children • Ages 8–12",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-700",
        accent: "from-emerald-600 to-lime-600",
    },
    {
        title: "SFLWF (SET) Athlete Sponsorship Program",
        description:
            "Supporting talented young tennis players from economically under-resourced backgrounds who have the game but not the means.",
        image: "/images/Athlete.jpeg",
        icon: FaTrophy,
        href: "/work/Program2",
        tag: "Athlete Development",
        stats: "Serve • Empower • Transform",
        iconBg: "bg-lime-100",
        iconColor: "text-lime-700",
        accent: "from-lime-600 to-emerald-600",
    },
];

export default function OurProgram() {
    return (
        <main className="relative overflow-hidden bg-slate-100">
            {/* Background glows */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-200/30 blur-[140px]" />
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-lime-200/30 blur-[140px]" />

            {/* Hero */}
            <section className="relative px-6 pb-12 pt-20 sm:px-8 lg:px-12 lg:pb-16 lg:pt-28">
                <div className="relative z-10 mx-auto max-w-5xl text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                    >
                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
                            Creating Impact{" "}
                            <span className="bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
                                Through Sport
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                            From empowering children through sport to supporting the next
                            generation of tennis talent, our programs are designed to create
                            meaningful and lasting change.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Program Cards — Compact & Professional */}
            <section className="relative z-10 px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2"
                >
                    {programs.map((program) => {
                        const Icon = program.icon;

                        return (
                            <motion.div key={program.title} variants={fadeUp}>
                                <Link
                                    href={program.href}
                                    className="group block h-full overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                                >
                                    {/* Image — slightly bigger height */}
                                    <div className="relative h-56 overflow-hidden sm:h-64">
                                        <Image
                                            src={program.image}
                                            alt={program.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                                    </div>

                                    {/* Content — compact padding */}
                                    <div className="p-5 sm:p-6">
                                        <h2 className="text-xl font-bold leading-snug text-slate-800 transition-colors duration-300 group-hover:text-emerald-700 sm:text-2xl">
                                            {program.title}
                                        </h2>

                                        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                                            {program.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="mt-4 border-t border-slate-200 pt-4">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                                {program.stats}
                                            </p>
                                        </div>

                                        {/* CTA — minimal */}
                                        <div className="mt-4 flex items-center justify-between">
                                            <span
                                                className={`bg-gradient-to-r ${program.accent} bg-clip-text text-sm font-bold text-transparent`}
                                            >
                                                Explore Program
                                            </span>

                                            <div className="flex h-8 w-8 items-center justify-center bg-slate-100 transition-all duration-300 group-hover:bg-emerald-100">
                                                <FaArrowRight className="text-xs text-slate-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-emerald-700" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* Bottom statement */}
            <section className="relative z-10 bg-[#182D22] px-6 py-16 text-center sm:px-8 lg:py-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className="mx-auto max-w-3xl"
                >
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Sport Can{" "}
                        <span className="text-lime-300">Transform Lives</span>
                    </h2>

                    <p className="mt-4 text-lg leading-relaxed text-slate-300">
                        Every child deserves the opportunity to play, learn and grow.
                        Every athlete deserves the opportunity to pursue their potential.
                    </p>
                </motion.div>
            </section>
        </main>
    );
}