import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Chapter } from "@/components/timeline/chapter";

const DETAILS = [
  {
    icon: MapPin,
    label: "Adresa",
    value: "Zlarinski prolaz 1, 22000 Šibenik",
    href: "https://www.google.com/maps/search/?api=1&query=Bava+Dining+%26+More+Zlarinski+prolaz+1+%C5%A0ibenik",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "022 332 601",
    href: "tel:+38522332601",
  },
  {
    icon: Clock,
    label: "Radno vrijeme",
    value: "Svaki dan, 12:00 – 24:00",
  },
  {
    icon: ExternalLink,
    label: "Facebook",
    value: "@bavabistro",
    href: "https://www.facebook.com/bavabistro/",
  },
  {
    icon: ExternalLink,
    label: "Instagram",
    value: "@bava_bistro",
    href: "https://www.instagram.com/bava_bistro/",
  },
];

export function VisitChapter() {
  return (
    <Chapter
      id="ring-05"
      num="05"
      kicker="Zadnji prsten, za sada"
      title="Pronađite stablo"
    >
      <p>
        Stablo je najlakši orijentir — krošnja se vidi prije nego natpis.
        Nalazimo se na rubu stare gradske jezgre Šibenika, blizu crkve sv.
        Nikole i rive.
      </p>

      <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
        {DETAILS.map((d) => (
          <div key={d.label} className="flex items-start gap-3 bg-background p-5">
            <d.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <div>
              <dt className="text-label text-[0.62rem] text-muted-foreground">
                {d.label}
              </dt>
              <dd className="mt-1">
                {d.href ? (
                  <a
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel={d.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:text-accent"
                  >
                    {d.value}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-foreground">
                    {d.value}
                  </span>
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        Radno vrijeme može varirati sezonski — za trenutačnu dostupnost stola
        najbolje je nazvati direktno ili provjeriti Facebook stranicu prije
        dolaska.
      </p>

      <a
        href="tel:+38522332601"
        className="text-label mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[0.68rem] text-foreground transition-colors hover:bg-accent-soft hover:text-background"
      >
        POZOVI ZA STOL — 022 332 601
      </a>
    </Chapter>
  );
}
