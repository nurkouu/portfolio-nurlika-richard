// ANIMATION DES PIXELS = FORMES COLORÉES
document.addEventListener("DOMContentLoaded", () => {

    // RÉCUPÉRATION DES PIXELS
    const boxes = document.querySelectorAll(".animation-pixels__boite");

    // PARCOURIR CHAQUE PIXEL
    boxes.forEach((box) => {

        // IDENTIFICATION DES PIXELS DE LA SECTION PROJET
        const isProjectPixel = box.closest(".animation-pixels--projet");

        // DÉLAI ALÉATOIRE
        const delay = Math.random() * (isProjectPixel ? -8 : -4);

        // DURÉE ALÉATOIRE
        const duration = isProjectPixel
            ? 6 + Math.random() * 3
            : 2.5 + Math.random() * 2;

        // APPLICATION DU DÉLAI
        box.style.setProperty("--delai", `${delay.toFixed(2)}s`);

        // APPLICATION DE LA DURÉE
        box.style.setProperty("--duree", `${duration.toFixed(2)}s`);
    });
});
