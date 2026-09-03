"use client";

import Hero from "@/components/home/Hero";
import PreHero from "@/components/home/PreHero";
import Purpose from "@/components/home/Purpose";
import Values from "@/components/home/Values";
import Athletes from "@/components/home/Athletes";
import Promise from "@/components/home/Promise";
import Philosophy from "@/components/home/Philosophy";
import Stats from "@/components/home/Stats";

export default function Home() {
  return (
    <main className="bg-[#06100A] text-white overflow-hidden">
      <PreHero/>
      <Stats/>
      <Hero />
       <Purpose /> 
       <Philosophy/>
      <Values />
       {/* <Promise />  */}
    </main>
  );
}