"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import { RotatingText } from "@/components/react-bits/RotatingText";

export default function HeroFacade() {
  return (
    <section id="hero" className="relative min-h-[60vh] flex items-center justify-center bg-transparent pt-24 pb-8 overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <ScrollReveal delay={0.2}>
          <div className="mb-6 inline-block p-1 rounded-full bg-white shadow-sm border border-gray-100">
            <Image
              src="/images/logo.jpeg"
              alt="Sri Skanda Academy Logo"
              width={56}
              height={56}
              className="rounded-full"
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="px-3 py-1 rounded-full border border-gray-200 bg-white/80 backdrop-blur shadow-sm mb-4 inline-flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-base animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest text-gray-600 font-medium">The Fortress of Success</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] font-bold text-gray-900 tracking-tight leading-tight mb-2 drop-shadow-sm">
            Sri Skanda
          </h1>
          <h2 className="text-base md:text-lg text-gray-600 font-medium tracking-wide mb-4">
            IIT & Medical Academy
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="text-sm md:text-base font-medium text-gray-500 mb-6 flex items-center justify-center gap-2 bg-white/60 px-4 py-1.5 rounded-full shadow-sm backdrop-blur">
            <span>Pioneering</span>
            <RotatingText 
              texts={["Excellence", "Innovation", "Discipline", "Success"]} 
              className="text-emerald-base font-bold"
            />
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6}>
          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-full bg-emerald-base text-white font-semibold shadow-md hover:bg-emerald-deep transition-colors text-xs">
              Explore Campus
            </button>
            <button className="px-5 py-2 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm hover:bg-gray-50 transition-colors text-xs font-medium">
              Admissions
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
