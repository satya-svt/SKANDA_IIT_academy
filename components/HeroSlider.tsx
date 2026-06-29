"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://picsum.photos/id/1015/1920/1080?grayscale",
  "https://picsum.photos/id/1020/1920/1080?grayscale",
  "https://picsum.photos/id/1025/1920/1080?grayscale",
  "https://picsum.photos/id/1029/1920/1080?grayscale"
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-black">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slide ${index}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        >
          Sri Skanda IIT Academy
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl"
        >
          Shaping the future with discipline, knowledge, and integrity.
        </motion.p>
      </div>
    </div>
  );
}
