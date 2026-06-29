import { NavBar } from "@/components/NavBar";
import VisionScene from "@/components/scenes/VisionScene";

export default function VisionPage() {
  return (
    <main className="relative text-gray-900 bg-[#F9FAFB] min-h-screen">
      <NavBar className="shadow-sm" />
      <div className="pt-10 pb-20">
        <VisionScene />
      </div>
    </main>
  );
}
