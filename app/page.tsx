import { HeroSlider } from "@/components/HeroSlider";
import { NavBar } from "@/components/NavBar";
import { InspirationSection } from "@/components/scenes/InspirationSection";
import VisionScene from "@/components/scenes/VisionScene";
import { DirectorsSection } from "@/components/scenes/DirectorsSection";
import EnquiryEngine from "@/components/scenes/EnquiryEngine";

export default function Home() {
  return (
    <main className="relative text-gray-900 bg-[#F9FAFB] min-h-screen">
      <HeroSlider />
      <NavBar />
      <InspirationSection />
      <div className="py-10">
        <VisionScene />
      </div>
      <DirectorsSection />
      <div className="bg-white border-t border-gray-100">
        <EnquiryEngine />
      </div>
      
      {/* Footer logic if there's any, or we can just leave space */}
      <div className="py-20 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Sri Skanda Academy. All rights reserved.
      </div>
    </main>
  );
}
