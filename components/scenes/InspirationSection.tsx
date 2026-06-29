"use client";

import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import Image from "next/image";

export function InspirationSection() {
  return (
    <section className="py-16 bg-white w-full border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-4 ring-emerald-50 bg-white relative">
              <Image 
                src="/images/founder.png" 
                alt="Inspiration of Sri Skanda" 
                fill 
                className="object-cover" 
              />
            </div>
            
            <h2 className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-widest mb-2">
              Inspiration of Sri Skanda
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-base mb-6">
              శ్రీమతి జడరపు లక్ష్మీ సితారామమ్మ గారు
            </h3>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 leading-relaxed text-sm md:text-base italic">
                &quot;Education is not just about academic excellence; it is about building character, instilling values, and preparing the next generation to face the world with courage and integrity. Our mission is to nurture every student&apos;s potential and guide them towards a bright and successful future.&quot;
              </p>
              <p className="text-gray-400 mt-4 text-xs uppercase tracking-widest font-semibold">
                — Founder&apos;s Message
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
