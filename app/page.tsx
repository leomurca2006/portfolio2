import Bouton from "@/components/bouton";
import Carte from "@/components/carte";
import Hero from "@/components/hero";
import Section from "@/components/section";
import Accordeon from "@/components/accordeon";
import Link from "next/link";
import { PROJETS } from "@/lib/projets"; // Utilisation du vrai fichier de projets avec les slugs

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Hero
        titre="Des images, Des jeux, Des sites"
        texte="Atelier Brume est un studio créatif indépendant"
      />
      <Bouton label="Voir tous les projets" href="/projets" variante="plein" />
      
      <Section titre="Nos projets">
        <div className="grid gap-4 sm:grid-cols-3">
          {PROJETS.map((p) => (
            <Link key={p.slug} href={`/projets/${p.slug}`}>
              <Carte
                titre={p.titre}
                categorie={p.tags.join(", ")}
                resume={p.resume}
              />
            </Link>
          ))}
        </div>
      </Section>

      <Section titre="Questions fréquentes">
        <div></div>
      </Section>
    </main>
  );
}