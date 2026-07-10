"use client";

import { useState } from "react";
import { RINGS } from "@/lib/utils";
import { cn } from "@/lib/utils";

/**
 * Slim persistent top bar (not a conventional hero-nav) plus a full-screen
 * mobile drawer listing every ring of the timeline.
 *
 * IMPORTANT: the mobile drawer is rendered as a SIBLING of the header bar,
 * not nested inside it — a backdrop-blur/transform on an ancestor traps a
 * fixed-position child inside its own stacking/containing-block context,
 * which breaks full-viewport overlays on mobile. Keeping them siblings
 * avoids that trap. (See site-header-mobile-nav-bug lesson.)
 */
export function SiteChrome() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/90 px-5 backdrop-blur-sm sm:px-8">
        <a href="#ring-00" className="flex flex-col leading-none">
          <span className="font-display text-lg text-foreground">Bava</span>
          <span className="text-label text-[0.6rem] text-muted-foreground">
            Dining &amp; More
          </span>
        </a>

        {/* Desktop: ring index as small numbered dots */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Prstenovi priče"
        >
          {RINGS.map((r) => (
            <a
              key={r.id}
              href={`#${r.id}`}
              title={r.title}
              className="text-label group flex h-9 w-9 items-center justify-center rounded-full border border-border text-[0.62rem] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {r.num}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="ring-drawer"
          className="text-label flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[0.62rem] text-foreground md:hidden"
        >
          <span aria-hidden>≡</span>
          PRSTENOVI
        </button>

        <a
          href="tel:+38522332601"
          className="text-label hidden items-center gap-2 rounded-full border border-accent px-4 py-2 text-[0.62rem] text-accent-soft transition-colors hover:bg-accent hover:text-foreground md:flex"
        >
          REZERVIRAJ STOL
        </a>
      </header>

      {/* Mobile drawer — sibling of the header above, not a child */}
      <div
        id="ring-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Prstenovi priče"
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-background transition-transform duration-300 ease-out md:hidden",
          open ? "translate-x-0" : "translate-x-full pointer-events-none",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <span className="font-display text-lg text-foreground">Bava</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-label rounded-full border border-border px-3 py-1.5 text-[0.62rem]"
          >
            ZATVORI ✕
          </button>
        </div>
        <nav className="flex flex-1 flex-col overflow-y-auto">
          {RINGS.map((r) => (
            <a
              key={r.id}
              href={`#${r.id}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-4 border-b border-border px-5 py-5"
            >
              <span className="text-label text-sm text-accent">
                PRSTEN {r.num}
              </span>
              <span className="font-display text-lg text-foreground">
                {r.title}
              </span>
            </a>
          ))}
        </nav>
        <div className="border-t border-border px-5 py-4 text-[0.72rem] text-muted-foreground">
          Zlarinski prolaz 1, Šibenik — 022 332 601
        </div>
      </div>
    </>
  );
}
