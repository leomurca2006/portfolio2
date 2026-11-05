import { notFound } from "next/navigation";
import { PROJETS } from "@/lib/projets";

export default async function ProjetDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projet = PROJETS.find((p) => p.slug === slug);

  if (!projet) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl">{projet.titre}</h1>
      <p>{projet.annee}</p>
      <p>{projet.resume}</p>
      <p>{projet.tags.join(", ")}</p>
    </main>
  );
}