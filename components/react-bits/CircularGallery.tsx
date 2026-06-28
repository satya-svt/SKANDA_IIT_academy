"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function CircularGallery({
  items,
  className = "",
}: {
  items: React.ReactNode[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Rotate the entire gallery based on scroll
  const rotation = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const inverseRotation = useTransform(rotation, (r) => -r);

  return (
    <div ref={containerRef} className={`relative h-[600px] w-full flex items-center justify-center overflow-hidden ${className}`}>
      <motion.div 
        style={{ rotate: rotation }} 
        className="relative w-[800px] h-[800px] flex items-center justify-center"
      >
        {items.map((item, i) => {
          const angle = (i / items.length) * 360;
          return (
            <div 
              key={i}
              className="absolute origin-center flex items-center justify-center"
              style={{
                transform: `rotate(${angle}deg) translateY(-250px) rotate(-${angle}deg)`,
              }}
            >
              {/* Counter rotate the item so it stays upright relative to the rotating parent */}
              <motion.div style={{ rotate: inverseRotation }}>
                {item}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
