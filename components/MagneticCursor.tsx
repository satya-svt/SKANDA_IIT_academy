"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  // Removed unused pos ref
  const mouse = useRef({ x: 0, y: 0 });
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xDotTo = gsap.quickTo(dot, "x", {
      duration: 0.15,
      ease: "power2.out",
    });
    const yDotTo = gsap.quickTo(dot, "y", {
      duration: 0.15,
      ease: "power2.out",
    });
    const xRingTo = gsap.quickTo(ring, "x", {
      duration: 0.5,
      ease: "power3.out",
    });
    const yRingTo = gsap.quickTo(ring, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      xDotTo(e.clientX);
      yDotTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);

      if (textRef.current) {
        gsap.quickTo(textRef.current, "x", {
          duration: 0.5,
          ease: "power3.out",
        })(e.clientX);
        gsap.quickTo(textRef.current, "y", {
          duration: 0.5,
          ease: "power3.out",
        })(e.clientY);
      }
    };

    // Magnetic effect for interactive elements
    const magneticElements = document.querySelectorAll("[data-magnetic]");
    const hoverTextElements = document.querySelectorAll("[data-cursor-text]");
    const ctaElements = document.querySelectorAll("[data-cursor-cta]");

    const handleMagneticEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      el.addEventListener("mousemove", handleMagneticMove as EventListener);
    };

    const handleMagneticMove = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      const { left, top, width, height } = el.getBoundingClientRect();
      const dx = e.clientX - (left + width / 2);
      const dy = e.clientY - (top + height / 2);
      gsap.to(el, {
        x: dx * 0.25,
        y: dy * 0.25,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleMagneticLeave = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      el.removeEventListener("mousemove", handleMagneticMove as EventListener);
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    };

    magneticElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMagneticEnter);
      el.addEventListener("mouseleave", handleMagneticLeave);
    });

    // Text hover
    hoverTextElements.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        document.body.classList.add("cursor-hover-text")
      );
      el.addEventListener("mouseleave", () =>
        document.body.classList.remove("cursor-hover-text")
      );
    });

    // CTA hover
    ctaElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover-cta");
      });
      el.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover-cta");
      });
    });

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      magneticElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMagneticEnter);
        el.removeEventListener("mouseleave", handleMagneticLeave);
      });
    };
  }, []);

  if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={textRef} className="cursor-text">
        Explore
      </div>
    </>
  );
}
