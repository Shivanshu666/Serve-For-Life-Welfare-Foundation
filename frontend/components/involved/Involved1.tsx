"use client";
import Link from "next/link";
import {
  Heart,
  IndianRupee,
  Share2,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FaArrowRight, FaHeart } from "react-icons/fa";

export default function Involved1() {
  const waysToHelp = [
    {
      number: "01",
      icon: IndianRupee,
      title: "Donate",
      description:
        "Every rupee counts. Contribute now to help us reach our goal.",
      button: "Donate Now",
      link:"/donate"
    },
    {
      number: "02",
      icon: Share2,
      title: "Share",
      description:
        "Help us take the message further. Share our vision with your family, friends, colleagues, and community—and inspire others to support the power of sport.",
      button: "Spread the Word",
    },
    {
      number: "03",
      icon: Users,
      title: "Volunteer",
      description:
        "Your time, skills, and passion can create meaningful change. Join us in creating opportunities, strengthening communities, and helping more children discover their potential through sport.",
      button: "Become a Volunteer",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F8F3] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#DDE9D8] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#E8DCCB] opacity-40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8D6C2] bg-white px-4 py-2 text-sm font-medium text-[#426044] shadow-sm">
            <Sparkles className="h-4 w-4" />
            
Be a Part of the Change

          </div>

               <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-lime-100 to-emerald-100 text-4xl text-lime-600 shadow-lg shadow-lime-200/40">
                      <FaHeart />
                    </div>


 <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
              Make a Difference?
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-[#657067] sm:text-lg">
            At Serve For Life Welfare Foundation, we believe change starts
            with people like you. <br /> Every act of kindness, every rupee, and
            every moment of your time brings us closer to our mission.
          </p>
        </div>

        {/* Main CTA */}
        <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#009146ef] shadow-xl">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left */}
            <div className="relative px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
              <div className="absolute right-10 top-8 opacity-10">
                <Heart className="h-32 w-32 fill-current text-red-900" />
              </div>

              <div className="relative max-w-xl">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#DDE9D8] text-[#315337]">
                  <Heart className="h-6 w-6 fill-current text-red-900" />
                </div>

                <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                  Your kindness can become someone&apos;s hope.
                </h3>

                <p className="mt-5 leading-7 text-[#C8D3CB]">
                  Your support helps us continue our work and reach those
                  who need it most. <br /> No contribution is too small when we come
                  together.
                </p>

          <Link
  href="/donate"
  className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-[#182D22] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EDF2E9]"
>
  Donate Now
  <ArrowRight className="h-5 w-5" />
</Link>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center justify-center bg-[#DDE9D8] px-7 py-10 sm:px-10 lg:px-12">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#527055]">
                  Every contribution matters
                </p>

                <div className="mt-5 flex items-center justify-center">
                  <span className="text-6xl font-semibold tracking-tight text-[#182D22]">
                    ₹
                  </span>
                  <span className="ml-2 text-6xl font-semibold tracking-tight text-[#182D22]">
                    ∞
                  </span>
                </div>

                <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-[#607162]">
                  Small acts of kindness can create a big impact when we do it
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ways to help */}
        <div className="mt-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              
            <div className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.16em] text-[#2F5D3A]">
                <span className="h-px w-6 bg-[#2F5D3A]" />
                How you can help
              </div>

              <h3 className="mt-3 text-3xl font-semibold text-[#182D22] sm:text-4xl">
                Power the vision. Empower Children
              </h3>
            </div>

         
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {waysToHelp.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-[#DCE2D9] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#B8C8B2] hover:shadow-xl"
                >
                  {/* Number */}
                  <div className="absolute right-6 top-5 text-5xl font-semibold text-[#EEF1EB]">
                    {item.number}
                  </div>

                  <div className="relative">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EFE4] text-[#496849] transition-colors group-hover:bg-[#182D22] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h4 className="mt-7 text-xl font-semibold text-[#182D22]">
                      {item.title}
                    </h4>

                    <p className="mt-3 min-h-[84px] text-sm leading-6 text-[#6B746D]">
                      {item.description}
                    </p>

                    {item.link ? (
  <Link
    href={item.link}
    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#426044] transition-all group-hover:gap-3"
  >
    {item.button}
    <ArrowRight className="h-4 w-4" />
  </Link>
) : (
  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#426044] transition-all group-hover:gap-3">
    {item.button}
    <ArrowRight className="h-4 w-4" />
  </button>
)}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-15 text-center">
            <p className="text-black text-bold">
              Choose a way to support us and help create opportunities for every child to play, learn and thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}