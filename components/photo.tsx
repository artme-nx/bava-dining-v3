import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * `images.unoptimized` bypasses the Next image loader, and with it the
 * automatic basePath prefix — the _next/ chunks get "/bava-dining-v3/"
 * but the image src would stay at "/img/…" and 404 on Pages. Mirror the
 * basePath from next.config here so both resolve under the same root.
 */
const BASE = process.env.NODE_ENV === "production" ? "/bava-dining-v3" : "";

/**
 * A photograph in the timeline's visual grammar: same rounded-md border
 * treatment as the chapter cards, so images read as part of the spine
 * rather than pasted onto it. Every photo on this site is the venue's own
 * (professional shoot, sourced from their DISH/eatbu profile) — no stock.
 */
export function Photo({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "(min-width: 768px) 30vw, 90vw",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-md border border-border bg-card",
        className,
      )}
    >
      <Image
        src={`${BASE}${src}`}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="h-full w-full object-cover"
      />
    </figure>
  );
}
