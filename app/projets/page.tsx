import Section from "@/components/section";
import FiltreProjets from "@/components/filtre-projets";

export default function Projets() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Section titre="Projets">
        <FiltreProjets />
      </Section>
    </main>
  );
}