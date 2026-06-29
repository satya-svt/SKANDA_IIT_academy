"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const navItems = [
    { name: "Home", href: "/" },
    { name: "Vision", href: "/vision" },
    { name: "Faculty", href: "/faculty" },
    { name: "Results", href: "/results" },
    { name: "Events", href: "/events" },
  ];

  return (
    <div className={`w-full bg-white border-b border-gray-100 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-emerald-base font-bold text-xl tracking-widest">
               SKANDA
            </Link>
          </div>
          
          <ul className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? "text-emerald-base font-semibold" : "text-gray-600 hover:text-emerald-base"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className="hidden md:block">
            <Link 
              href="/enquiry"
              className="px-6 py-2.5 rounded-full bg-emerald-base text-white text-sm font-semibold hover:bg-emerald-light transition-colors"
            >
              Admissions
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.href ? "bg-emerald-50 text-emerald-base" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/enquiry"
            onClick={() => setIsMenuOpen(false)}
            className="block mt-4 text-center px-6 py-3 rounded-md bg-emerald-base text-white text-base font-medium"
          >
            Admissions
          </Link>
        </div>
      )}
    </div>
  );
}
