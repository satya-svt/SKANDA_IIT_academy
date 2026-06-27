"use client";

import { useState, useEffect } from "react";

export function PillNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Vision", id: "vision" },
    { name: "Faculty", id: "faculty" },
    { name: "Results", id: "results" },
    { name: "Campus", id: "campus" },
    { name: "Enquiry", id: "enquiry" },
  ];

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] md:w-auto`}>
      <nav className={`flex items-center justify-between gap-1 px-3 py-1.5 rounded-full border transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg shadow-gray-200/50" 
          : "bg-white/50 backdrop-blur-md border-transparent shadow-sm"
      }`}>
        <div className="flex-shrink-0 mr-4 hidden md:block">
          <span className="text-emerald-base font-bold text-[10px] tracking-widest">SKANDA</span>
        </div>
        
        <ul className="flex items-center gap-0.5 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollTo(item.id)}
                className="px-3 py-1.5 text-[10px] font-medium text-gray-600 hover:text-emerald-base hover:bg-gray-100 rounded-full transition-colors whitespace-nowrap"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        
        <button 
          onClick={() => scrollTo("enquiry")}
          className="ml-3 px-4 py-1.5 rounded-full bg-emerald-base text-white text-[10px] font-semibold hover:bg-emerald-light transition-colors shrink-0"
        >
          Join Us
        </button>
      </nav>
    </div>
  );
}
