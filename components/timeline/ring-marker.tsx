/**
 * A numbered marker styled after a tree's cross-section growth rings —
 * concentric circles with the chapter number at the centre. Sits on the
 * spine at the top of each chapter. `active` (the ring currently in the
 * murva/accent color) is a purely visual variant set per-section; there is
 * no scroll-spy JS wiring it to real scroll position, keeping it robust.
 */
export function RingMarker({
  num,
  className,
}: {
  num: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-11 w-11 shrink-0 items-center justify-center ${className ?? ""}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 44 44"
        className="absolute inset-0 h-full w-full text-spine-line"
        fill="none"
      >
        <circle cx="22" cy="22" r="20.5" stroke="currentColor" strokeWidth="1" />
        <circle cx="22" cy="22" r="15" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="22" cy="22" r="9" className="text-accent" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-label relative text-[0.62rem] text-foreground">
        {num}
      </span>
    </div>
  );
}
