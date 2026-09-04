"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowUpRight,
    Heart,
    GraduationCap,
    Trophy,
    Building2,
    ShieldCheck,
} from "lucide-react";

const initiatives = [
    {
        number: "01",
        title: "Give Every Child the Right to Play",
        description:
            "Your contribution can open doors to quality sports education, equipment, coaching, and opportunities for children who may otherwise be left behind. Every donation helps create access, build confidence, nurture talent, and give children the opportunity to grow through sport.",
        icon: GraduationCap,
        image: "/involved/involved1.jpg",
    },
    {
        number: "02",
        title: "Support the Journey to Excellence",
        description:
            "Your support helps promising athletes from underserved communities overcome barriers and pursue their sporting potential. Through the SET framework—Serve, Empower, Transform—every scholarship provides meaningful support across coaching, equipment, tournament participation, travel, nutrition, and athlete development.",
        icon: Trophy,
        image: "/involved/involved2.png",
    },
    {
        number: "03",
        title: "Create Spaces to Thrive",
        description:
            "Your support helps create greater opportunities for children and athletes to play, train, and grow. From developing and renovating sports infrastructure to creating safe, accessible, and well-equipped sporting spaces, every contribution strengthens the foundation for a more inclusive and sustainable sports ecosystem.",
        icon: Building2,
        image: "/involved/involved3.jpeg",
    },
    {
        number: "04",
        title: "Drive Meaningful Impact",
        description:
            "Drive meaningful change through a transparent, accountable, and outcome-driven approach. Every contribution helps create sustainable sporting opportunities and strengthens the ecosystem for long-term community impact.",
        icon: ShieldCheck,
        image: "/involved/involved4.png",
    },
];

// Colour palette for icons – vivid and thematic
const iconColors = [
    "#2563EB", // blue – education
    "#F59E0B", // amber – achievement
    "#EA580C", // orange – infrastructure
    "#7C3AED", // purple – transparency
];

const iconBgColors = [
    "#DBEAFE", // light blue
    "#FEF3C7", // light amber
    "#FFEDD5", // light orange
    "#EDE9FE", // light purple
];

export default function Involved2() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

            {/* =========================================================
                PRELOAD ALL 4 IMAGES
            ========================================================= */}
            <div className="hidden">
                {initiatives.map((item) => (
                    <Image
                        key={item.image}
                        src={item.image}
                        alt=""
                        width={10}
                        height={10}
                        priority
                    />
                ))}
            </div>

            {/* Background decorations */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#DCE8D8] opacity-40 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#E7DED1] opacity-30 blur-3xl" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E3EEE0] opacity-20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <div className="mx-auto max-w-4xl text-center">

                    {/* Badge */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D0DCD0] bg-white/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4F6A4D] shadow-sm backdrop-blur-sm transition-all hover:bg-white sm:text-[11px]">
                        <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        Make an Impact
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#17271E] sm:text-5xl lg:text-6xl xl:text-7xl">
                        Shape the Future
                        <br />
                        through{" "}
                        <span className="bg-gradient-to-r from-[#5E7A56] to-[#7A9A72] bg-clip-text text-transparent">
                            SPORT
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#657068] sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                        The future of any sport begins with an <span className="font-bold">OPPORTUNITY</span>. <br />
                        Your contribution helps create access to sport, strengthen
                        grassroots development, improve sporting infrastructure,
                        and nurture the next generation of athletes— <span className="font-bold italic">building a
                            stronger, more inclusive sporting ecosystem for all. </span>
                    </p>
                </div>

                {/* ================= MAIN CONTAINER ================= */}
                <div className="mt-10 overflow-hidden rounded-2xl border border-[#DCE3D8] bg-white/70 p-2 shadow-lg shadow-[#17271E]/5 backdrop-blur-[2px] sm:mt-12 sm:rounded-2xl sm:p-2.5 lg:mt-14 lg:p-3">

                    <div className="grid gap-2 lg:grid-cols-[1.08fr_0.92fr] lg:gap-2.5">

                        {/* ================= LEFT CONTENT ================= */}
                        <div className="rounded-2xl bg-[#EBF0E8] p-2 sm:p-2.5">

                            {initiatives.map((item, index) => {
                                const Icon = item.icon;
                                const isActive = selectedIndex === index;

                                // Get the vibrant colour for this index
                                const iconColor =
                                    iconColors[index % iconColors.length];

                                const iconBg =
                                    iconBgColors[index % iconBgColors.length];

                                return (
                                    <div
                                        key={item.number}
                                        onClick={() => setSelectedIndex(index)}
                                        className={`group relative cursor-pointer overflow-hidden rounded-xl p-4 transition-all duration-300 sm:p-5 lg:p-5 ${
                                            isActive
                                                ? "bg-[#D85A42] text-white shadow-md ring-2 ring-[#D85A42] ring-offset-2 ring-offset-[#EBF0E8]"
                                                : "bg-white/90 text-[#17221D] shadow-sm ring-1 ring-[#DCE3D8]/60 transition-all hover:bg-white hover:shadow-md hover:ring-[#C8D2C4]"
                                        } ${
                                            index !== initiatives.length - 1
                                                ? "mb-2"
                                                : ""
                                        }`}
                                    >
                                        {/* Large number */}
                                        <div
                                            className={`pointer-events-none absolute right-4 top-2 text-3xl font-bold tracking-tight sm:text-4xl ${
                                                isActive
                                                    ? "text-white/8"
                                                    : "text-[#17221D]/5"
                                            }`}
                                        >
                                            {item.number}
                                        </div>

                                        <div className="relative flex gap-3 sm:gap-4">

                                            {/* Icon – now with vibrant colours */}
                                            <div
                                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${
                                                    isActive
                                                        ? "border-white/25 bg-white/12"
                                                        : ""
                                                }`}
                                                style={
                                                    !isActive
                                                        ? {
                                                              borderColor: `${iconColor}4D`,
                                                              backgroundColor:
                                                                  iconBg,
                                                          }
                                                        : undefined
                                                }
                                            >
                                                <Icon
                                                    className="h-4 w-4 transition-colors duration-300 sm:h-[18px] sm:w-[18px]"
                                                    style={{
                                                        color: isActive
                                                            ? "white"
                                                            : iconColor,
                                                    }}
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="min-w-0 flex-1 pr-4 sm:pr-6">

                                                {/* Title */}
                                                <h3 className="mt-1 text-base font-semibold leading-tight tracking-[-0.02em] sm:text-lg lg:text-xl">
                                                    {item.title}
                                                </h3>

                                                {/* Description */}
                                                <p
                                                    className={`mt-2 text-xs leading-5 sm:text-[13px] sm:leading-5 lg:text-sm ${
                                                        isActive
                                                            ? "text-white/80"
                                                            : "text-[#657068]"
                                                    }`}
                                                >
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* ================= RIGHT IMAGE ================= */}
                        <div className="relative h-[340px] overflow-hidden rounded-2xl bg-[#263A2D] sm:h-[390px] lg:h-auto lg:min-h-[580px]">

                            <Image
                                src={initiatives[selectedIndex].image}
                                alt={initiatives[selectedIndex].title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A14] via-[#172A20]/30 to-transparent" />

                            {/* Bottom content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8">

                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#17221D] shadow-sm sm:h-11 sm:w-11">
                                    <Heart className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
                                </div>

                                <h3 className="max-w-md text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                                    One contribution.
                                    <br />
                                    Four ways to create change.
                                </h3>

                                <p className="mt-3 max-w-md text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
                                    From the first opportunity to the journey
                                    toward excellence, your support helps build
                                    a stronger future through sport.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= DONATE BUTTON ================= */}
                    <div className="mt-4 flex justify-center border-t border-[#DCE3D8] pt-4 sm:mt-5 sm:pt-5">

                        <Link href="/donate">
                            <button className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#d82e0c] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#C14D38] hover:-translate-y-0.5 hover:shadow-lg active:scale-95 sm:px-10 sm:py-3.5 sm:text-base">
                                Donate Now
                            </button>
                        </Link>

                    </div>
                </div>

                {/* ================= BOTTOM STATEMENT ================= */}
                <div className="mt-8 flex flex-col gap-3 border-t border-[#D9E0D6] pt-7 text-center sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:text-left">

                    <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#4F6A4D] sm:justify-start sm:text-sm">
                        <Heart className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" />
                        Every opportunity starts with someone who cares.
                    </div>

                </div>
            </div>
        </section>
    );
}