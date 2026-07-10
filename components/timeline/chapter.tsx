import { RingMarker } from "@/components/timeline/ring-marker";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

/**
 * One chapter of the story-scroll timeline. Attaches to the shared Spine
 * (rendered once by the parent) via a ring marker aligned to the same
 * horizontal offset as the spine line — a fixed offset kept identical
 * across breakpoints so it always lines up with the spine track, rather
 * than fragile alternating-margin math that only balances at one width.
 *
 * An optional `aside` (decorative motif, stat card or pull-quote) sits
 * beside the text on desktop and can alternate sides per-chapter via
 * `asideSide`, giving the page rhythm without touching the spine itself.
 */
export function Chapter({
  id,
  num,
  kicker,
  title,
  aside,
  asideSide = "right",
  children,
}: {
  id: string;
  num: string;
  kicker: string;
  title: string;
  aside?: React.ReactNode;
  asideSide?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative scroll-mt-20 py-16 pl-14 pr-5 sm:pr-8 md:py-24 md:pl-24 md:pr-10 lg:pr-16"
    >
      <RingMarker
        num={num}
        className="absolute left-6 top-1 -translate-x-1/2"
      />
      <ScrollReveal>
        <div
          data-reveal
          className={cn(
            "md:flex md:items-start md:gap-14",
            asideSide === "left" && "md:flex-row-reverse",
          )}
        >
          <div className="min-w-0 flex-1">
            <p className="text-label mb-3 flex items-center gap-3 text-[0.68rem] text-accent-soft">
              <span>PRSTEN {num}</span>
              <span aria-hidden className="h-px w-8 bg-spine-line" />
              <span>{kicker}</span>
            </p>
            <h2 className="font-display text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.06] text-foreground">
              {title}
            </h2>
            <div className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
              {children}
            </div>
          </div>
          {aside && (
            <div className="mt-10 shrink-0 md:mt-0 md:w-64">{aside}</div>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
