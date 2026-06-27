"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import { ProfileCard } from "@/components/react-bits/ProfileCard";
import { PixelCard } from "@/components/react-bits/PixelCard";

const executives = [
  { name: "U. Venkata Ramayya", role: "Chairman & Principal", qual: "M.Com, M.A, B.Ed", exp: "23 Years Excellence in Sanskrit", init: "UV" },
  { name: "Esarapu Swamy", role: "Secretary & Correspondent", qual: "M.Tech (Thermal)", exp: "10 Years Excellence in Corporate Sector", init: "ES" },
  { name: "N. Padda Raju", role: "Admin. Gen. Manager", qual: "M.A (Lit)", exp: "18 Years Excellence in Corporate Sector", init: "NP" },
];

const departments = {
  "Mathematics": [
    { name: "S. Kondababu", role: "M.Sc, B.Ed, 9 Years Experience" },
    { name: "N. Anil Kumar", role: "Lecturer in Maths" },
    { name: "A. Suryanarayana", role: "M.Sc, B.Ed" },
  ],
  "Physics": [
    { name: "K. Bala Subrahmanyam", role: "15 Years Experience" },
    { name: "K. Vijay Kumar", role: "M.Sc (Ed), 15 Years Experience" },
    { name: "Marri Pavan", role: "M.Sc, B.Ed" },
  ],
  "Chemistry": [
    { name: "Gantasala Devi", role: "M.Sc (Ed), 11 Years Experience" },
    { name: "Dakavarrapu Raju", role: "Lecturer in Chemistry" },
    { name: "Ch. Appababu", role: "M.Sc, B.Ed" },
  ],
};

export default function FacultyScene() {
  const [activeTab, setActiveTab] = useState<keyof typeof departments>("Mathematics");

  return (
    <section id="faculty" className="relative py-10 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="text-[9px] font-bold tracking-widest uppercase text-emerald-base mb-1.5">
              Hall of Leaders
            </h2>
            <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              The Fortress of Success
            </p>
          </div>
        </ScrollReveal>

        {/* Executive Board */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {executives.map((exec, i) => (
            <ScrollReveal key={exec.name} delay={i * 0.1}>
              <ProfileCard 
                name={exec.name} 
                role={exec.role} 
                qualification={exec.qual} 
                experience={exec.exp} 
                initials={exec.init} 
                className="h-full !p-4 bg-white/70 backdrop-blur-sm shadow-sm border border-gray-100"
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Department Tabs */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-1.5 mb-5">
            {(Object.keys(departments) as Array<keyof typeof departments>).map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveTab(dept)}
                className={`px-3 py-1 rounded-full text-[10px] font-medium transition-colors ${
                  activeTab === dept 
                    ? "bg-emerald-base text-white shadow-sm" 
                    : "bg-white/60 backdrop-blur-sm text-gray-600 hover:text-emerald-base border border-gray-200/50"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-2xl mx-auto">
            {departments[activeTab].map((faculty, i) => (
              <PixelCard key={`${activeTab}-${i}`}>
                <div className="p-3 text-center bg-white/60 backdrop-blur-sm h-full flex flex-col justify-center">
                  <h4 className="text-gray-900 text-[11px] font-semibold mb-0.5">{faculty.name}</h4>
                  <p className="text-gray-500 text-[9px]">{faculty.role}</p>
                </div>
              </PixelCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
