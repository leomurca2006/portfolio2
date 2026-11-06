"use client"
import { useState } from "react";
import BoutonJaime from "./bouton-j'aime";

type Props = {
  titre: string;
  categorie: string;
  resume: string;
  image: string;
};

export default function Carte({ titre, resume, categorie, image }: Props) {
  const [deploye, setDeploye] = useState(false);

  return (
    <article className="rounded-lg border border-neutral-200 p-5 transition hover:border-neutral-400">
      <img src={image} alt={titre} className="mb-4 h-40 w-full rounded object-cover" />
      <p className="text-xs uppercase text-neutral-500">{categorie}</p>
      <h3 className="mt-1 font-semibold">{titre}</h3>
      <p
        onClick={() => setDeploye(true)}
        className={`mt-2 text-sm text-neutral-600 ${
          deploye ? "" : "line-clamp-3 cursor-pointer"
        }`}
      >
        {resume}
      </p>

      <div
        className="mt-4"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <BoutonJaime />
      </div>
    </article>
  );
}