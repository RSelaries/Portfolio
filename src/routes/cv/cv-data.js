import github from "$lib/assets/medias/pages/cv/github.svg"
import linkedin from "$lib/assets/medias/pages/cv/linkedin.svg"
import phone from "$lib/assets/medias/pages/cv/phone.svg"
import mail from "$lib/assets/medias/pages/cv/mail.svg"
import portfolio from "$lib/assets/medias/pages/cv/portfolio.svg"
import videoGame from "$lib/assets/medias/pages/cv/video-game.svg"

export let cvData = {
    experiences: [
        {
            title: "Animateur de Fablab et programmeur",
            subtitle: "Sirius Productions - Fablab Associatif",
            date: "2025 - 2026",
            activities: [
                "Création et programmation de jeux vidéo sur le moteur de jeu Godot",
                "Programmation de jeux VR",
                "Animation d'un Fablab",
                "Animation d'ateliers de découverte de la création de jeux vidéo",
                "Permances numérique",
            ],
        },
        {
            title: "Commercial et photographe",
            subtitle: "Reportage Image - Labo Argentique",
            date: "2024",
            activities: [
                "Développement de photos argentiques couleurs et noir&blanc",
                "Photographies d'identité",
                "Accueil et conseil de la clientelle",
                "Vente des produits",
            ],
        },
        {
            title: "Équipier en restauration",
            subtitle: "McDonald's - Restaurant fastfood",
            date: "2022",
            activities: [
                "Travail rapide et sous pression",
                "Travail en équipe",
            ],
        },
        {
            title: "Assistant réalisateur",
            subtitle: "Histoire 2 voir - Associtaion audio-visuel",
            date: "2019",
            activities: [
                "Écriture, tournage, montage et réalisation de courts métrages",
            ],
        },
    ],
    formations: [
        {
            title: "DNMADE Numérique",
            subtitle: "ENSAAMA - Paris",
            date: "2025",
        },
        {
            title: "BAC Technologique STD2A",
            subtitle: "Lycée Albert Claveille - Périgueux",
            date: "2022",
        },
        {
            title: "Premiers Secours Citoyen (PSC1)",
            subtitle: "Collège Brantôme en Perigord",
            date: "2019",
        },
    ],
}

export let aside = {
    presentation: "Diplômé d'un DNMADE Numérique, j’aspire à développer mes compétences dans les champs visuels et narratifs. J'aime pouvoir aider, apprendre et enseigner.",
    contactInfos: [
        { name: "mail", value: "r.selaries.pro@gmail.com", img: mail },
        { name: "number", value: "06.69.93.18.78", img: phone },
        { name: "itch", value: "rselaries.itch.io", img: videoGame, link: "https://rselaries.itch.io" },
        { name: "linkedin", value: "linkedin.com/in/raphael-selaries", img: linkedin, link: "https://www.linkedin.com/in/raphael-selaries" },
        { name: "github", value: "github.com/RSelaries/", img: github, link: "https://github.com/RSelaries/" },
    ],
    languages: [
        { name: "Anglais", level: "C1" },
        { name: "Espagnol", level: "A2" },
    ],
    skills: [
        " Programmation",
        "Modélisation 3D",
        "Création de Jeux Vidéo sur Godot",
        "Sens du relationnel",
        "Polyvalence",
        "Adaptation",
    ],
    hobbies: [
        "Développement de jeux-vidéo",
        "Jeux de société",
        "Photographie",
    ],
}
