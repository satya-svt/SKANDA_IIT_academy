"use client";

import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import { ScrollFloat } from "@/components/react-bits/ScrollFloat";

const tenets = [
  "జీవిత సవాళ్లను ఎదుర్కొనే ఆత్మవిశ్వాసం.",
  "నైతిక విలువలు, సమాజ బాధ్యతపై అవగాహన.",
  "పెద్ద కలలు కని, గొప్ప విజయాలు సాధించేందుకు తోడ్పాటు.",
];

export default function VisionScene() {
  return (
    <section id="vision" className="relative py-10 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        <div className="grid md:grid-cols-12 gap-5 mb-8 items-center">
          
          <div className="md:col-span-12 space-y-3 max-w-2xl mx-auto">
            <ScrollReveal>
              <h3 className="text-base font-semibold text-gray-900 mb-3 border-b border-gray-200/50 pb-1.5">
                మేము ప్రతి విద్యార్థిలో పెంపొందించదలచిన విలువలు:
              </h3>
            </ScrollReveal>

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
    </section>
  );
}
