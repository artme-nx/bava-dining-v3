/**
 * Dappled-light background texture — soft overlapping circles suggesting
 * sunlight filtering through the mulberry canopy onto the terrace. Pure
 * CSS/SVG, no photography.
 */
export function CanopyPattern({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden>
      <div
        className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full opacity-[0.14]"
        style={{
          background:
            "radial-gradient(circle, var(--color-canopy) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -right-32 top-1/3 h-[24rem] w-[24rem] rounded-full opacity-[0.10]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[20rem] w-[20rem] rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, var(--color-canopy) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
