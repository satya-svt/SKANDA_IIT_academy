"use client";

import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import { CountUp } from "@/components/react-bits/CountUp";
import { CircularGallery } from "@/components/react-bits/CircularGallery";
import Image from "next/image";
import BorderGlow from "@/components/react-bits/BorderGlow";

const topStudents = [
  { rank: "#1", name: "Koviri Gayathri", stream: "Sr. MPC", score: "989" },
  { rank: "#1", name: "Pedapudi Pavani", stream: "Sr. BiPC", score: "979" },
  { rank: "#1", name: "Gurrala Meenakshi", stream: "Jr. MPC", score: "464" },
  { rank: "#1", name: "P. Sai Revathi", stream: "Jr. BiPC", score: "446" },
  { rank: "#2", name: "Mallapelli Bhavani", stream: "Sr. MPC", score: "986" },
  { rank: "#3", name: "Kakkala Sharimila", stream: "Sr. MPC", score: "981" },
  { rank: "#4", name: "Pandiri Kundana", stream: "Sr. MPC", score: "978" },
  { rank: "#5", name: "Devara Thoma", stream: "Sr. MPC", score: "977" },
];

export default function ResultsVault() {
  const galleryItems = topStudents.map((student, i) => (
    <div key={i} className="bento-card w-[140px] h-[180px] flex flex-col items-center justify-center p-2 text-center bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm">
      <div className="w-10 h-10 rounded-full bg-gray-50 mb-2 overflow-hidden border border-gray-200">
        <Image src={`https://api.dicebear.com/7.x/notionists/svg?seed=${student.name}`} alt={student.name} width={40} height={40} />
      </div>
      <div className="text-emerald-base text-[8px] font-bold uppercase tracking-wider mb-1">{student.rank} • {student.stream}</div>
      <h4 className="text-gray-900 font-semibold text-[10px] mb-0.5">{student.name}</h4>
      <div className="text-lg font-bold text-gray-900">{student.score}</div>
    </div>
  ));

  return (
    <section id="results" className="relative py-10 bg-transparent">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="text-[9px] font-bold tracking-widest uppercase text-emerald-base mb-1.5">
              A.P. Inter Results 2026
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              Success never stops.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <ScrollReveal delay={0.2}>
            <BorderGlow glowColor="148 100 30" borderRadius={16} className="h-full">
              <div className="bento-card p-5 flex flex-col justify-center items-center text-center h-full hover:border-emerald-200 transition-colors bg-white/70 backdrop-blur-sm border-none !rounded-[16px]">
                <h3 className="text-gray-500 font-medium mb-2 text-[10px] uppercase tracking-wide">Senior Pass Rate</h3>
                <div className="text-3xl md:text-4xl font-bold text-emerald-base tracking-tighter">
                  <CountUp to={95.31} decimals={2} />%
                </div>
              </div>
            </BorderGlow>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <BorderGlow glowColor="148 100 30" borderRadius={16} className="h-full">
              <div className="bento-card p-5 flex flex-col justify-center items-center text-center h-full hover:border-emerald-200 transition-colors bg-white/70 backdrop-blur-sm border-none !rounded-[16px]">
                <h3 className="text-gray-500 font-medium mb-2 text-[10px] uppercase tracking-wide">Junior Pass Rate</h3>
                <div className="text-3xl md:text-4xl font-bold text-emerald-base tracking-tighter">
                  <CountUp to={81.45} decimals={2} />%
                </div>
              </div>
            </BorderGlow>
          </ScrollReveal>
        </div>
        
        <ScrollReveal>
          <div className="text-center mb-5">
            <h3 className="text-base font-bold text-gray-900 mb-0.5">Top Achievers</h3>
            <p className="text-gray-500 text-[10px]">55 Students with 850+ Marks (Sr. MPC)</p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <CircularGallery 
          items={galleryItems} 
          centerElement={
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl ring-4 ring-emerald-50 bg-white">
              <Image src="/images/logo.jpeg" alt="Sri Skanda Logo" width={192} height={192} className="object-cover w-full h-full" />
            </div>
          }
        />
      </ScrollReveal>
    </section>
  );
}
