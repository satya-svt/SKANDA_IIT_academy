"use client";

import dynamic from "next/dynamic";

const HeroFacade = dynamic(() => import("@/components/scenes/HeroFacade"), { ssr: false });
const VisionScene = dynamic(() => import("@/components/scenes/VisionScene"), { ssr: false });
const FacultyScene = dynamic(() => import("@/components/scenes/FacultyScene"), { ssr: false });
const ResultsVault = dynamic(() => import("@/components/scenes/ResultsVault"), { ssr: false });
const CampusLife = dynamic(() => import("@/components/scenes/CampusLife"), { ssr: false });
const EnquiryEngine = dynamic(() => import("@/components/scenes/EnquiryEngine"), { ssr: false });

import { PillNav } from "@/components/PillNav";

export default function Home() {
  return (
    <main className="relative text-gray-900 bg-[#F9FAFB]">
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      <div className="relative z-10">
        <PillNav />
        <HeroFacade />
      <VisionScene />
      <FacultyScene />
      <ResultsVault />
      <CampusLife />
      <EnquiryEngine />
      </div>
    </main>
  );
}
