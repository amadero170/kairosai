"use client";

import React, { useEffect, useRef, useState } from "react";

// Fade-and-rise on scroll, shared by the home sections.
// Content is visible in the server HTML; only blocks still below the fold after
// hydration are hidden and then revealed, so nothing depends on JS to be seen.
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const motion =
    state === "hidden"
      ? "opacity-0 translate-y-5"
      : state === "shown"
        ? "opacity-100 translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        : "";

  return (
    <div
      ref={ref}
      className={`${motion} ${className}`}
      style={state === "shown" && delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
