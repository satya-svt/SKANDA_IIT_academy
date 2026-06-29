import { NavBar } from "@/components/NavBar";
import EnquiryEngine from "@/components/scenes/EnquiryEngine";

export default function EnquiryPage() {
  return (
    <main className="relative text-gray-900 bg-[#F9FAFB] min-h-screen">
      <NavBar className="shadow-sm" />
      <div className="pt-10 pb-20">
        <EnquiryEngine />
      </div>
    </main>
  );
}
