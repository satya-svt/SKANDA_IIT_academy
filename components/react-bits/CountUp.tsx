"use client";
import { useEffect, useRef } from "react";
import { useInView, useSpring, useTransform, motion } from "framer-motion";

export function CountUp({
  to,
  duration = 2,
  className = "",
  decimals = 0,
}: {
  to: number;
  duration?: number;
  className?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const displayValue = useTransform(springValue, (current) => 
    current.toFixed(decimals)
  );
  
  useEffect(() => {
    if (inView) {
      springValue.set(to);
    }
  }, [inView, to, springValue]);

  return <motion.span ref={ref} className={className}>{displayValue}</motion.span>;
}
