/* Rendering and language switch. Content lives in data.js. */

const DEFAULT_LANG = "fr";
const STORAGE_KEY = "ookamy-lang";

// French texts are written in index.html: keep them to switch back.
const originalTexts = new Map();
document.querySelectorAll("[data-i18n]").forEach((el) => {
    originalTexts.set(el, el.innerHTML);
});
const originalTitles = new Map();
document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    originalTitles.set(el, el.title);
});

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function renderProjects(lang) {
    const openLabel = lang === "en" ? TRANSLATIONS.en["projects.open"] : "Ouvrir";
    const html = PROJECTS.map((project) => {
        const name = lang === "en" && project.nameEn ? project.nameEn : project.name;
        const tags = project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("");
        return `
            <article class="card">
                <h3>${escapeHtml(name)}</h3>
                <p>${escapeHtml(project[lang] || project.fr)}</p>
                <ul class="tags">${tags}</ul>
                <a class="card-link" href="${encodeURI(project.url)}" target="_blank" rel="noopener">
                    ${openLabel} <span aria-hidden="true">→</span>
                </a>
            </article>`;
    }).join("");
    document.getElementById("project-list").innerHTML = html;
}

function renderStack(lang) {
    const html = STACK.map((group) => {
        const items = group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
        return `
            <div class="stack-group">
                <h3>${escapeHtml(group[lang] || group.fr)}</h3>
                <ul class="tags">${items}</ul>
            </div>`;
    }).join("");
    document.getElementById("stack-list").innerHTML = html;
}

function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang];
    originalTexts.forEach((text, el) => {
        const key = el.dataset.i18n;
        el.innerHTML = dict && dict[key] ? dict[key] : text;
    });
    originalTitles.forEach((title, el) => {
        const key = el.dataset.i18nTitle;
        el.title = dict && dict[key] ? dict[key] : title;
    });
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    renderProjects(lang);
    renderStack(lang);
}

function initialLanguage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "fr" || saved === "en") return saved;
    } catch (e) {
        // Storage may be blocked: fall back to the browser language.
    }
    return navigator.language && navigator.language.startsWith("fr") ? "fr" : "en";
}

document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
        const lang = button.dataset.lang;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            // Ignore: the choice just won't be remembered.
        }
        applyLanguage(lang);
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage(initialLanguage() || DEFAULT_LANG);
