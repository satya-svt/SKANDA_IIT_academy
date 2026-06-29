"use client";

import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import Image from "next/image";

const directors = [
  {
    name: "U. VENKATA RAMAYYA",
    degrees: "M.Com., M.A., B.Ed",
    designation: "Chairman & Principal",
    experience: "23 Years Excellence in Sanskrit",
    image: "https://picsum.photos/id/1011/400/400", // Placeholder
    ringColor: "border-green-600",
    dotColor: "bg-green-600",
    bgGradient: "from-green-600/20 to-transparent",
  },
  {
    name: "ESARAPU SWAMY",
    degrees: "M.Tech (Thermal)",
    designation: "Secretary & Correspondent",
    experience: "10 Years Excellence in Physics",
    image: "https://picsum.photos/id/1012/400/400", // Placeholder
    ringColor: "border-yellow-500",
    dotColor: "bg-yellow-500",
    bgGradient: "from-yellow-500/20 to-transparent",
  },
  {
    name: "N. PADDA RAJU",
    degrees: "M.A (Litt)",
    designation: "Administrative Gen. Manager",
    experience: "18 Years Excellence in Corporate Sector",
    image: "https://picsum.photos/id/1013/400/400", // Placeholder
    ringColor: "border-orange-500",
    dotColor: "bg-orange-500",
    bgGradient: "from-orange-500/20 to-transparent",
  },
];

export function DirectorsSection() {
  return (
    <section className="py-16 bg-white w-full border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-widest mb-2">
              Our Leadership
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-base">
              Board of Directors
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-6">
          {directors.map((dir, index) => (
            <ScrollReveal key={dir.name} delay={0.2 + index * 0.1}>
              <div className="flex flex-col items-center text-center group">
                {/* Image with Orbital Rings Effect */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6">
                  {/* Outer animated ring */}
                  <div className={`absolute inset-0 rounded-full border-2 border-dashed ${dir.ringColor} opacity-30 group-hover:animate-spin`} style={{ animationDuration: '10s' }} />
                  
                  {/* Inner solid ring with gradient background */}
                  <div className={`absolute inset-2 rounded-full border-2 ${dir.ringColor} bg-gradient-to-br ${dir.bgGradient} flex items-center justify-center p-2`}>
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner">
                      <Image 
                        src={dir.image} 
                        alt={dir.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Decorative dots on the outer ring */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 rounded-full ${dir.dotColor}`} />
                  <div className={`absolute bottom-4 right-2 w-2 h-2 rounded-full ${dir.dotColor}`} />
                  <div className={`absolute bottom-4 left-2 w-2 h-2 rounded-full ${dir.dotColor}`} />
                </div>

                {/* Director Details */}
                <h4 className="text-lg font-bold text-slate-800 mb-1">
                  {dir.name}
                </h4>
                <p className="text-sm font-semibold text-slate-500 mb-2">
                  {dir.degrees}
                </p>
                <h5 className="text-sm font-bold text-emerald-700 uppercase tracking-wide mb-2">
                  {dir.designation}
                </h5>
                <p className="text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                  {dir.experience}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
