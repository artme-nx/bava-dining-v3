import { Fish, Soup, Utensils, Leaf } from "lucide-react";
import { Chapter } from "@/components/timeline/chapter";

const DISHES = [
  {
    name: "Hobotnica u gulašu",
    note: "jelo koje gosti najčešće izdvajaju kao must-try",
  },
  { name: "Tuna odrezak", note: "svježa riba, kratko pripremljena" },
  { name: "Tjestenina s tartufima", note: "ručno rađena, s naribanim tartufom" },
  { name: "Burger s tartufima", note: "gosti ga opisuju kao najbolji koji su probali" },
  { name: "Rižoto s dagnjama i kozicama", note: "plodovi mora s obale" },
  { name: "Janjeći kotleti", note: "s roštilja" },
  { name: "Lignje", note: "jednostavno, na dalmatinski način" },
  { name: "Bava burger", note: "kućna varijanta klasika" },
];

const TAGS = [
  { icon: Fish, label: "Plodovi mora" },
  { icon: Soup, label: "Dalmatinska kuhinja" },
  { icon: Utensils, label: "Mediteranska kuhinja" },
  { icon: Leaf, label: "Vegetarijanske opcije" },
];

export function TableChapter() {
  return (
    <Chapter
      id="ring-03"
      num="03"
      kicker="Ono što raste na obali"
      title="Kuhinja koja ne mora dokazivati ništa"
      aside={
        <ul className="space-y-4">
          {TAGS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      }
    >
      <p>
        Jelovnik je mediteranski i dalmatinski, s naglaskom na plodove mora —
        bez nepotrebnih zaokreta. Porcije su velike, a gosti u recenzijama
        najčešće spominju istu šačicu jela.
      </p>

      <ul className="mt-6 space-y-4 border-t border-border pt-6">
        {DISHES.map((d) => (
          <li key={d.name} className="flex flex-col gap-0.5">
            <span className="text-foreground">{d.name}</span>
            <span className="text-sm text-muted-foreground">{d.note}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-muted-foreground">
        Cijene su u srednje-višem rangu za stari grad — za trenutačni jelovnik
        i cijene najbolje je provjeriti direktno prije dolaska.
      </p>
    </Chapter>
  );
}
