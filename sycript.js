// Wait for DOM to load completely
document.addEventListener("DOMContentLoaded", () => {
    // 🎭 Scroll Animation with Intersection Observer
    const sections = document.querySelectorAll("section");
    const observerOptions = { threshold: 0.1 }; // Trigger animations when 10% of the section is visible

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // 🏷️ Navbar Scroll Effect (Class-based)
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 🌐 Language Switcher
    const languageSwitcher = document.getElementById("language-switcher");
    const switchLanguage = (lang) => {
        const supportedLanguages = {
            en: "index.html",
            de: "index-de.html"
        };

        if (supportedLanguages[lang]) {
            window.location.href = supportedLanguages[lang];
        } else {
            console.error("Unsupported language:", lang);
        }
    };

    if (languageSwitcher) {
        languageSwitcher.addEventListener("change", (event) => {
            switchLanguage(event.target.value);
        });
    }

    // 🌗 Light/Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";

    const applyTheme = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    };

    applyTheme(currentTheme); // Apply saved theme on load

    themeToggle?.addEventListener("click", () => {
        const newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
        applyTheme(newTheme);
    });

    // 📱 Mobile Navigation Toggle
    const mobileNavToggle = document.getElementById("mobile-nav-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    mobileNavToggle?.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
    });
});
