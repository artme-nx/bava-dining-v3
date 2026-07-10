"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * The vertical spine the whole page's story attaches to — a single
 * continuous line running down the timeline wrapper, filled in
 * murva-accent color as the user scrolls (a growth-ring / sap-rising
 * motion signature distinct from the rest of the fleet).
 *
 * The static track (--color-spine-line) is always fully visible by CSS
 * alone. Only the accent fill is scroll-driven, and it starts at a small
 * non-zero height (see .spine-fill in globals.css) so nothing depends on
 * JS running for the page to look complete — GSAP only enhances it.
 */
export function Spine({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const fill = fillRef.current;
    if (!wrapper || !fill) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      fill.style.height = "100%";
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top center",
      end: "bottom bottom",
      scrub: 0.4,
      onUpdate: (self) => {
        fill.style.height = `${Math.max(self.progress * 100, 4)}%`;
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <div
        className="pointer-events-none absolute top-0 bottom-0 left-6 w-[2px] bg-spine-line"
        aria-hidden
      />
      <div
        ref={fillRef}
        className="spine-fill pointer-events-none absolute top-0 left-6 w-[2px] bg-accent shadow-[0_0_12px_var(--accent-dim)]"
        aria-hidden
      />
      {children}
    </div>
  );
}
