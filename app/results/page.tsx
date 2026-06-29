import { NavBar } from "@/components/NavBar";
import ResultsVault from "@/components/scenes/ResultsVault";

export default function ResultsPage() {
  return (
    <main className="relative text-gray-900 bg-[#F9FAFB] min-h-screen">
      <NavBar className="shadow-sm" />
      <div className="pt-10 pb-20">
        <ResultsVault />
      </div>
    </main>
  );
}
