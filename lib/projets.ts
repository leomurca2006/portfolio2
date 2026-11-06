export type Projet = {
  slug: string
  titre: string
  resume: string
  annee: number
  tags: string[]
  image: string
}

export const PROJETS: Projet[] = [
  { slug: "Projet-final",
    titre: "Site de carte",
    resume: "Ce projet est celui que j’ai présenté à la fin de l’année. C’est un site de collection de cartes du jeu League of Legends dans lequel on devait pouvoir ouvrir un booster toutes les 24h, mettre un système de favoris, d’échanges, de doublons, ainsi qu’un vrai système de connexion.",
    annee: 2026,
    tags: ["Projet cours"],
    image: "/projet-final.png" },

  { slug: "Projet-transversale",
    titre: "Océan studio",
    resume: "Ce projet a été fait en groupe de dix : nous devions effectuer un site, un jeu vidéo et une charte graphique. Nous avons réussi à terminer 3eme sur les 9 groupes. Nous devions représenter une association fictive qui vise à protéger les bélugas de manière ludique.",
    annee: 2026,
    tags: ["Ocean studio"],
    image: "/ocean-studio-img.png" },

  { slug: "pokédex",
    titre: "Pokédex",
    resume: "Ce projet à été fais en groupe de deux dans lequel on à intégré l'api de pokemon afin d'y reproduire de manière plus agréable le pokédex",
    annee: 2026,
    tags: ["Projet cours"],
    image: "/Pokedex.png" },

  { slug: "Farmer",
    titre: "The Farmer Was Replaced",
    resume: "Dans ce titre particulièrement apprécié par la communauté, le joueur n'utilise pas sa souris pour accomplir les tâches répétitives traditionnelles des jeux de ferme. À la place, le fermier est remplacé par un drone muni d'un chapeau de paille que vous devez entièrement automatiser dans un language similaire au python.",
    annee: 2026,
    tags: ["Farmer"],
    image: "/farmer.png" },

  { slug: "Miner",
    titre: "The Miner Was Replaced",
    resume: "vous devez programmer un drone à l'aide d'un langage simplifié très proche de Python afin de creuser, d'explorer et d'extraire des ressources en optimisant ses trajectoires.",
    annee: 2026,
    tags: ["Miner"],
    image: "/miner.png" },
]