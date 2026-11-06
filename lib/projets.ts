export type Projet = {
  slug: string
  titre: string
  resume: string
  annee: number
  tags: string[]
  image: string
  video: string
}

export const PROJETS: Projet[] = [
  { slug: "Projet-final",
    titre: "Site de carte",
    resume: "Ce projet est celui que j’ai présenté à la fin de l’année. C’est un site de collection de cartes du jeu League of Legends dans lequel on devait pouvoir ouvrir un booster toutes les 24h, mettre un système de favoris, d’échanges, de doublons, ainsi qu’un vrai système de connexion. Vous pouvez donc regarder la vidéo pour mieux comprendre le devoir effectué. ",
    annee: 2026,
    tags: ["Projet cours"],
    image: "/projet-final.png",
    video: "/projets/projet-final.mp4" },

  { slug: "Projet-transversale",
    titre: "Océan studio",
    resume: "Ce projet a été fait en groupe de dix : nous devions effectuer un site, un jeu vidéo et une charte graphique. Nous avons réussi à terminer 3eme sur les 9 groupes. Nous devions représenter une association fictive qui vise à protéger les bélugas de manière ludique.",
    annee: 2026,
    tags: ["Ocean studio"],
    image: "/ocean-studio-img.png",
    video: "/projets/ocean-studio.mp4" },

  { slug: "pokédex",
    titre: "Pokédex",
    resume: "Ce projet à été fais en groupe de deux dans lequel on à intégré l'api de pokemon afin d'y reproduire de manière plus agréable le pokédex",
    annee: 2026,
    tags: ["Projet cours"],
    image: "/Pokedex.png",
    video: "/projets/pokedex.mp4" },

  { slug: "brasserie-noue4554",
    titre: "Brasserie Nouefdf",
    resume: "Identité visuelle",
    annee: 2026,
    tags: ["branding"],
    image: "/projets/brasserie-1.jpg",
    video: "/projets/brasserie-1.mp4" },

  { slug: "brasserie-nouedsdssd",
    titre: "Brasserie Nouedfddfd",
    resume: "Identité visuelle",
    annee: 2026,
    tags: ["branding"],
    image: "/projets/brasserie-2.jpg",
    video: "/projets/brasserie-2.mp4" },
]