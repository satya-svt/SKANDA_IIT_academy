"use client";

import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import { ScrollFloat } from "@/components/react-bits/ScrollFloat";

const tenets = [
  "జీవిత సవాళ్లను ఎదుర్కొనే ఆత్మవిశ్వాసం.",
  "నైతిక విలువలు, సమాజ బాధ్యతపై అవగాహన.",
  "పెద్ద కలలు కని, గొప్ప విజయాలు సాధించేందుకు తోడ్పాటు.",
];

const advantages = [
  { title: "Experienced IIT/Medical Faculty", desc: "Learn from teachers who have mentored 500+ successful selections", icon: "👨‍🏫" },
  { title: "Personal Mentoring System", desc: "One-on-one guidance for every student's academic journey", icon: "🤝" },
  { title: "Regular Tests & Tracking", desc: "Weekly assessments with detailed performance analytics", icon: "📋" },
  { title: "Parent-Teacher Meetings", desc: "Regular updates and collaborative progress discussions", icon: "👨‍👩‍👦" },
  { title: "Result-Oriented Teaching", desc: "Proven methodology with consistent top ranks every year", icon: "🎯" },
  { title: "Competitive Environment", desc: "Study alongside motivated peers in a success-driven atmosphere", icon: "📈" },
];

const methods = [
  "Concept-based learning approach",
  "Daily practice sessions",
  "Weekly assessments & analysis",
  "Dedicated doubt-clearing sessions",
  "Exam-oriented preparation",
  "Smart study techniques",
];

export default function VisionScene() {
  return (
    <section id="vision" className="relative py-10 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-8">
            <h2 className="text-[10px] font-bold tracking-widest uppercase text-emerald-base mb-1.5">
              Vision of Skanda
            </h2>
            <p className="text-lg md:text-xl font-semibold text-gray-900 leading-snug max-w-2xl mx-auto">
              శ్రీ హర్ష - శ్రీ స్కాండ లో ప్రతి విద్యార్థి ఒక అమూల్య రత్నం అని మేము నమ్ముతున్నాం. సరైన మార్గదర్శకత్వం, ప్రోత్సాహం, మరియు ప్రేమతో నిండిన వాతావరణం ఉంటే, ప్రతి విద్యార్థి తన కలను విజయాలుగా మార్చుగలరు.
            </p>
            <p className="text-gray-600 mt-2 text-sm">మా విజన్ కేవలం పాఠ్యాంశాలతో మాత్రమే పరిమితం కాదు.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-12 gap-5 mb-16 items-center">
          <div className="md:col-span-12 space-y-3 max-w-2xl mx-auto w-full">
            <ScrollReveal>
              <h3 className="text-base font-semibold text-gray-900 mb-3 border-b border-gray-200/50 pb-1.5 text-center">
                మేము ప్రతి విద్యార్థిలో పెంపొందించదలచిన విలువలు:
              </h3>
            </ScrollReveal>

            <div className="flex flex-col gap-3">
              {tenets.map((text, i) => (
                <ScrollFloat key={i}>
                  <div className="bento-card p-4 flex items-start gap-3 hover:border-emerald-200 transition-colors bg-white/70 backdrop-blur-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-base flex items-center justify-center shrink-0 mt-0.5 shadow-sm text-[10px]">
                      {i === 0 ? "🎯" : i === 1 ? "🌱" : "🏆"}
                    </div>
                    <p className="text-xs text-gray-700 font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                </ScrollFloat>
              ))}
            </div>
          </div>
        </div>

        {/* Our Advantage Section */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <ScrollReveal>
                <h2 className="text-[10px] font-bold tracking-widest uppercase text-emerald-base mb-1.5">Our Advantage</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-heading)]">Why Choose Sri Skanda Academy?</h3>
                <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                  We combine traditional teaching values with modern methodologies to create an environment where every student can excel and achieve their dreams.
                </p>
              </ScrollReveal>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {advantages.map((adv, i) => (
                  <ScrollReveal delay={0.1 * i} key={i} className="h-full">
                    <div className="bg-white p-5 rounded-2xl shadow-sm ring-1 ring-gray-100 hover:shadow-md hover:ring-emerald-200 transition-all h-full flex flex-col">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-base flex items-center justify-center mb-4">
                        <span className="text-xl">{adv.icon}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm mb-2">{adv.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed flex-1">{adv.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 h-full mt-8 md:mt-0">
              <ScrollReveal delay={0.4} className="h-full">
                <div className="bg-emerald-base h-full rounded-[2rem] p-8 md:p-10 text-white shadow-xl flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] mb-8 relative z-10">
                    Our Teaching Method
                  </h3>
                  
                  <ul className="space-y-6 relative z-10">
                    {methods.map((method, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gold-warm text-emerald-deep flex items-center justify-center shrink-0 font-bold text-sm shadow-sm">
                          {i + 1}
                        </div>
                        <span className="font-medium text-emerald-50 text-sm md:text-base">{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
