// ANIMATION DES CARTES / PHYSIQUE
document.addEventListener("DOMContentLoaded", () => {

    // CONTENEUR DES CARTES
    const container = document.querySelector(".cartes-projets");

    // VÉRIFICATION DU CONTENEUR
    if (!container) {
        return;
    }

    // RÉCUPÉRATION DES CARTES
    const cards = [...container.querySelectorAll(".project-card")];

    // DÉSACTIVATION SUR PETITS ÉCRANS
    if (window.innerWidth <= 700) {
        return;
    }

    // PROPRIÉTÉS DES CARTES
    const objects = cards.map((card, index) => {

        const rect = card.getBoundingClientRect();

        return {
            element: card,

            // POSITION
            x: 0,
            y: 0,

            // VITESSE
            vx: (Math.random() * 0.8 + 0.4) *
                (index % 2 === 0 ? 1 : -1),

            vy: (Math.random() * 0.8 + 0.4) *
                (index % 3 === 0 ? 1 : -1),

            // DIMENSIONS
            width: rect.width,
            height: rect.height
        };
    });


    // VITESSE MAXIMALE
    const MAX_SPEED = 1.15;


    // ESPACE ENTRE LES CARTES
    //const COLLISION_PADDING = 4;
    const COLLISION_PADDING = 24;


    // POSITIONNEMENT ALÉATOIRE
    function placeCards() {

        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;


        objects.forEach((object, index) => {

            let placed = false;
            let attempts = 0;


            // TENTATIVES DE POSITIONNEMENT
            while (!placed && attempts < 200) {

                const maxX =
                    Math.max(
                        0,
                        containerWidth - object.width
                    );

                const maxY =
                    Math.max(
                        0,
                        containerHeight - object.height
                    );


                // POSITION ALÉATOIRE
                const x =
                    Math.random() * maxX;

                const y =
                    Math.random() * maxY;


                const candidate = {
                    x: x,
                    y: y,
                    width: object.width,
                    height: object.height
                };


                // DÉTECTION DES CHEVAUCHEMENTS
                const overlaps = objects.some(other => {

                    // IGNORER LA CARTE ELLE-MÊME
                    if (other === object) {
                        return false;
                    }


                    // IGNORER LES CARTES SANS POSITION
                    if (
                        other.x === 0 &&
                        other.y === 0
                    ) {
                        return false;
                    }


                    return rectanglesOverlap(
                        candidate,
                        other
                    );
                });


                // POSITION LIBRE
                if (!overlaps) {

                    object.x = x;
                    object.y = y;

                    placed = true;
                }


                attempts++;
            }


            // POSITION DE SECOURS
            if (!placed) {

                const maxX =
                    Math.max(
                        0,
                        containerWidth - object.width
                    );

                const maxY =
                    Math.max(
                        0,
                        containerHeight - object.height
                    );


                object.x =
                    Math.min(
                        (index * 150) % Math.max(1, maxX),
                        maxX
                    );

                object.y =
                    Math.min(
                        (index * 110) % Math.max(1, maxY),
                        maxY
                    );
            }


            // AFFICHAGE INITIAL
            render(object);
        });
    }




    // DÉTECTION DES COLLISIONS
    function rectanglesOverlap(a, b) {

        return (
            a.x < b.x + b.width + COLLISION_PADDING &&
            a.x + a.width + COLLISION_PADDING > b.x &&
            a.y < b.y + b.height + COLLISION_PADDING &&
            a.y + a.height + COLLISION_PADDING > b.y
        );
    }


    // GESTION DES COLLISIONS
    function resolveCollision(a, b) {

        // CENTRES DES CARTES
        const centerAX = a.x + a.width / 2;
        const centerAY = a.y + a.height / 2;

        const centerBX = b.x + b.width / 2;
        const centerBY = b.y + b.height / 2;

        // DISTANCE ENTRE LES CENTRES
        const dx = centerBX - centerAX;
        const dy = centerBY - centerAY;

        // CHEVAUCHEMENT
        const overlapX =
            (a.width + b.width) / 2 -
            Math.abs(dx);

        const overlapY =
            (a.height + b.height) / 2 -
            Math.abs(dy);


        // AUCUNE COLLISION
        if (overlapX <= 0 || overlapY <= 0) {
            return;
        }


        // AXE DE COLLISION
        if (overlapX < overlapY) {

            const direction = dx >= 0 ? 1 : -1;

            // SÉPARATION DES CARTES
            const push = overlapX / 2 + 1;

            a.x -= push * direction;
            b.x += push * direction;

            // REBOND HORIZONTAL
            const temp = a.vx;

            a.vx = b.vx;
            b.vx = temp;

        } else {

            const direction = dy >= 0 ? 1 : -1;

            // SÉPARATION DES CARTES
            const push = overlapY / 2 + 1;

            a.y -= push * direction;
            b.y += push * direction;

            // REBOND VERTICAL
            const temp = a.vy;

            a.vy = b.vy;
            b.vy = temp;
        }


        // ÉVITER LE BLOCAGE
        if (Math.abs(a.vx) < 0.25) {
            a.vx += a.vx >= 0 ? 0.25 : -0.25;
        }

        if (Math.abs(b.vx) < 0.25) {
            b.vx += b.vx >= 0 ? 0.25 : -0.25;
        }

        if (Math.abs(a.vy) < 0.25) {
            a.vy += a.vy >= 0 ? 0.25 : -0.25;
        }

        if (Math.abs(b.vy) < 0.25) {
            b.vy += b.vy >= 0 ? 0.25 : -0.25;
        }
    }


    // REBOND SUR LES MURS
    function handleWalls(object) {

        const maxX =
            container.clientWidth - object.width;

        const maxY =
            container.clientHeight - object.height;


        // MUR GAUCHE
        if (object.x <= 0) {

            object.x = 0;

            object.vx = Math.abs(object.vx);
        }


        // MUR DROIT
        if (object.x >= maxX) {

            object.x = maxX;

            object.vx = -Math.abs(object.vx);
        }


        // MUR SUPÉRIEUR
        if (object.y <= 0) {

            object.y = 0;

            object.vy = Math.abs(object.vy);
        }


        // MUR INFÉRIEUR
        if (object.y >= maxY) {

            object.y = maxY;

            object.vy = -Math.abs(object.vy);
        }
    }


    // AFFICHAGE DE LA POSITION
    function render(object) {

        object.element.style.left =
            `${object.x}px`;

        object.element.style.top =
            `${object.y}px`;
    }


    // LIMITATION DE LA VITESSE
    function limitSpeed(object) {

        object.vx = Math.max(
            -MAX_SPEED,
            Math.min(MAX_SPEED, object.vx)
        );

        object.vy = Math.max(
            -MAX_SPEED,
            Math.min(MAX_SPEED, object.vy)
        );
    }


    // BOUCLE PRINCIPALE
    let animationFrame;

    function animate() {

        // PAUSE AU SURVOL
        if (!container.classList.contains("is-paused")) {

            // DÉPLACEMENT DES CARTES
            objects.forEach(object => {

                object.x += object.vx;
                object.y += object.vy;

                // LIMITATION DE VITESSE
                limitSpeed(object);

                // GESTION DES MURS
                handleWalls(object);
            });


            // DÉTECTION DES COLLISIONS
            for (let i = 0; i < objects.length; i++) {

                for (
                    let j = i + 1;
                    j < objects.length;
                    j++
                ) {

                    const a = objects[i];
                    const b = objects[j];

                    if (rectanglesOverlap(a, b)) {
                        resolveCollision(a, b);
                    }
                }
            }


            // MISE À JOUR DES POSITIONS
            objects.forEach(render);
        }

        // PROCHAINE IMAGE
        animationFrame =
            requestAnimationFrame(animate);
    }


    // SURVOL DES CARTES
    cards.forEach(card => {

        // SOURIS SUR LA CARTE
        card.addEventListener("mouseenter", () => {

            // PAUSE DE L'ANIMATION
            container.classList.add("is-paused");

        });


        // SOURIS HORS DE LA CARTE
        card.addEventListener("mouseleave", () => {

            // REPRISE DE L'ANIMATION
            container.classList.remove("is-paused");
        });
    });


    // DÉMARRAGE
    placeCards();

    animate();


    // ADAPTATION À LA TAILLE DE LA FENÊTRE
    window.addEventListener("resize", () => {

        // DÉSACTIVATION SUR PETITS ÉCRANS
        if (window.innerWidth <= 700) {
            return;
        }

        // AJUSTEMENT DES DIMENSIONS
        objects.forEach(object => {

            object.width =
                object.element.offsetWidth;

            object.height =
                object.element.offsetHeight;

            // LIMITES DU CONTENEUR
            handleWalls(object);

            // MISE À JOUR DE LA POSITION
            render(object);
        });
    });

});
