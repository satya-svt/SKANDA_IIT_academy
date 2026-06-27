"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function PixelCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className={`bento-card relative overflow-hidden transition-colors hover:border-emerald-200 bg-white ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative z-10 h-full w-full">{children}</div>
      
      <motion.div 
        className="absolute inset-0 z-0 opacity-0 pointer-events-none"
        animate={{ opacity: hovered ? 0.04 : 0 }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='4' height='4' fill='%23004B23' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "8px 8px"
        }}
      />
    </div>
  );
}
