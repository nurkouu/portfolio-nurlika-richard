const projets = {
    imparfaite: {
        titre: "imparfaite",
        fenetre: "Imparfaite.exe",
        image: "./assets/images/imparfaite-img-2.png",
        alt: "Visuel du projet Imparfaite",
        date: "2024-10-14",
        annee: "2024",
        numero: "01",
        description: "<p><span class=\"projet-detail__highlight projet-detail__highlight--rose\">Imparfaite</span> est un court métrage expérimental d’environ 1 minute 30 qui raconte l’histoire d’une jeune fille qui se maquille pour se sentir mieux dans sa peau.</p><p>Le projet explore le <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">corps</span> comme langage visuel et sonore, en jouant sur le ralenti, l’accélération, les plans rapprochés et le montage des fréquences pour transmettre une émotion brute et intime.</p><p>Les rôles ont été répartis entre les membres de l’équipe afin que chacun participe à la préparation, au tournage, au montage vidéo et au montage sonore, dans une logique de collaboration totale.</p>",
        logiciels: [
    { nom: "Davinci Resolve", image: "./assets/icones/davinci.png" },
    { nom: "Reaper", image: "./assets/icones/reaper.png" }
],
        equipe: ["Nurlika Richard - direction artistique"],
        media: [
            {
                type: "video",
                src: "./assets/videos/imparfaite.mp4",
                poster: "./assets/images/imparfaite-img-2.png",
                alt: "Vidéo du projet Imparfaite"
            }
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
        description: "<p><span class=\"projet-detail__highlight projet-detail__highlight--cyan\">Intervalle</span> observe les espaces entre deux états, entre le mouvement et l’immobilité, entre la matière et le silence.</p><p>Cette recherche graphique associe <span class=\"projet-detail__highlight projet-detail__highlight--rose\">rythme</span>, lumière et matière pour construire une expérience visuelle calme, immersive et respirante.</p><p>Chaque séquence cherche à faire émerger une sensation de flottement, comme si le temps s’écoulait en pauses, en respirations et en retraits subtils.</p>",
        logiciels: [
    { nom: "Maya", image: "./assets/icones/maya-1.png" },
    { nom: "DaVinci Resolve", image: "./assets/icones/davinci-resolve.png" },
    { nom: "Reaper", image: "./assets/icones/reaper.png" }
],
        equipe: ["Nurlika Richard - conception et réalisation"],
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
    { nom: "Maya", image: "./assets/icones/maya-1.png" },
    { nom: "Substance 3D", image: "./assets/icones/substance-3d.png" },
    { nom: "Photoshop", image: "./assets/icones/photoshop.png" }
],
        equipe: ["Nurlika Richard - modélisation et image"],
        cta: {
            label: "play the game",
            href: "#"
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
    { nom: "Maya", image: "./assets/icones/maya-1.png" },
    { nom: "After Effects", image: "./assets/icones/after-effects.png" },
    { nom: "Reaper", image: "./assets/icones/reaper.png" }
],
        equipe: ["Nurlika Richard - création numérique"],
        cta: {
            label: "see the website",
            href: "#"
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
    prevButton.classList.add("projet-detail__carousel-button");

    const nextButton = createMediaButton("→", () => {
        activeIndex = activeIndex === mediaItems.length - 1 ? 0 : activeIndex + 1;
        updateSlides();
    });
    nextButton.classList.add("projet-detail__carousel-button");

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

    carousel.append(slides, prevButton, nextButton, viewButton);
    updateSlides();
    elements.media.innerHTML = "";
    elements.media.append(carousel);
}

function remplirListe(liste, valeurs) {
    valeurs.forEach(valeur => {
        const element = document.createElement("li");
        element.textContent = valeur;
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

    const textarea = document.createElement("textarea");
    textarea.className = "projet-detail__prix-zone";
    textarea.name = "prix";
    textarea.rows = 4;
    textarea.placeholder = "Écrivez le prix ou le devis...";

    priceContainer.append(title, textarea);
}

elements.titre.textContent = projet.titre;
elements.fenetreTitre.textContent = projet.fenetre;
elements.date.textContent = projet.annee;
elements.date.dateTime = projet.date;
elements.description.innerHTML = projet.description;
elements.numero.textContent = projet.numero;
elements.meta.textContent = `portfolio / projet-${idProjet}`;

renderMedia(projet);

remplirListe(elements.logiciels, projet.logiciels);
remplirListe(elements.equipe, projet.equipe);
renderCta(projet);
renderPrice(projet);
