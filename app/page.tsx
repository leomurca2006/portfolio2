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
        titre="Léo Murça, développeur web & créateur de jeux"
        texte="Étudiant en développement web à l'IIM, je conçois des sites."
      />
      <Section titre="Nos projets">
        <div className="grid gap-4 sm:grid-cols-3">
          {PROJETS.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/projets/${p.slug}`}>
              <Carte
                titre={p.titre}
                categorie={p.tags.join(", ")}
                resume={p.resume}
                image={p.image}
              />
            </Link>
          ))}
        </div>
      </Section>

<Section titre="à propos de moi">
  <div>
    <Accordeon question="Qui suis-je?">
      Je m'appelle Murça Léo je suis étudiant en deuxième année à l'iim en dévelopement web .
    </Accordeon>
    <Accordeon question=" Mon parcours?">
      J'ai fais un bac général en spécialité maths et nsi puis je suis allée à l'iim dans laquelle j'ai fais les différents que je vous présente actuellement.
    </Accordeon>
  </div>
</Section>
    </main>
  );
}