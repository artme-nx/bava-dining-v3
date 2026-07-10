/**
 * Line-art mulberry (murva) branch — leaves and a cluster of dark
 * blackberry-like fruit, the tree's own coloring, echoed as the site's
 * accent. Decorative, purely CSS-drawn (no photography, no stock assets).
 */
export function MulberryBranch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 260"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d="M110 10 C104 60 118 100 100 150 C86 188 112 220 104 250"
        className="text-canopy"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M100 150 C70 140 50 120 34 128"
        className="text-canopy"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M104 190 C132 182 150 160 168 166"
        className="text-canopy"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* leaves */}
      {[
        { x: 40, y: 118, r: -18 },
        { x: 68, y: 96, r: 8 },
        { x: 150, y: 150, r: 12 },
        { x: 178, y: 160, r: -10 },
        { x: 92, y: 70, r: -6 },
        { x: 60, y: 210, r: 14 },
        { x: 118, y: 236, r: -8 },
      ].map((leaf, i) => (
        <ellipse
          key={i}
          cx={leaf.x}
          cy={leaf.y}
          rx="16"
          ry="9"
          transform={`rotate(${leaf.r} ${leaf.x} ${leaf.y})`}
          className="text-canopy-soft"
          fill="currentColor"
          opacity="0.35"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
      {/* mulberry fruit cluster */}
      {[
        { x: 108, y: 40, r: 4 },
        { x: 116, y: 46, r: 3.5 },
        { x: 106, y: 50, r: 3 },
        { x: 100, y: 172, r: 4 },
        { x: 92, y: 178, r: 3.5 },
        { x: 98, y: 186, r: 3 },
        { x: 158, y: 174, r: 3.5 },
        { x: 166, y: 180, r: 3 },
      ].map((berry, i) => (
        <circle
          key={i}
          cx={berry.x}
          cy={berry.y}
          r={berry.r}
          className="text-accent"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
