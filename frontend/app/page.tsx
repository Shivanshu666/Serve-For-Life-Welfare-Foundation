
"use client";

import Hero from "@/components/home/Hero";
import PreHero from "@/components/home/PreHero";
import Purpose from "@/components/home/Purpose";
import Values from "@/components/home/Values";
import Philosophy from "@/components/home/Philosophy";
import Stats from "@/components/home/Stats";

export default function Home() {
  return (
    <main className=" overflow-hidden space-y-[15px]">
      <PreHero />
      <Stats />
      <Hero />
      <Purpose />
      <Philosophy />
      <Values />
      {/* <Promise /> */}
    </main>
  );
}

