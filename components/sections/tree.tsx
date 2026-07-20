import { Chapter } from "@/components/timeline/chapter";
import { Photo } from "@/components/photo";

/**
 * Ring 01 — the tree. The tree itself is verified: it is visible in the
 * venue's own photographs and guests name it unprompted in reviews
 * ("a large shady mulberry tree"). Its AGE is not: no owner source states
 * it, and the "oldest tree in Šibenik" superlative appears only on
 * aggregators. The truth pass struck both, so this chapter carries the
 * shade — which is real — and makes no claim about centuries.
 */
export function TreeChapter() {
  return (
    <Chapter
      id="ring-01"
      num="01"
      kicker="Prije nego što je Bava postojala"
      title="Murva koja je bila ovdje prva"
      aside={
        <Photo
          src="/img/bava-terasa-pod-stablom.webp"
          alt="Terasa Bave u hladu murve, Zlarinski prolaz, Šibenik"
          width={972}
          height={648}
        />
      }
    >
      <p>
        Na uglu stare gradske jezgre, korak od rive, raste velika bijela
        murva. Krošnja je toliko široka da pod njom stane cijeli taj kut
        ulice — i upravo je ta sjena razlog zašto se ovdje uopće sjeda.
      </p>
      <p className="mt-4">
        Stablo je starije od lokala i ostalo je netaknuto kad je terasa
        posložena oko njega. Stolovi su smješteni tamo gdje sjena pada, a ne
        obrnuto.
      </p>
      <p className="mt-4 text-foreground/90">
        Prije jelovnika, prije stolova — bila je sjena. Sve što slijedi u
        ovoj priči postoji zato što je ona već bila tu.
      </p>
    </Chapter>
  );
}
