import { SiteChrome } from "@/components/site-chrome";
import { SiteFooter } from "@/components/site-footer";
import { Spine } from "@/components/timeline/spine";
import { Masthead } from "@/components/sections/masthead";
import { TreeChapter } from "@/components/sections/tree";
import { CornerChapter } from "@/components/sections/corner";
import { TableChapter } from "@/components/sections/table";
import { VoicesChapter } from "@/components/sections/voices";
import { VisitChapter } from "@/components/sections/visit";

export default function Home() {
  return (
    <>
      <SiteChrome />
      <main className="pt-16">
        <Spine>
          <Masthead />
          <TreeChapter />
          <CornerChapter />
          <TableChapter />
          <VoicesChapter />
          <VisitChapter />
        </Spine>
        <SiteFooter />
      </main>
    </>
  );
}
