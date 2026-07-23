"use client";

import Hero from "@/components/home/Hero";
import Purpose from "@/components/home/Purpose";
import Values from "@/components/home/Values";
import Athletes from "@/components/home/Athletes";
import Promise from "@/components/home/Promise";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="bg-[#06100A] text-white overflow-hidden">
      <Hero />
       <Purpose /> 
      <Values />
      <Athletes />
       <Promise />
      <CTA />  
    </main>
  );
}