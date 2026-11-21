/*
 * Page content: edit this file to update the site.
 *
 * - To add a project, copy an entry of PROJECTS and fill both "fr" and "en".
 * - To add a skill, add it to the right group of STACK.
 * - Static texts of index.html live in TRANSLATIONS (key = data-i18n attribute).
 */

const PROJECTS = [
    {
        name: "herdr-always-need-mass-effect",
        tags: ["Python", "TypeScript", "SVG"],
        fr: "Trois layouts pour l'application Herdr, un par jeu Mass Effect : plaques ambrées, anneaux holographiques et panneau « Ressources ».",
        en: "Three layouts for the Herdr app, one per Mass Effect game: amber plates, holographic rings and a \"Resources\" panel.",
        url: "https://github.com/MmeOokamy/herdr-always-need-mass-effect",
    },
    {
        name: "herdr-always-need-cats",
        tags: ["Python", "TypeScript", "Pixel art"],
        fr: "Des chats en pixel art dans Herdr : un chat d'usage dans la barre latérale, un chat par agent Claude Code, des notifications en forme de chat.",
        en: "Pixel art cats in Herdr: a usage cat in the sidebar, one cat per Claude Code agent, cat-shaped notifications.",
        url: "https://github.com/MmeOokamy/herdr-always-need-cats",
    },
    {
        name: "pycharm-always-need-mass-effect-hud",
        tags: ["PyCharm", "JSON", "Python"],
        fr: "Le thème HUD orange de cette page, version PyCharm : thème d'interface et couleurs de l'éditeur, pensées d'abord pour Python.",
        en: "The orange HUD theme of this page, PyCharm edition: UI theme and editor colors, designed for Python first.",
        url: "https://github.com/MmeOokamy/pycharm-always-need-mass-effect-hud",
    },
    {
        name: "ookamy.fr",
        tags: ["FastAPI", "Vue 3", "TypeScript", "CI/CD"],
        fr: "Mon site perso, mon bac à sable : une API FastAPI, une SPA Vue 3 bilingue et un back-office, déployés automatiquement.",
        en: "My personal site and sandbox: a FastAPI API, a bilingual Vue 3 SPA and a back-office, all deployed automatically.",
        url: "https://www.ookamy.fr/",
    },
    {
        name: "Jeux PyGame",
        nameEn: "PyGame games",
        tags: ["Python", "PyGame"],
        fr: "Ma passion du moment : des petits jeux en PyGame, présentés dans la section Projets de mon site.",
        en: "My current passion: small PyGame games, shown in the Projects section of my site.",
        url: "https://www.ookamy.fr/projets",
    },
];

const STACK = [
    {
        fr: "Langages",
        en: "Languages",
        items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML / CSS", "PHP"],
    },
    {
        fr: "Back-end",
        en: "Back-end",
        items: ["FastAPI", "Django", "Flask", "Tortoise ORM", "PostgreSQL", "SQLite"],
    },
    {
        fr: "Front-end",
        en: "Front-end",
        items: ["Vue 3", "Pinia", "Vite", "Bulma"],
    },
    {
        fr: "Jeux & bots",
        en: "Games & bots",
        items: ["PyGame", "discord.py"],
    },
    {
        fr: "DevOps & homelab",
        en: "DevOps & homelab",
        items: ["Proxmox", "Nginx", "Linux", "GitHub Actions", "GitLab CI", "systemd", "uv"],
    },
    {
        fr: "Tests & qualité",
        en: "Tests & quality",
        items: ["pytest", "Vitest", "Ruff", "Oxlint", "Prettier"],
    },
];

const TRANSLATIONS = {
    en: {
        "skip": "Skip to content",
        "nav.about": "Profile",
        "nav.projects": "Missions",
        "nav.stack": "Arsenal",
        "nav.homelab": "Homelab",
        "hero.label": "// Personnel file — access granted",
        "hero.role": "Python developer · Web · Homelab",
        "hero.tagline": "I tinker with APIs, interfaces and servers, and I code small games for fun.",
        "about.title": "Profile",
        "about.p1": "Welcome to my world! As a curious developer I have tried quite a few languages, but <strong>Python</strong> won my heart.",
        "about.p2": "My playground goes from websites to desktop apps: APIs with FastAPI, Vue.js interfaces, Discord bots, and self-hosted servers at home.",
        "about.p3": "<strong>My current passion?</strong> PyGame games. Who knows, a playable version for PC, mobile or browser may see the light of day…",
        "about.class": "Class",
        "about.classValue": "Engineer (Pythonist)",
        "about.weapon": "Favourite weapon",
        "about.ship": "Ship",
        "about.shipValue": "Proxmox homelab",
        "about.status": "Status",
        "about.statusValue": "On a mission",
        "projects.title": "Missions",
        "projects.intro": "A few recent projects. The list grows mission after mission.",
        "projects.open": "Open",
        "stack.title": "Arsenal",
        "homelab.title": "Homelab &amp; DevOps",
        "homelab.intro": "My projects run on my own hardware. It is my lab for learning system administration.",
        "homelab.s1.title": "Code",
        "homelab.s1.text": "Repositories on GitHub and GitLab, automated tests with pytest and Vitest.",
        "homelab.s2.title": "CI/CD",
        "homelab.s2.text": "GitHub Actions and GitLab CI with a home-made runner: lint, tests, build, deploy.",
        "homelab.s3.title": "Servers",
        "homelab.s3.text": "Proxmox virtual machines and a NAS; Nginx as a reverse proxy in front of the services.",
        "homelab.s4.title": "Online",
        "homelab.s4.text": "The API runs at home, the public site is served from OVH.",
        "footer.cookie": "Into the unknown!",
        "footer.contact": "A question, a project?",
        "footer.contactLink": "Get in touch",
        "footer.made": "Handmade, in HTML and CSS",
    },
};
