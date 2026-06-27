"use client";
import React from "react";
import BorderGlow from "@/components/react-bits/BorderGlow";

export function ProfileCard({
  name,
  role,
  qualification,
  experience,
  initials,
  className = "",
}: {
  name: string;
  role: string;
  qualification?: string;
  experience?: string;
  initials: string;
  className?: string;
}) {
  return (
    <BorderGlow glowColor="16 185 129" borderRadius={12} className="h-full">
      <div className={`bento-card p-6 flex flex-col items-center text-center transition-colors hover:border-emerald-200 h-full ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-50 mb-4 flex items-center justify-center text-emerald-base font-bold text-lg border border-emerald-100">
          {initials}
        </div>
        <h4 className="text-gray-900 font-semibold text-lg">{name}</h4>
        <p className="text-emerald-base font-medium text-sm mt-1">{role}</p>
        
        {(qualification || experience) && <div className="w-8 h-[1px] bg-gray-200 my-4" />}
        
        {qualification && <p className="text-gray-500 text-xs">{qualification}</p>}
        {experience && <p className="text-gray-500 text-xs mt-1">{experience}</p>}
      </div>
    </BorderGlow>
  );
}
