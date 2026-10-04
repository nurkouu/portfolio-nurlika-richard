document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".animation-pixels__boite");

    boxes.forEach((box) => {
        const isProjectPixel = box.closest(".animation-pixels--projet");
        const delay = Math.random() * (isProjectPixel ? -8 : -4);
        const duration = isProjectPixel
            ? 6 + Math.random() * 3
            : 2.5 + Math.random() * 2;

        box.style.setProperty("--delai", `${delay.toFixed(2)}s`);
        box.style.setProperty("--duree", `${duration.toFixed(2)}s`);
    });
});
