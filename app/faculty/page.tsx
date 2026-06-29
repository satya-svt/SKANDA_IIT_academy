import { NavBar } from "@/components/NavBar";
import FacultyScene from "@/components/scenes/FacultyScene";

export default function FacultyPage() {
  return (
    <main className="relative text-gray-900 bg-[#F9FAFB] min-h-screen">
      <NavBar className="shadow-sm" />
      <div className="pt-10 pb-20">
        <FacultyScene />
      </div>
    </main>
  );
}
