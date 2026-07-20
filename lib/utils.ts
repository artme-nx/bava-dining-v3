import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Static export + basePath gotcha: next/image does NOT automatically
 * prepend `basePath` to a local `src` (only next/link does that for
 * hrefs). Without this, any local image would 404 once deployed under
 * /bava-dining-v3/ on GitHub Pages while working fine in dev. Mirrors the
 * basePath logic in next.config.ts exactly.
 */
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/bava-dining-v3" : "";

export function assetPath(path: string) {
  return `${BASE_PATH}${path}`;
}

/**
 * The chronological spine of the page. Each entry is one "ring" the
 * timeline attaches to — mirrors both the growth rings of the 300-year-old
 * mulberry the restaurant sits under, and the chapters of its story.
 * Shared by the spine navigation, the mobile drawer, and each section's
 * anchor id.
 */
export const RINGS = [
  { id: "ring-00", num: "00", short: "Bava", title: "Naslovnica" },
  { id: "ring-01", num: "01", short: "Stablo", title: "Murva nad terasom" },
  { id: "ring-02", num: "02", short: "Kut", title: "Kut starog grada" },
  { id: "ring-03", num: "03", short: "Stol", title: "Ono što raste na obali" },
  { id: "ring-04", num: "04", short: "Glasovi", title: "Gdje se gosti vraćaju" },
  { id: "ring-05", num: "05", short: "Posjet", title: "Pronađite stablo" },
] as const;
