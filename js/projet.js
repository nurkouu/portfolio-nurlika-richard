const projets = {
    imparfaite: {
        titre: "imparfaite",
        fenetre: "Imparfaite.exe",
        image: "./assets/images/imparfaite-img-2.png",
        alt: "Visuel du projet Imparfaite",
        date: "2024-10-14",
        annee: "2024",
        numero: "01",
        description: "<em class=\"nom-projet\">Imparfaite</em> est un court métrage expérimental d’environ 1 minute 30 qui raconte l’histoire d’une jeune fille qui se maquille pour se sentir mieux dans sa peau, mais qui réalise progressivement qu’elle n’a besoin ni de maquillage ni de l’approbation des autres pour se sentir belle. Pour réaliser ce projet, nous devions utiliser le corps humain comme langage visuel et sonore en filmant 20 parties différentes du corps et en utilisant des effets comme le ralenti, l’accélération et des mouvements fluides, tout en créant un micro-montage sonore avec de l’inversion, de la réverbération et des variations de fréquences. Les rôles ont été répartis entre les membres de l’équipe afin que chacun participe à différentes étapes du projet, notamment la préparation, le tournage, le montage vidéo et le montage sonore. Nous avons travaillé en collaboration pour développer l’histoire et nous assurer que les images et les sons transmettent l’émotion et le message du projet. Dans le cadre du Concours d’essais audiovisuels 2025, mon équipe et moi avons également présenté notre projet, ce qui nous a permis de remporter une bourse en argent.",
        logiciels: ["Maya", "Photoshop", "Figma"],
        equipe: ["Nurlika Richard - direction artistique"]
    },
    intervalle: {
        titre: "intervalle",
        fenetre: "Intervalle.exe",
        image: "./assets/images/intervalle-img-2.png",
        alt: "Visuel du projet Intervalle",
        date: "2025-05-08",
        annee: "2025",
        numero: "02",
        description: "<em class=\"nom-projet\">Intervalle</em> observe les espaces entre deux états. Cette recherche graphique associe rythme, matière et mouvement pour construire une expérience visuelle calme et immersive.",
        logiciels: ["Maya", "DaVinci Resolve", "Reaper"],
        equipe: ["Nurlika Richard - conception et réalisation"]
    },
    armorade: {
        titre: "armorade",
        fenetre: "Armorade.exe",
        image: "./assets/images/armorade-img.png",
        alt: "Visuel du projet Armorade",
        date: "2024-12-07",
        annee: "2024",
        numero: "03",
        description: "<em class=\"nom-projet\">Armorade</em> met en scène un univers de formes protectrices et de surfaces techniques. Le projet travaille le contraste entre structure, couleur et sensation de volume.",
        logiciels: ["Maya", "Substance 3D", "Photoshop"],
        equipe: ["Nurlika Richard - modélisation et image"]
    },
    "liquid-loom": {
        titre: "liquid-loom",
        fenetre: "Liquid-Loom.exe",
        image: "./assets/images/liquid-loom-img.png",
        alt: "Visuel du projet Liquid Loom",
        date: "2026-05-07",
        annee: "2026",
        numero: "04",
        description: "<em class=\"nom-projet\">Liquid Loom</em> transforme une matière fluide en motif vivant. Le projet expérimente la répétition, la lumière et le mouvement dans une composition numérique organique.",
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
elements.description.innerHTML = projet.description;
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
