const projets = {
    imparfaite: {
        titre: "imparfaite",
        fenetre: "Imparfaite.exe",
        image: "./assets/images/imparfaite-img-2.png",
        alt: "Visuel du projet Imparfaite",
        date: "2024-10-14",
        annee: "2024",
        numero: "01",
        description: "<p><em>Imparfaite</em> est un court métrage expérimental d’environ <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">1 minute 30 </span> qui raconte l’histoire d’une jeune fille qui se <span class=\"projet-detail__highlight projet-detail__highlight--rose\">maquille</span> pour se sentir mieux dans sa peau.</p><p>Le projet explore le <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">corps</span> comme langage visuel et sonore, en jouant sur le ralenti, l’accélération, les plans rapprochés et le montage des fréquences pour transmettre une émotion <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">brute</span> et <span class=\"projet-detail__highlight projet-detail__highlight--rose\">intime</span>.</p><p>Les <span class=\"projet-detail__highlight projet-detail__highlight--rose\">rôles</span> ont été répartis entre les membres de l’équipe afin que chacun participe à la préparation, au tournage, au montage vidéo et au montage sonore, dans une logique de collaboration <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">totale</span>.</p>",
        logiciels: [
            { nom: "DaVinci Resolve", image: "./assets/icones/davinci.png" },
            { nom: "Reaper", image: "./assets/icones/reaper.png" }
        ],
        equipe: [
            "Nurlika Richard : Cadreuse / Réalisatrice / Monteuse vidéo et sonore",
            "Manel Yaya : Actrice / Réalisatrice / Monteuse vidéo et sonore",
            "Sarah Muller François : Actrice / Réalisatrice / Monteuse vidéo et sonore"
        ],
        cta: {
            label: "voir le projet",
            href: "https://youtu.be/x7VoHxT9l_A?si=aUcGsNKWk_Ec4oTn"
        },
        media: [
            { type: "image", src: "./assets/images/imparfaite-img-2.png", alt: "Visuel 1 du projet Imparfaite" },
            { type: "image", src: "./assets/images/imparfaite-img-3.png", alt: "Visuel 2 du projet Imparfaite" },
            { type: "image", src: "./assets/images/imparfaite-img-4.png", alt: "Visuel 3 du projet Imparfaite" },
            { type: "image", src: "./assets/images/imparfaite-img-5.png", alt: "Visuel 4 du projet Imparfaite" }
        ]
    },
    intervalle: {
        titre: "intervalle",
        fenetre: "Intervalle.exe",
        image: "./assets/images/intervalle-img-2.png",
        alt: "Visuel du projet Intervalle",
        date: "2025-05-08",
        annee: "2025",
        numero: "02",
        description: "<p><em>Intervalle</em> est une animation 3D qui plonge le spectateur dans un univers froid et isolé, où un robot en panne tente désespérément d’atteindre une source de lumière représentant sa seule chance de survie. Les transitions, les défaillances du robot et l’ambiance visuelle contribuent à créer une expérience étrange, perturbante et émotionnelle.</p><h3 class=\"projet-detail__sous-titre\">Processus<span class=\"projet-detail__sous-titre-ligne\" aria-hidden=\"true\"></span></h3><p>Ce projet consistait à créer un court métrage 3D immersif et émotionnel à partir d’un audio réalisé dans le cours d’Audio 2. La professeure nous demandait de concevoir un environnement 3D ainsi que plusieurs séquences d’animation afin de raconter une histoire cohérente et percutante.</p><p>J’ai d’abord développé le concept du projet à l’aide d’une présentation PowerPoint comprenant des moodboards, une palette de couleurs et différentes références visuelles pour établir la direction artistique. J’ai ensuite consacré les premières semaines à la conception de l’environnement, des objets, de l’éclairage et de l’audio, avant de passer à la génération des séquences d’animation et à leur assemblage dans DaVinci Resolve.</p><p>La création des séquences m’a demandé beaucoup de temps et de patience afin de maintenir une cohérence visuelle entre chaque scène. Après avoir reçu des rétroactions constructives de ma professeure, j’ai apporté plusieurs corrections et améliorations, notamment en modifiant la couleur du robot directement dans DaVinci Resolve plutôt que de tout régénérer dans Maya, ce qui m’a permis d’améliorer mes compétences en masquages et en colorisation.</p>",
        logiciels: [
            { nom: "Reaper", image: "./assets/icones/reaper.png" },
            { nom: "DaVinci Resolve", image: "./assets/icones/davinci.png" },
            { nom: "Maya", image: "./assets/icones/maya-1.png" }

        ],
        equipe: ["Nurlika Richard : Animatrice 3D / Modélisatrice / Coloriste / Scénariste"],
        cta: {
            label: "voir le projet",
            href: "https://youtu.be/ytghy2JGJlY?si=dDNwDuCUqqqLg5vR"
        },
        media: [
            {
                type: "video",
                src: "./assets/videos/intervalle.mp4",
                poster: "./assets/images/intervalle-img-2.png",
                alt: "Vidéo du projet Intervalle"
            }
        ]
    },
    armorade: {
        titre: "armorade",
        fenetre: "Armorade.exe",
        image: "./assets/images/armorade-img.png",
        alt: "Visuel du projet Armorade",
        date: "2024-12-07",
        annee: "2024",
        numero: "03",
        description: "<p><span class=\"projet-detail__highlight projet-detail__highlight--rose\">Armorade</span> raconte l’histoire fascinante d’une chasseuse courageuse prisonnière d’une forêt étrange et mystérieuse.</p><p>Pour s’en échapper, elle doit affronter un puissant boss final et récupérer un artefact capable de réveiller une force essentielle, qu’elle devra maîtriser pour retrouver sa liberté.</p><p>Le projet met en scène <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">quête</span>, danger et survie à travers un univers sombre, visuel et narratif.</p>",
        logiciels: [
            { nom: "Phaser v3", image: "./assets/icones/phaser.png" },
            { nom: "HTML5", image: "./assets/icones/html5.png" }
        ],
        equipe: ["Nurlika Richard - modélisation et image"],
        cta: {
            label: "jouer au jeu",
            href: "https://nrlka.itch.io/armorade"
        },
        media: [
            { type: "image", src: "./assets/images/armorade-img.png", alt: "Visuel du projet Armorade" },
            { type: "image", src: "./assets/images/armorade-img-2.png", alt: "Deuxième visuel du projet Armorade" },
            { type: "image", src: "./assets/images/armorade-img-3.png", alt: "Troisième visuel du projet Armorade" },
            { type: "image", src: "./assets/images/armorade-img-4.png", alt: "Quatrième visuel du projet Armorade" }
        ]
    },
    "liquid-loom": {
        titre: "liquid-loom",
        fenetre: "Liquid-Loom.exe",
        image: "./assets/images/liquid-loom-img.png",
        alt: "Visuel du projet Liquid Loom",
        date: "2026-05-07",
        annee: "2026",
        numero: "04",
        description: "<p><span class=\"projet-detail__highlight projet-detail__highlight--cyan\">Liquid Loom</span> transforme une matière fluide en motif vivant, en ramenant la répétition, la lumière et le mouvement dans une composition organique.</p><p>Le projet explore la <span class=\"projet-detail__highlight projet-detail__highlight--rose\">répétition</span> comme mécanisme visuel, en jouant sur la texture, l’oscillation et le rythme pour créer des formes qui semblent respirer.</p><p>Chaque variation cherche à rendre visible une sensation de flux, presque textile, presque liquide, presque synthétique.</p>",
        logiciels: [
            { nom: "Wordpress", image: "./assets/icones/wdp.png" }
        ],
        equipe: ["Nurlika Richard - création numérique"],
        cta: {
            label: "voir le projet",
            href: "https://202396410.tim-momo.com/projet-final/"
        },
        media: [
            { type: "image", src: "./assets/images/liquid-loom-img.png", alt: "Visuel du projet Liquid Loom" },
            { type: "image", src: "./assets/images/liquid-loom-boite.png", alt: "Deuxième visuel du projet Liquid Loom" }
        ]
    }
};

const idProjet = new URLSearchParams(window.location.search).get("id") || "imparfaite";
const projet = projets[idProjet] || projets.imparfaite;

const elements = {
    titre: document.querySelector("#projet-titre"),
    fenetreTitre: document.querySelector("#fenetre-titre"),
    media: document.querySelector("#projet-media"),
    date: document.querySelector("#projet-date"),
    description: document.querySelector("#projet-description"),
    logiciels: document.querySelector("#projet-logiciels"),
    equipe: document.querySelector("#projet-equipe"),
    numero: document.querySelector("#projet-numero"),
    meta: document.querySelector("#projet-meta")
};

function createMediaButton(label, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "projet-detail__media-action";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
}

function createLightbox(content) {
    const overlay = document.createElement("div");
    overlay.className = "projet-detail__lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Vue rapprochée du média");

    const panel = document.createElement("div");
    panel.className = "projet-detail__lightbox-panel";

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "projet-detail__lightbox-close";
    closeButton.setAttribute("aria-label", "Fermer la vue rapprochée");
    closeButton.textContent = "×";
    closeButton.addEventListener("click", () => overlay.remove());

    panel.append(closeButton, content);
    overlay.append(panel);
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.remove();
        }
    });

    document.body.appendChild(overlay);
}

function renderMedia(project) {
    const mediaItems = Array.isArray(project.media) && project.media.length > 0
        ? project.media
        : [{ type: "image", src: project.image, alt: project.alt }];

    if (mediaItems.length === 1 && mediaItems[0].type === "video") {
        const video = document.createElement("video");
        video.className = "projet-detail__media-item projet-detail__video";
        video.src = mediaItems[0].src;
        video.poster = mediaItems[0].poster || "";
        video.controls = true;
        video.controlsList = "nodownload";
        video.muted = false;
        video.playsInline = true;
        video.preload = "metadata";
        video.disablePictureInPicture = false;
        video.setAttribute("aria-label", mediaItems[0].alt);
        video.setAttribute("playsinline", "true");

        elements.media.innerHTML = "";
        elements.media.append(video);
        return;
    }

    const carousel = document.createElement("div");
    carousel.className = "projet-detail__carousel";

    const slides = document.createElement("div");
    slides.className = "projet-detail__carousel-track";

    mediaItems.forEach((media) => {
        const slide = document.createElement("div");
        slide.className = "projet-detail__carousel-slide";

        if (media.type === "video") {
            const video = document.createElement("video");
            video.className = "projet-detail__media-item";
            video.src = media.src;
            video.poster = media.poster || "";
            video.controls = true;
            video.controlsList = "nodownload";
            video.playsInline = true;
            video.preload = "metadata";
            video.disablePictureInPicture = false;
            video.setAttribute("aria-label", media.alt || project.alt);
            video.setAttribute("playsinline", "true");
            slide.append(video);
        } else {
            const image = document.createElement("img");
            image.className = "projet-detail__media-item";
            image.src = media.src;
            image.alt = media.alt || project.alt;
            slide.append(image);
        }

        slides.append(slide);
    });

    let activeIndex = 0;
    const updateSlides = () => {
        const allSlides = slides.querySelectorAll(".projet-detail__carousel-slide");
        allSlides.forEach((slide, index) => {
            slide.classList.toggle("is-active", index === activeIndex);
        });
    };

    const prevButton = createMediaButton("←", () => {
        activeIndex = activeIndex === 0 ? mediaItems.length - 1 : activeIndex - 1;
        updateSlides();
    });
    prevButton.classList.add(
        "projet-detail__carousel-button",
        "projet-detail__carousel-button--previous"
    );

    const nextButton = createMediaButton("→", () => {
        activeIndex = activeIndex === mediaItems.length - 1 ? 0 : activeIndex + 1;
        updateSlides();
    });
    nextButton.classList.add(
        "projet-detail__carousel-button",
        "projet-detail__carousel-button--next"
    );

    const viewButton = createMediaButton("voir plus grand", () => {
        const currentMedia = mediaItems[activeIndex];
        if (!currentMedia) {
            return;
        }

        if (currentMedia.type === "video") {
            const lightboxVideo = document.createElement("video");
            lightboxVideo.className = "projet-detail__media-item projet-detail__video";
            lightboxVideo.src = currentMedia.src;
            lightboxVideo.poster = currentMedia.poster || "";
            lightboxVideo.controls = true;
            lightboxVideo.controlsList = "nodownload";
            lightboxVideo.autoplay = true;
            lightboxVideo.muted = false;
            lightboxVideo.playsInline = true;
            lightboxVideo.disablePictureInPicture = false;
            lightboxVideo.setAttribute("playsinline", "true");
            createLightbox(lightboxVideo);
            return;
        }

        const lightboxImage = document.createElement("img");
        lightboxImage.className = "projet-detail__media-item";
        lightboxImage.src = currentMedia.src;
        lightboxImage.alt = currentMedia.alt || project.alt;
        createLightbox(lightboxImage);
    });
    viewButton.classList.add("projet-detail__carousel-view");

    carousel.append(slides, prevButton, nextButton, viewButton);
    updateSlides();
    elements.media.innerHTML = "";
    elements.media.append(carousel);
}

function remplirListe(liste, valeurs) {
    valeurs.forEach(valeur => {
        const element = document.createElement("li");

        if (typeof valeur === "object" && valeur.image) {
            element.className = "pastille projet-detail__logiciel";
            element.dataset.nom = valeur.nom;

            const image = document.createElement("img");
            image.src = valeur.image;
            image.alt = `Logo ${valeur.nom}`;
            element.append(image);
        } else {
            element.textContent = valeur;
        }

        liste.append(element);
    });
}

function renderCta(project) {
    const ctaContainer = document.querySelector("#projet-cta");
    if (!ctaContainer) {
        return;
    }

    ctaContainer.innerHTML = "";

    if (!project.cta) {
        ctaContainer.hidden = true;
        ctaContainer.style.display = "none";
        return;
    }

    ctaContainer.hidden = false;
    ctaContainer.style.display = "block";

    const link = document.createElement("a");
    link.href = project.cta.href || "#";
    link.className = "projet-detail__media-action projet-detail__cta";
    link.textContent = project.cta.label;
    link.setAttribute("aria-label", project.cta.label);

    if (project.cta.href && project.cta.href !== "#") {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    }

    ctaContainer.append(link);
}

function renderPrice(project) {
    const priceContainer = document.querySelector("#projet-prix");
    if (!priceContainer) {
        return;
    }

    priceContainer.innerHTML = "";

    if (!["imparfaite", "intervalle"].includes(idProjet)) {
        priceContainer.hidden = true;
        priceContainer.style.display = "none";
        return;
    }

    priceContainer.hidden = false;
    priceContainer.style.display = "block";

    const title = document.createElement("h2");
    title.textContent = "prix";

    const message = document.createElement("p");
    message.className = "projet-detail__prix";

    if (idProjet === "imparfaite") {
        message.textContent = "Dans le cadre du Concours d’essais audiovisuels 2025, mon équipe et moi avons eu la chance de présenter notre projet, une expérience qui nous a permis de vivre une belle reconnaissance en remportant une bourse en argent !";
    } else {
        message.append(
            "J’ai également eu la chance de participer au Concours d’essais audiovisuels 2025 en y présentant ",
            Object.assign(document.createElement("em"), { textContent: "Intervalle" }),
            ", un projet qui m’a permis de remporter le prix dans la catégorie « Projet paysage » ! Une belle reconnaissance qui a rendu cette expérience encore plus spéciale."
        );
    }

    priceContainer.append(title, message);
}

elements.titre.textContent = projet.titre;
elements.fenetreTitre.textContent = projet.fenetre;
elements.date.textContent = projet.annee;
elements.date.dateTime = projet.date;
elements.description.innerHTML = projet.description;
elements.numero.textContent = projet.numero;
elements.meta.textContent = `portfolio / projet-${idProjet}`;

renderMedia(projet);

elements.logiciels.classList.toggle(
    "projet-detail__liste--intervalle",
    idProjet === "intervalle"
);
remplirListe(elements.logiciels, projet.logiciels);
remplirListe(elements.equipe, projet.equipe);
renderCta(projet);
renderPrice(projet);
