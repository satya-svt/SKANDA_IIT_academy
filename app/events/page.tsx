import { NavBar } from "@/components/NavBar";
import CampusLife from "@/components/scenes/CampusLife";

export default function EventsPage() {
  return (
    <main className="relative text-gray-900 bg-[#F9FAFB] min-h-screen">
      <NavBar className="shadow-sm" />
      <div className="pt-10 pb-20">
        <CampusLife />
      </div>
    </main>
  );
}
