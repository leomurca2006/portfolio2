
import Bouton from "@/components/bouton";
import Carte from "@/components/carte";
import Hero from "@/components/hero";
import Section from "@/components/section";
import Accordeon from "@/components/accordeon";
import Link from "next/link";


type Projet = {
  id :number
  titre: string
  resume: string
  categorie: string
}


const PROJETS: Projet[] = [
  {id :1, titre: "brasserie Noue", resume:"Identité visuelle", categorie:"jsp"},
  {id :2, titre: "brasserie Noue test ", resume:"Identité visuelle", categorie:"jsp1"},
  {id :3, titre: "brasserie Noue test 2", resume:"Identité visuelle", categorie:"jsp2"},
]


export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Hero
      titre="Des images,Des jeux, Des sites"
      texte="Atelier Brume est un studio créatif indépendant "/>
      <Bouton label="Voir tous les projets" href="/projets" variante="plein"/>
      <Section titre="Nos projets">
        <div className="grid gap-4 sm:grid-cols-3">

        <Carte titre="Brasserie Noue" categorie="Marque" resume="Identité visuelle"/>
        </div>
      </Section>
      <Section titre="Questions fréquentes">
        <div></div>
      </Section>
    </main>
  );
}
