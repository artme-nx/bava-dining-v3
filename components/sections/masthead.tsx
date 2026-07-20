import { RingMarker } from "@/components/timeline/ring-marker";
import { CanopyPattern } from "@/components/motifs/canopy-pattern";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Photo } from "@/components/photo";

/**
 * Ring 00 — the opening of the story-scroll, not a conventional hero:
 * it sits at the very top of the same spine every later chapter attaches
 * to, using the same left-offset ring marker, just with the full title
 * treatment.
 */
export function Masthead() {
  return (
    <section
      id="ring-00"
      className="relative scroll-mt-20 overflow-hidden py-24 pl-14 pr-5 pt-32 sm:pr-8 md:py-32 md:pl-24 md:pr-10 md:pt-40 lg:pr-16"
    >
      <CanopyPattern />
      <RingMarker num="00" className="absolute left-6 top-1 -translate-x-1/2" />
      <ScrollReveal>
        <div data-reveal className="relative max-w-3xl">
          <p className="text-label mb-5 text-[0.7rem] text-accent-soft">
            STARI GRAD ŠIBENIK · ZLARINSKI PROLAZ 1
          </p>
          <h1 className="font-display text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.98] text-foreground">
            Bava
            <br />
            Dining &amp; More
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Terasa u hladu velike murve, na rubu stare gradske jezgre,
            nekoliko koraka od rive. Priča koja slijedi ide istim redom kojim
            je i sama nastala — od stabla, do kuta, do stola.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="tel:+38522332601"
              className="text-label inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[0.68rem] text-foreground transition-colors hover:bg-accent-soft hover:text-background"
            >
              POZOVI ZA STOL — 022 332 601
            </a>
            <a
              href="#ring-01"
              className="text-label inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-[0.68rem] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              PRATI PRSTEN NADOLJE ↓
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
            <div>
              <div className="font-display text-2xl text-foreground">4,7 / 5</div>
              <div className="text-label text-[0.62rem] text-muted-foreground">
                1.058 Google recenzija
              </div>
            </div>
            <div>
              <div className="font-display text-2xl text-foreground">#9</div>
              <div className="text-label text-[0.62rem] text-muted-foreground">
                od 166 restorana u Šibeniku, TripAdvisor
              </div>
            </div>
            <div>
              <div className="font-display text-2xl text-foreground">12–24h</div>
              <div className="text-label text-[0.62rem] text-muted-foreground">
                otvoreno svaki dan
              </div>
            </div>
          </div>

          {/* Pročelje s naslikanim wordmarkom — ujedno potvrda identiteta */}
          <Photo
            src="/img/bava-eksterijer-zlarinski-prolaz.webp"
            alt="Pročelje Bave s naslikanim natpisom, Zlarinski prolaz 1, Šibenik"
            width={1530}
            height={1020}
            priority
            sizes="(min-width: 768px) 60vw, 92vw"
            className="mt-12 aspect-[3/2]"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
