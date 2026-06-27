"use client";

import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import Masonry from "@/components/react-bits/Masonry";

const activities = [
  "Management Roles",
  "Public Speaking",
  "Presentations",
  "Sports & Culturals",
  "Physical & Mental Fitness",
  "Boosts Self-Confidence",
  "Uncovering Hidden Talents",
];

// Placeholder images for the Masonry gallery to match React Bits aesthetic
const masonryItems = [
  { id: 1, img: "https://picsum.photos/id/1015/600/900?grayscale", height: 400 },
  { id: 2, img: "https://picsum.photos/id/1011/600/750?grayscale", height: 300 },
  { id: 3, img: "https://picsum.photos/id/1020/600/800?grayscale", height: 500 },
  { id: 4, img: "https://picsum.photos/id/1024/600/600?grayscale", height: 300 },
  { id: 5, img: "https://picsum.photos/id/1025/600/900?grayscale", height: 450 },
  { id: 6, img: "https://picsum.photos/id/1029/600/600?grayscale", height: 300 },
  { id: 7, img: "https://picsum.photos/id/1033/600/800?grayscale", height: 400 },
  { id: 8, img: "https://picsum.photos/id/1036/600/700?grayscale", height: 350 },
  { id: 9, img: "https://picsum.photos/id/1039/600/900?grayscale", height: 450 },
];

export default function CampusLife() {
  return (
    <section id="campus" className="relative py-10 bg-transparent">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-[9px] font-bold tracking-widest uppercase text-emerald-base mb-1.5">
              Events & Activities
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-3">
              Our Activities
            </h3>
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Uses of Cultural Activities
            </p>
            
            <ul className="flex flex-wrap justify-center gap-2">
              {activities.map((act, i) => (
                <li key={i} className="flex items-center gap-1.5 bg-white/50 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-gray-100/50">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-emerald-base" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-[10px] font-medium">{act}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
        
        <div className="w-full h-[600px] md:h-[800px] relative mt-8">
          <ScrollReveal delay={0.2} className="w-full h-full">
            <Masonry 
              items={masonryItems} 
              animateFrom="bottom" 
              scaleOnHover={true}
              blurToFocus={true}
            />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
