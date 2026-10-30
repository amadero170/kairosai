import React from "react";

// Kairos wordmark: spaced "KAIROS" inside a thin double ring, as in the brand logo.
// Sized by font-size, so `className="text-[17px]"` scales the whole mark.
export default function KairosLogo({
  subtitle = false,
  className = "",
}: {
  subtitle?: boolean;
  className?: string;
}) {
  return (
    <span className={`relative inline-flex flex-col items-center font-display text-ink ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2.9em] h-[2.9em] text-muted-2 overflow-visible"
      >
        <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
        <circle cx="52" cy="49" r="45.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      </svg>
      <span className="relative font-semibold tracking-[0.38em] mr-[-0.38em] leading-none">KAIROS</span>
      {subtitle && (
        <span className="relative mt-[0.45em] text-[0.34em] font-medium tracking-[0.34em] mr-[-0.34em] text-ink-2 leading-none whitespace-nowrap">
          AI &amp; SOFTWARE STUDIO
        </span>
      )}
    </span>
  );
}
