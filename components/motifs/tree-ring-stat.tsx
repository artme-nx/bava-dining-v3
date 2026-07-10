/**
 * A stat framed inside concentric growth rings — the same visual grammar
 * as the timeline's ring markers, scaled up. Used to surface real numbers
 * (the tree's age, the TripAdvisor rating) without resorting to photos.
 */
export function TreeRingStat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative flex aspect-square items-center justify-center ${className ?? ""}`}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full text-spine-line" fill="none">
        <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="36" className="text-accent-dim" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="16" className="text-accent" stroke="currentColor" strokeWidth="2" />
      </svg>
      <div className="relative flex flex-col items-center text-center">
        <span className="font-display text-[clamp(1.6rem,3.4vw,2.5rem)] leading-none text-foreground">
          {value}
        </span>
        <span className="text-label mt-2 text-[0.6rem] text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}
