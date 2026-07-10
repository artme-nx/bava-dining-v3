"use client";

import { useEffect, useRef } from "react";

/**
 * Draws-in content marked with [data-reveal] as it scrolls into view.
 *
 * Content is visible by default in the DOM/CSS — nothing is ever hidden
 * unless this effect actually runs and an IntersectionObserver actually
 * fires for that specific element. This deliberately avoids GSAP
 * ScrollTrigger's default `immediateRender` behavior, which sets every
 * target (including ones far below the fold) to opacity:0 the instant the
 * component mounts and only reveals them once the user scrolls past each
 * trigger — that pattern can leave most of the page permanently blank if a
 * trigger's cached position ever drifts after fonts/images load. Driving
 * the same GSAP tween off IntersectionObserver instead means an element is
 * never hidden until the moment it is actually about to be revealed, and a
 * timeout safety net guarantees visibility even if the observer never
 * fires at all.
 */
export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (prefersReduced || !targets.length || typeof IntersectionObserver === "undefined") {
      return;
    }

    let cancelled = false;
    let observer: IntersectionObserver | undefined;

    const revealAll = () => {
      targets.forEach((t) => {
        t.style.opacity = "1";
        t.style.transform = "none";
      });
    };

    (async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled) return;

      targets.forEach((t) => {
        t.style.opacity = "0";
        t.style.transform = "translateY(18px)";
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              overwrite: true,
            });
            observer?.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -5% 0px", threshold: 0.01 },
      );

      targets.forEach((t) => observer?.observe(t));
    })();

    // Safety net: if anything above fails to run (slow chunk load, an
    // observer that never fires, etc.) the content must still end up
    // visible rather than staying blank forever.
    const fallback = window.setTimeout(revealAll, 2500);

    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
      observer?.disconnect();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
