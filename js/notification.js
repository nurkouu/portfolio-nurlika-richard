document.addEventListener("DOMContentLoaded", () => {
    const notification = document.querySelector(".notification-visite");
    const aboutSection = document.querySelector("#a-propos");

    if (!notification || !aboutSection) {
        return;
    }

    const showNotification = (isVisible, replay = false) => {
        if (!isVisible) {
            notification.classList.remove("notification-visite--visible");
            return;
        }

        if (!replay && notification.classList.contains("notification-visite--visible")) {
            return;
        }

        notification.classList.remove("notification-visite--visible");
        void notification.offsetWidth;
        notification.classList.add("notification-visite--visible");
    };

    const observer = new IntersectionObserver(
        ([entry]) => {
            showNotification(entry.isIntersecting);
        },
        { threshold: 0.2 }
    );

    observer.observe(aboutSection);

    window.addEventListener("pageshow", (event) => {
        if (!event.persisted) {
            return;
        }

        showNotification(false);

        requestAnimationFrame(() => {
            const sectionBounds = aboutSection.getBoundingClientRect();
            const isVisible =
                sectionBounds.top < window.innerHeight * 0.8 &&
                sectionBounds.bottom > window.innerHeight * 0.2;

            showNotification(isVisible, true);
        });
    });
});
