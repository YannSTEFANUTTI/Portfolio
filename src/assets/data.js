import TheWeeknd from "../assets/videos/TheWeeknd.mp4";
import WorldWildHeroes from "../assets/videos/WorldWildHeroes.mp4";
import derniereHeure from "../assets/videos/derniereHeure.mp4";
import WindaStreet from "../assets/videos/WindaStreet.mp4";
import Goop from "../assets/videos/goop.mp4";
import Chaban from "../assets/videos/Chaban.mp4";

const data = [
  {
    id: 6,
    title: "Street Art ludique",
    date: "02/23",
    txt: `FULL STACK ! Découvrez toutes les oeuvres de Street-art de façon ludique à Bordeaux.
    Le troisième et dernier volet avec la Wild Code School a fait l'unanimité : Une base de données solide, un design original (retro-gaming), un jeu enrichissant, des amis à inviter et surpasser, une application complète ! Une équipe toujours très Agil (scrum), Node JS, mysql, Express, React JS, Gsap... La démo est en ligne juste en dessous.`,
    gitHub: "https://github.com/YannSTEFANUTTI/WinDaStreet",
    web: "https://youtu.be/Fxnu3otAR0Q",
    video: WindaStreet,
  },
  {
    id: 2,
    title: "Jeux de cartes",
    date: "11/22",
    txt: "Ce deuxième projet à 5 avec la Wild code School est un jeu de cartes Marvel et DC. Avec une API de super-héros en tête, nous avons su aller au bout de ce défi ambitieux en seulement quelques semaines. Accueil, Codex, sélection de personnages, distribution de cartes aléatoire, gestion des combats et la victoire (on vous la souhaite) ! Une équipe Agil (scrum), React JS et Framer-motion en sus du projet 01.",
    gitHub: "https://github.com/YannSTEFANUTTI/WorldWildHero",
    web: "https://projet2-q67dmyvlt-alexandrepre.vercel.app/",
    video: WorldWildHeroes,
  },
  {
    id: 3,
    title: "Billetterie Spatiale",
    date: "11/22",
    txt: "Fier d'avoir remporté en 24 heures ce premier Hackathon avec une équipe extraordinaire. Le thème était donné : Voyage. Une histoire originale était indispensable à notre victoire : Nous sommes en 2123, la terre se meurt, il vous reste une heure pour prendre un billet vers d'autres horizons. Une sélection de planètes (plus ou moins) formidables vous attend. Mais attention, plus le temps passe plus les prix flambent, dépêchez-vous de choisir !",
    gitHub: "https://github.com/YannSTEFANUTTI/Hackathon-DerniereHeure",
    web: "https://hackaton-sage.vercel.app/",
    video: derniereHeure,
  },
  {
    id: 4,
    title: "Gestion de parcs automobiles",
    date: "01/23",
    txt: `Ce projet a été réalisé sur 72 heures. Son thème était la gestion d'un parc automobiles. Nous avons pris l'initiative d'ajouter le partage de trajets pour les collectivités : consultation des trajets disponibles, sélection de véhicules, réservations, page administrateur, page technicien. React & Node JS, mysql, Express, Gsap, Tailwind... Une démo sera bientôt en ligne.`,
    gitHub: "https://github.com/YannSTEFANUTTI/GoOp/",
    web: "https://youtu.be/8cSBJfSfOOI",
    video: Goop,
  },

  {
    id: 1,
    title: "Site Web de l'Artiste",
    date: "09/22",
    txt: "Mes premiers pas dans le monde du Web à travers ce site dédié à l'artiste The Weeknd. Au sein de la Wild Code School de Bordeaux, nous avons élaboré cette page dans l'idée de pouvoir (fictivement) découvrir l'actualité du chanteur : dates de tournée, billetterie, dernier album, clip, goodies et inscription à la newsletter. Vanilla JS, HTML et CSS sont de mise.",
    gitHub: "https://github.com/YannSTEFANUTTI/theWeeknd-project",
    web: "https://gregodges.github.io/theWeeknd-project/",
    video: TheWeeknd,
  },
  {
    id: 7,
    title: "Le pont Chaban-Delmas",
    date: "09/22",
    txt: "Vous pouvez consulter les jours et horaires de fermeture du Pont Chaban-Delmas grâce à cette application simple et efficace. Un compte à rebours est également disponible pour vous prévenir de sa prochaine fermeture. Vous pouvez sélectionner le bateau de passage ou une date. Tailwind pour le CSS et React sont les acteurs majeurs de ce projet. ",
    gitHub: "https://github.com/YannSTEFANUTTI/Pont-Chaban-Delmas",
    web: "https://ys-chabandelmas.netlify.app/",
    video: Chaban,
  },
];

export default data;
