// SYSTÈME DE TRADUCTION CENTRALISÉ
(function () {
    const translations = {
        fr: {
            home: "Accueil",
            projects: "Projets",
            about: "À propos",
            projectsTitle: "projets",
            homeTitle: "Accueil | Portfolio Nurlika Richard",
            projectPageTitle: "Projet | Portfolio Nurlika Richard",
            intro: "Un peu de <span>3D</span>, un peu de <span>web</span>, un peu de <span>motion</span> et beaucoup de <span>curiosité</span> !",
            aboutText: "Je souhaite rejoindre une équipe dans le domaine de la création numérique en tant que <span>designer</span> <span>multimédia</span>, où je pourrai combiner mes compétences techniques et créatives en <span>3D</span>, en <span>design web</span> et en <span>montage vidéo</span>.",
            software: "LOGICIELS",
            social: "SOCIAUX",
            roles: "rôles",
            team: "rôles - équipe",
            viewProject: "voir le projet",
            playGame: "jouer au jeu",
            viewSite: "voir le site",
            viewProjectImparfaite: "Voir le projet Imparfaite.exe",
            viewProjectIntervalle: "Voir le projet Intervalle.exe",
            viewProjectArmorade: "Voir le projet Armorade.exe",
            viewProjectLiquidLoom: "Voir le projet Liquid-Loom.exe",
            enlarge: "voir plus grand",
            backProjects: "← retour à la section projets",
            projectAction: "Action du projet",
            projectInfo: "Informations du projet",
            projectPrize: "Prix du projet",
            prizeTitle: "prix",
            prizeImparfaite: "Dans le cadre du Concours d’essais audiovisuels 2025, mon équipe et moi avons eu la chance de présenter notre projet, une expérience qui nous a permis de vivre une belle reconnaissance en remportant une bourse en argent !",
            prizeIntervalle: "J’ai également eu la chance de participer au Concours d’essais audiovisuels 2025 en y présentant Intervalle, un projet qui m’a permis de remporter le prix dans la catégorie « Projet paysage » ! Une belle reconnaissance qui a rendu cette expérience encore plus spéciale.",
            welcome: "Message de bienvenue",
            from: "De : nrichardd25@gmail.com",
            to: "À : Vous !",
            thanks: "Merci d'avoir visité mon portfolio !",
            closeHome: "Retour à la page d'accueil",
            closeLightbox: "Fermer la vue rapprochée",
            closeView: "Vue rapprochée du média",
            galleryIntervalle: "Galerie de références du projet Intervalle"
        },
        en: {
            home: "Home",
            projects: "Projects",
            about: "About",
            projectsTitle: "projects",
            homeTitle: "Home | Nurlika Richard Portfolio",
            projectPageTitle: "Project | Nurlika Richard Portfolio",
            intro: "A little <span>3D</span>, a little <span>web</span>, a little <span>motion</span> and a lot of <span>curiosity</span>!",
            aboutText: "I am looking to join a team in the digital creation field as a <span>multimedia</span> <span>designer</span>, where I can combine my technical and creative skills in <span>3D</span>, <span>web design</span> and <span>video editing</span>.",
            software: "SOFTWARES",
            social: "SOCIALS",
            roles: "roles",
            team: "roles - team",
            viewProject: "view project",
            playGame: "play the game",
            viewSite: "view the website",
            viewProjectImparfaite: "View the Imparfaite.exe project",
            viewProjectIntervalle: "View the Intervalle.exe project",
            viewProjectArmorade: "View the Armorade.exe project",
            viewProjectLiquidLoom: "View the Liquid-Loom.exe project",
            enlarge: "view larger",
            backProjects: "← back to projects",
            projectAction: "Project action",
            projectInfo: "Project information",
            projectPrize: "Project award",
            prizeTitle: "award",
            prizeImparfaite: "For the 2025 Audiovisual Essay Contest, my team and I had the opportunity to present our project. This experience brought us recognition when we won a cash prize!",
            prizeIntervalle: "I also had the opportunity to enter the 2025 Audiovisual Essay Contest with Intervalle, a project that won the award in the “Landscape Project” category. This recognition made the experience even more special.",
            welcome: "Welcome message",
            from: "From: nrichardd25@gmail.com",
            to: "To: You!",
            thanks: "Thank you for visiting my portfolio!",
            closeHome: "Return to home page",
            closeLightbox: "Close enlarged view",
            closeView: "Enlarged media view",
            galleryIntervalle: "Intervalle project reference gallery"
        }
    };

    const projectTranslations = {
        imparfaite: {
            en: {
                titre: "imparfaite",
                description: "<p><em>Imparfaite</em> is an experimental short film lasting about <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">one minute and thirty seconds</span>. It follows a young woman who applies <span class=\"projet-detail__highlight projet-detail__highlight--rose\">makeup</span> to feel better about herself, then gradually realizes that she needs neither makeup nor other people's <span class=\"projet-detail__highlight projet-detail__highlight--rose\">approval</span> to feel beautiful.</p><p>The project explores the <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">body</span> as a visual and sonic language, using slow motion, acceleration, close-ups and frequency editing to express a <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">raw</span> and <span class=\"projet-detail__highlight projet-detail__highlight--rose\">intimate</span> emotion.</p><p>The <span class=\"projet-detail__highlight projet-detail__highlight--rose\">roles</span> were shared among the team so everyone contributed to preparation, filming, video editing and sound editing through a <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">fully collaborative</span> process.</p>",
                equipe: ["Nurlika Richard: Camera operator / Director / Video and sound editor", "Manel Yaya: Actress / Director / Video and sound editor", "Sarah Muller François: Actress / Director / Video and sound editor"]
            }
        },
        intervalle: {
            en: {
                titre: "intervalle",
                description: "<p><em>Intervalle</em> is a 3D animation that immerses the viewer in a <span class=\"projet-detail__highlight projet-detail__highlight--rose\">cold</span> and <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">isolated</span> world, where a broken robot desperately tries to reach a source of light representing its <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">only</span> chance of <span class=\"projet-detail__highlight projet-detail__highlight--rose\">survival</span>. The transitions, robot failures and visual atmosphere create a strange, unsettling and emotional experience.</p><h3 class=\"projet-detail__sous-titre\">Process<span class=\"projet-detail__sous-titre-ligne\" aria-hidden=\"true\"></span></h3><p>This project involved creating an <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">immersive</span> and <span class=\"projet-detail__highlight projet-detail__highlight--rose\">emotional</span> 3D short film from audio produced in Audio 2 class. We had to design a 3D environment and several animation sequences to tell a <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">coherent</span> and impactful story.</p><p>I first developed the concept through a PowerPoint presentation with moodboards, a color palette and visual references to establish the artistic direction. I then worked on the environment, objects, lighting and audio before creating the animation sequences and assembling them in DaVinci Resolve.</p><section class=\"projet-detail__process-gallery\" id=\"intervalle-process-gallery\" aria-label=\"Intervalle project reference gallery\"></section><p>Creating the sequences required a lot of <span class=\"projet-detail__highlight projet-detail__highlight--rose\">patience</span> to maintain visual consistency between scenes. After receiving constructive <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">feedback</span>, I made several corrections and <span class=\"projet-detail__highlight projet-detail__highlight--rose\">improvements</span>, including changing the robot's color directly in DaVinci Resolve, which strengthened my <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">masking</span> and colorization skills.</p>",
                equipe: ["Nurlika Richard: 3D Animator / Modeler / Colorist / Screenwriter"]
            }
        },
        armorade: {
            en: {
                titre: "armorade",
                description: "<p><em>Armorade</em> is a 2D adventure game about a hunter trapped in a mysterious forest. To <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">escape</span>, she must explore the forest, face enemies, improve her abilities and find an <span class=\"projet-detail__highlight projet-detail__highlight--rose\">artifact</span> that will allow her to defeat the final boss.</p><p>The project focused on simple <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">progression</span> mechanics that give players meaningful goals. I drew inspiration from <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">adventure</span> games and Rayman Adventures. Feedback helped the concept <span class=\"projet-detail__highlight projet-detail__highlight--rose\">evolve</span> into a more coherent progression-focused experience.</p>",
                equipe: ["Nurlika Richard: Game designer / Programmer / Interface designer"]
            }
        },
        "liquid-loom": {
            en: {
                titre: "liquid-loom",
                description: "<p>This project involved designing a <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">website</span> for a small business that wanted to <span class=\"projet-detail__highlight projet-detail__highlight--rose\">promote</span> and sell its products online. The goal was to create a complete site that a business could genuinely launch and use.</p><p>I chose to design a website for a juice company using WordPress features and extensions including Elementor, WooCommerce and Product Addons.</p><p>This project allowed me to apply my <span class=\"projet-detail__highlight projet-detail__highlight--cyan\">web design</span> skills while creating a site tailored to a real client's needs.</p>",
                equipe: ["Nurlika Richard: Designer / Web developer"]
            }
        }
    };

    let language = localStorage.getItem("portfolio-language") || "fr";

    function getText(key) {
        return translations[language][key] || translations.fr[key] || key;
    }

    function applyTranslations() {
        document.documentElement.lang = language;
        document.title = document.body.classList.contains("page-projet")
            ? getText("projectPageTitle")
            : getText("homeTitle");

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const value = getText(element.dataset.i18n);
            if (element.dataset.i18nHtml === "true") {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
            element.setAttribute("aria-label", getText(element.dataset.i18nAriaLabel));
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
            element.alt = getText(element.dataset.i18nAlt);
        });

        document.querySelectorAll(".language-switch__button").forEach((button) => {
            const active = button.dataset.language === language;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });

        document.dispatchEvent(new CustomEvent("portfolio:languagechange", {
            detail: { language }
        }));
    }

    function setLanguage(nextLanguage) {
        if (!translations[nextLanguage] || nextLanguage === language) {
            return;
        }
        language = nextLanguage;
        localStorage.setItem("portfolio-language", language);
        applyTranslations();
    }

    function createLanguageSwitcher() {
        const navigation = document.querySelector(".navigation ul");
        if (!navigation || navigation.querySelector(".language-switch")) {
            return;
        }

        const item = document.createElement("li");
        item.className = "language-switch";
        item.setAttribute("aria-label", "Language");
        item.innerHTML = "<button type=\"button\" class=\"language-switch__button\" data-language=\"fr\">FR</button><span aria-hidden=\"true\">/</span><button type=\"button\" class=\"language-switch__button\" data-language=\"en\">EN</button>";
        item.addEventListener("click", (event) => {
            const button = event.target.closest("[data-language]");
            if (button) {
                setLanguage(button.dataset.language);
            }
        });
        navigation.append(item);
    }

    window.portfolioI18n = {
        get language() {
            return language;
        },
        getText,
        getProjectTranslation(projectId) {
            return projectTranslations[projectId]?.[language] || null;
        },
        applyTranslations
    };

    document.addEventListener("DOMContentLoaded", () => {
        createLanguageSwitcher();
        applyTranslations();
    });
})();
