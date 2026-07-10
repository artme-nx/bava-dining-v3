import { Chapter } from "@/components/timeline/chapter";
import { MulberryBranch } from "@/components/motifs/mulberry-branch";

export function CornerChapter() {
  return (
    <Chapter
      id="ring-02"
      num="02"
      kicker="Gdje sjena pada"
      title="Kut starog grada, uz samu rivu"
      asideSide="left"
      aside={
        <MulberryBranch className="mx-auto h-56 w-48 opacity-90 md:mx-0" />
      }
    >
      <p>
        Bava Dining &amp; More smjestila se točno tamo gdje ta sjena pada —
        Zlarinski prolaz 1, na rubu stare gradske jezgre, samo nekoliko
        koraka od morske rive. Terasa je mala i prisna, uklopljena pod
        krošnju, s dovoljno mjesta da se osjeti kao dio ulice, ne odvojeno od
        nje.
      </p>
      <p className="mt-4">
        Ljeti krošnja murve drži hlad i kad je grad najvreliji. Kad zahladi,
        gosti ostaju na dekama i uz vanjske grijalice — terasa se ne zatvara
        s prvim jesenskim danima, samo se drugačije uredi.
      </p>
      <p className="mt-4">
        Gosti taj ugođaj najčešće opisuju istom riječi: miran. Pažljivo,
        prisutno osoblje i kut u kojem se ne žuri.
      </p>
    </Chapter>
  );
}
