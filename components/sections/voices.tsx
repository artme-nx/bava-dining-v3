import { Quote } from "lucide-react";
import { Chapter } from "@/components/timeline/chapter";
import { TreeRingStat } from "@/components/motifs/tree-ring-stat";

const REVIEWS = [
  {
    quote:
      "The octopus stew is a must! The tuna steak was perfectly prepared and the fish was fresh.",
    source: "gost, TripAdvisor",
  },
  {
    quote:
      "Brilliant spot under a large shady mulberry tree and with a lovely breeze.",
    source: "gost, TripAdvisor",
  },
  {
    quote: "Most easily the best truffle burger I've ever had.",
    source: "gost, TripAdvisor",
  },
  {
    quote:
      "Fresh fish, perfectly balanced flavors, and each dish is simply delicious. A must-visit spot!",
    source: "gost, recenzija",
  },
];

export function VoicesChapter() {
  return (
    <Chapter
      id="ring-04"
      num="04"
      kicker="Nakon što gosti odu"
      title="Gdje se ljudi vraćaju"
      asideSide="left"
      aside={<TreeRingStat value="4.7 / 5" label="TripAdvisor i Google, 200+ recenzija" />}
    >
      <p>
        Ocjena od 4,7 na TripAdvisoru i Googleu, uz više od dvjesto
        recenzija, ne govori puno sama za sebe — pa evo što gosti stvarno
        pišu.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {REVIEWS.map((r) => (
          <blockquote
            key={r.quote}
            className="rounded-md border border-border bg-card p-5"
          >
            <Quote className="mb-2 h-4 w-4 text-accent" aria-hidden />
            <p className="text-sm leading-relaxed text-foreground/90">
              &ldquo;{r.quote}&rdquo;
            </p>
            <footer className="text-label mt-3 text-[0.6rem] text-muted-foreground">
              — {r.source}
            </footer>
          </blockquote>
        ))}
      </div>
    </Chapter>
  );
}
