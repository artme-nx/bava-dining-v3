import { Chapter } from "@/components/timeline/chapter";
import { TreeRingStat } from "@/components/motifs/tree-ring-stat";

export function TreeChapter() {
  return (
    <Chapter
      id="ring-01"
      num="01"
      kicker="Prije nego što je Bava postojala"
      title="Murva koja je bila ovdje prva"
      aside={<TreeRingStat value="~300" label="godina stara bijela murva" />}
    >
      <p>
        Na uglu stare gradske jezgre, blizu crkve sv. Nikole i rive, raste
        bijela murva stara gotovo tri stoljeća — jedno od najstarijih stabala
        u Šibeniku. Vjeruje se da je posađena otprilike u vrijeme dok se
        gradila obližnja crkva.
      </p>
      <p className="mt-4">
        Godinama su joj na deblo i grane bili pričvršćeni kablovi, nosač
        zvučnika i reflektor — ostaci raznih gradskih instalacija. Kasnije su
        uklonjeni, a stablo je ostalo ono što je oduvijek i bilo: veliki,
        raskošni krošnjasti hlad koji cijeli taj kut grada čini drugačijim od
        ostalih.
      </p>
      <p className="mt-4 text-foreground/90">
        Prije jelovnika, prije stolova — bila je sjena. Sve što slijedi u
        ovoj priči postoji zato što je ona već bila tu.
      </p>
    </Chapter>
  );
}
