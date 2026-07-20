import { Chapter } from "@/components/timeline/chapter";
import { MulberryBranch } from "@/components/motifs/mulberry-branch";
import { Photo } from "@/components/photo";

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

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
        <Photo src="/img/bava-terasa-pjaceta.webp" alt="Terasa Bave na pjaceti" width={1200} height={800} className="aspect-[4/3]" sizes="(min-width: 768px) 28vw, 45vw" />
        <Photo src="/img/bava-terasa-stablo-vecer.webp" alt="Terasa pod murvom navečer" width={972} height={648} className="aspect-[4/3]" sizes="(min-width: 768px) 28vw, 45vw" />
        <Photo src="/img/bava-interijer-sala.webp" alt="Unutrašnjost Bave" width={1000} height={1500} className="aspect-[4/3]" sizes="(min-width: 768px) 28vw, 45vw" />
        <Photo src="/img/bava-interijer-prozori.webp" alt="Unutrašnjost Bave, prozori prema ulici" width={1200} height={800} className="aspect-[4/3]" sizes="(min-width: 768px) 28vw, 45vw" />
        <Photo src="/img/bava-vinska-vitrina.webp" alt="Vinska vitrina" width={1000} height={1500} className="aspect-[4/3]" sizes="(min-width: 768px) 28vw, 45vw" />
        <Photo src="/img/bava-eksterijer-sumrak.webp" alt="Bava u sumrak, Zlarinski prolaz" width={1200} height={800} className="aspect-[4/3]" sizes="(min-width: 768px) 28vw, 45vw" />
      </div>
    </Chapter>
  );
}
