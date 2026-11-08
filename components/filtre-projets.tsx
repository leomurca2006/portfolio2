"use client"
import { useState } from "react"
import Link from "next/link"
import Carte from "@/components/carte"
import { PROJETS } from "@/lib/projets"

const TAGS = Array.from(new Set(PROJETS.flatMap((p) => p.tags)))

export default function FiltreProjets() {
  const [tag, setTag] = useState<string | null>(null)
  const projets = tag ? PROJETS.filter((p) => p.tags.includes(tag)) : PROJETS

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setTag(null)}
          className={`rounded-full border px-3 py-1 text-sm ${
            tag === null ? "bg-black text-white" : "border-neutral-300"
          }`}
        >
          Tous
        </button>
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`rounded-full border px-3 py-1 text-sm ${
              tag === t ? "bg-black text-white" : "border-neutral-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {projets.map((p) => (
          <Link key={p.slug} href={`/projets/${p.slug}`} className="block h-full">
            <Carte
              titre={p.titre}
              categorie={p.tags.join(", ")}
              resume={p.resume}
              image={p.image}
            />
          </Link>
        ))}
      </div>
    </>
  )
}