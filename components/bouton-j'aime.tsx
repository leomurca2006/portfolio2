"use client";

import { useState } from "react";

export default function BoutonJaime() {

  const [estClique, setEstClique] = useState(false);

  return (
    <button
      onClick={() => setEstClique(!estClique)} 
      className={`px-4 py-2 rounded-md font-medium transition-colors ${
        estClique 
          ? "bg-red-500 text-white"
          : "bg-neutral-200 text-neutral-800" 
      }`}
    >
      {estClique ? "J'aime " : "J'aime pas"}
    </button>
  );
}