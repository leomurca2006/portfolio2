import Link from "next/link";
import Carte from "@/components/carte";
import Section from "@/components/section";
import { PROJETS } from "@/lib/projets";

export default function Projets() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Section titre="Projets">
        <div className="grid gap-4 sm:grid-cols-3">
          {PROJETS.map((p) => (
            <Link key={p.slug} href={`/projets/${p.slug}`}>
              <Carte titre={p.titre} categorie={p.tags.join(", ")} resume={p.resume} />
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}