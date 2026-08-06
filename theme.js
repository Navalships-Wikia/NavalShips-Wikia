(function () {
    const storageKey = "navalships-theme";
    const savedTheme = localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.dataset.theme = initialTheme;

    function updateToggle(button) {
        const dark = document.documentElement.dataset.theme === "dark";
        button.textContent = dark ? "☀ Light mode" : "☾ Dark mode";
        button.setAttribute("aria-pressed", String(dark));
        button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    }

    document.addEventListener("DOMContentLoaded", function () {
        const nav = document.querySelector("nav");
        if (!nav) {
            return;
        }

        const button = document.createElement("button");
        button.type = "button";
        button.className = "theme-toggle";
        button.addEventListener("click", function () {
            const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
            document.documentElement.dataset.theme = nextTheme;
            localStorage.setItem(storageKey, nextTheme);
            updateToggle(button);
        });

        updateToggle(button);
        nav.appendChild(button);
    });
}());
