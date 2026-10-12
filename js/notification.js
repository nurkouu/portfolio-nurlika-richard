// CODE POUR LA NOTIFICATION QUI APPARAIT À LA SECTION À PROPOS
document.addEventListener("DOMContentLoaded", () => {

    // RÉCUPÉRER LA NOTIFICATION ET LA SECTION À PROPOS 
    const notification = document.querySelector(".notification-visite");
    const aboutSection = document.querySelector("#a-propos");

    // ARRÊTER LE SCRIPT SI L'UN DES ÉLÉMENTS NÉCESSAIRES N'EXISTE PAS
    if (!notification || !aboutSection) {
        return;
    }

    const mobileQuery = window.matchMedia("(max-width: 700px)");

    // OUVRIR LA NOTIFICATION AU TOUCHER SUR MOBILE
    const toggleNotification = () => {
        if (!mobileQuery.matches) {
            return;
        }

        const isOpen = notification.classList.toggle("notification-visite--ouvert");
        notification.setAttribute("aria-expanded", String(isOpen));
    };

    notification.addEventListener("click", toggleNotification);
    notification.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
            return;
        }

        event.preventDefault();
        toggleNotification();
    });

    // FONCTION PERMETTANT D'AFFICHER OU DE MASQUER LA NOTIFICATION
    const showNotification = (isVisible, replay = false) => {

        // MASQUER LA NOTIFICATION LORSQUE LA SECTION N'EST PLUS VISIBLE
        if (!isVisible) {
            notification.classList.remove("notification-visite--visible");
            notification.classList.remove("notification-visite--ouvert");
            notification.setAttribute("aria-expanded", "false");
            return;
        }

        // ÉVITER DE RELANCER L'ANIMATION SI LA NOTIFICATION EST DÉJÀ VISIBLE
        if (!replay && notification.classList.contains("notification-visite--visible")) {
            return;
        }

        // RETIRER PUIS RÉAJOUTER LA CLASSE POUR RELANCER L'ANIMATION CSS
        notification.classList.remove("notification-visite--visible");
        void notification.offsetWidth;
        notification.classList.add("notification-visite--visible");
    };

    // OBSERVER LA VISIBILITÉ DE LA SECTION À PROPOS 
    const observer = new IntersectionObserver(
        ([entry]) => {
            showNotification(entry.isIntersecting);
        },
        { threshold: 0.2 }
    );

    // COMMENCE À OBSERVER LA SECTION À PROPOS 
    observer.observe(aboutSection);

    // GÈRE LE RETOUR SUR LA PAGE 
    window.addEventListener("pageshow", (event) => {
        if (!event.persisted) {
            return;
        }

        // MASQUER LA NOTIFICATION AVANT DE RECALCULER SA VISIBILITÉ
        showNotification(false);

        requestAnimationFrame(() => {
            const sectionBounds = aboutSection.getBoundingClientRect();

            // VÉRIFIER SI LA SECTION À PROPOS EST ACTUELLEMENT VISIBLE À L'ÉCRAN
            const isVisible =
                sectionBounds.top < window.innerHeight * 0.8 &&
                sectionBounds.bottom > window.innerHeight * 0.2;

            showNotification(isVisible, true);
        });
    });
});