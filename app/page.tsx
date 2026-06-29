import { HeroSlider } from "@/components/HeroSlider";
import { NavBar } from "@/components/NavBar";
import { InspirationSection } from "@/components/scenes/InspirationSection";

export default function Home() {
  return (
    <main className="relative text-gray-900 bg-[#F9FAFB] min-h-screen">
      <HeroSlider />
      <NavBar />
      <InspirationSection />
      
      {/* Footer logic if there's any, or we can just leave space */}
      <div className="py-20 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Sri Skanda Academy. All rights reserved.
      </div>
    </main>
  );
}
