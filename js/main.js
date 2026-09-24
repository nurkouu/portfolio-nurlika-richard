// bien commenter les sections


document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".cartes-projets");
    const cards = [...container.querySelectorAll(".project-card")];

    /*
     * Don't run the physics on small screens.
     */
    if (window.innerWidth <= 700) {
        return;
    }

    /*
     * Each card gets:
     *
     * x  = horizontal position
     * y  = vertical position
     * vx = horizontal velocity
     * vy = vertical velocity
     */
    const objects = cards.map((card, index) => {

        const rect = card.getBoundingClientRect();

        return {
            element: card,

            x: 0,
            y: 0,

            vx: (Math.random() * 0.8 + 0.4) *
                (index % 2 === 0 ? 1 : -1),

            vy: (Math.random() * 0.8 + 0.4) *
                (index % 3 === 0 ? 1 : -1),

            width: rect.width,
            height: rect.height
        };
    });


    /*
     * Keep the cards from moving too quickly.
     */
    const MAX_SPEED = 1.15;


    /*
     * Small gap between cards when they collide.
     */
    const COLLISION_PADDING = 4;


    /*
     * Randomly position cards without putting them
     * directly on top of each other.
     */
    function placeCards() {

        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        objects.forEach((object, index) => {

            let placed = false;
            let attempts = 0;

            while (!placed && attempts < 100) {

                const x =
                    Math.random() *
                    Math.max(
                        1,
                        containerWidth - object.width
                    );

                const y =
                    Math.random() *
                    Math.max(
                        1,
                        containerHeight - object.height
                    );

                const candidate = {
                    x,
                    y,
                    width: object.width,
                    height: object.height
                };

                const overlaps = objects.some(other => {

                    if (other === object) {
                        return false;
                    }

                    /*
                     * Ignore objects that haven't been placed yet.
                     */
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

                if (!overlaps) {
                    object.x = x;
                    object.y = y;
                    placed = true;
                }

                attempts++;
            }

            /*
             * Fallback if a free spot wasn't found.
             */
            if (!placed) {
                object.x =
                    (index * 100) %
                    Math.max(
                        1,
                        containerWidth - object.width
                    );

                object.y =
                    (index * 80) %
                    Math.max(
                        1,
                        containerHeight - object.height
                    );
            }

            render(object);
        });
    }


    /*
     * Rectangle collision detection.
     */
    function rectanglesOverlap(a, b) {

        return (
            a.x < b.x + b.width + COLLISION_PADDING &&
            a.x + a.width + COLLISION_PADDING > b.x &&
            a.y < b.y + b.height + COLLISION_PADDING &&
            a.y + a.height + COLLISION_PADDING > b.y
        );
    }


    /*
     * Handle two cards colliding.
     *
     * This uses a simplified elastic collision:
     * cards exchange their velocity along the collision axis.
     */
    function resolveCollision(a, b) {

        const centerAX = a.x + a.width / 2;
        const centerAY = a.y + a.height / 2;

        const centerBX = b.x + b.width / 2;
        const centerBY = b.y + b.height / 2;

        const dx = centerBX - centerAX;
        const dy = centerBY - centerAY;

        const overlapX =
            (a.width + b.width) / 2 -
            Math.abs(dx);

        const overlapY =
            (a.height + b.height) / 2 -
            Math.abs(dy);

        /*
         * If there is no overlap, nothing to do.
         */
        if (overlapX <= 0 || overlapY <= 0) {
            return;
        }


        /*
         * Resolve the collision along whichever axis
         * has the smallest overlap.
         */
        if (overlapX < overlapY) {

            const direction = dx >= 0 ? 1 : -1;

            /*
             * Push cards apart.
             */
            const push = overlapX / 2 + 1;

            a.x -= push * direction;
            b.x += push * direction;

            /*
             * Bounce horizontally.
             */
            const temp = a.vx;

            a.vx = b.vx;
            b.vx = temp;

        } else {

            const direction = dy >= 0 ? 1 : -1;

            /*
             * Push cards apart.
             */
            const push = overlapY / 2 + 1;

            a.y -= push * direction;
            b.y += push * direction;

            /*
             * Bounce vertically.
             */
            const temp = a.vy;

            a.vy = b.vy;
            b.vy = temp;
        }


        /*
         * Make sure the cards don't become stuck.
         */
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


    /*
     * Bounce off the walls of the container.
     */
    function handleWalls(object) {

        const maxX =
            container.clientWidth - object.width;

        const maxY =
            container.clientHeight - object.height;


        /*
         * Left wall
         */
        if (object.x <= 0) {

            object.x = 0;

            object.vx = Math.abs(object.vx);
        }


        /*
         * Right wall
         */
        if (object.x >= maxX) {

            object.x = maxX;

            object.vx = -Math.abs(object.vx);
        }


        /*
         * Top wall
         */
        if (object.y <= 0) {

            object.y = 0;

            object.vy = Math.abs(object.vy);
        }


        /*
         * Bottom wall
         */
        if (object.y >= maxY) {

            object.y = maxY;

            object.vy = -Math.abs(object.vy);
        }
    }


    /*
     * Apply position to the DOM.
     */
    function render(object) {

        object.element.style.left =
            `${object.x}px`;

        object.element.style.top =
            `${object.y}px`;
    }


    /*
     * Prevent cards from becoming too fast.
     */
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


    /*
     * Main physics loop.
     */
    let animationFrame;

    function animate() {

        /*
         * If the user is hovering a card,
         * don't update positions.
         */
        if (!container.classList.contains("is-paused")) {

            /*
             * Move cards.
             */
            objects.forEach(object => {

                object.x += object.vx;
                object.y += object.vy;

                limitSpeed(object);

                handleWalls(object);
            });


            /*
             * Check every pair of cards for collisions.
             */
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


            /*
             * Render the new positions.
             */
            objects.forEach(render);
        }

        animationFrame =
            requestAnimationFrame(animate);
    }


    /*
     * =====================================================
     * HOVER BEHAVIOR
     * =====================================================
     */

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            /*
             * Stop the physics.
             */
            container.classList.add("is-paused");

        });


        card.addEventListener("mouseleave", () => {

            /*
             * Resume the physics.
             */
            container.classList.remove("is-paused");
        });
    });


    /*
     * =====================================================
     * START
     * =====================================================
     */

    placeCards();

    animate();


    /*
     * Recalculate the playground when the window changes size.
     */
    window.addEventListener("resize", () => {

        if (window.innerWidth <= 700) {
            return;
        }

        /*
         * Make sure cards remain inside the new container.
         */
        objects.forEach(object => {

            object.width =
                object.element.offsetWidth;

            object.height =
                object.element.offsetHeight;

            handleWalls(object);

            render(object);
        });
    });

});
