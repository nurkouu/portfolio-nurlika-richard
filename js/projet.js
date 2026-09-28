const projets = {
    imparfaite: {
        titre: "imparfaite",
        fenetre: "Imparfaite.exe",
        image: "./assets/images/imparfaite-img-2.png",
        alt: "Visuel du projet Imparfaite",
        date: "2026-01-01",
        annee: "2026",
        numero: "01",
        description: "Imparfaite est une proposition visuelle qui explore les traces, les accidents et les détails qui rendent une image singulière. Le projet mélange direction artistique, composition 3D et traitement graphique.",
        logiciels: ["Maya", "Photoshop", "Figma"],
        equipe: ["Nurlika Richard - direction artistique"]
    },
    intervalle: {
        titre: "intervalle",
        fenetre: "Intervalle.exe",
        image: "./assets/images/intervalle-img-2.png",
        alt: "Visuel du projet Intervalle",
        date: "2026-01-01",
        annee: "2026",
        numero: "02",
        description: "Intervalle observe les espaces entre deux états. Cette recherche graphique associe rythme, matière et mouvement pour construire une expérience visuelle calme et immersive.",
        logiciels: ["Maya", "DaVinci Resolve", "Reaper"],
        equipe: ["Nurlika Richard - conception et réalisation"]
    },
    armorade: {
        titre: "armorade",
        fenetre: "Armorade.exe",
        image: "./assets/images/armorade-img.png",
        alt: "Visuel du projet Armorade",
        date: "2026-01-01",
        annee: "2026",
        numero: "03",
        description: "Armorade met en scène un univers de formes protectrices et de surfaces techniques. Le projet travaille le contraste entre structure, couleur et sensation de volume.",
        logiciels: ["Maya", "Substance 3D", "Photoshop"],
        equipe: ["Nurlika Richard - modélisation et image"]
    },
    "liquid-loom": {
        titre: "liquid-loom",
        fenetre: "Liquid-Loom.exe",
        image: "./assets/images/liquid-loom-img.png",
        alt: "Visuel du projet Liquid Loom",
        date: "2026-01-01",
        annee: "2026",
        numero: "04",
        description: "Liquid Loom transforme une matière fluide en motif vivant. Le projet expérimente la répétition, la lumière et le mouvement dans une composition numérique organique.",
        logiciels: ["Maya", "After Effects", "Reaper"],
        equipe: ["Nurlika Richard - création numérique"]
    }
};

const idProjet = new URLSearchParams(window.location.search).get("id") || "imparfaite";
const projet = projets[idProjet] || projets.imparfaite;

const elements = {
    titre: document.querySelector("#projet-titre"),
    fenetreTitre: document.querySelector("#fenetre-titre"),
    image: document.querySelector("#projet-image"),
    date: document.querySelector("#projet-date"),
    description: document.querySelector("#projet-description"),
    logiciels: document.querySelector("#projet-logiciels"),
    equipe: document.querySelector("#projet-equipe"),
    numero: document.querySelector("#projet-numero"),
    meta: document.querySelector("#projet-meta")
};

elements.titre.textContent = projet.titre;
elements.fenetreTitre.textContent = projet.fenetre;
elements.image.src = projet.image;
elements.image.alt = projet.alt;
elements.date.textContent = projet.annee;
elements.date.dateTime = projet.date;
elements.description.textContent = projet.description;
elements.numero.textContent = projet.numero;
elements.meta.textContent = `portfolio / projet-${idProjet}`;

function remplirListe(liste, valeurs) {
    valeurs.forEach(valeur => {
        const element = document.createElement("li");
        element.textContent = valeur;
        liste.append(element);
    });
}

remplirListe(elements.logiciels, projet.logiciels);
remplirListe(elements.equipe, projet.equipe);
