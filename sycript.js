

// 🎭 Scroll ile Animasyon
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
    let scrollY = window.scrollY + window.innerHeight * 0.8;
    sections.forEach(section => {
        if (section.offsetTop < scrollY) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// 🏷️ Navbar Scroll Efekti (Yumuşak Geçiş)
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.transition = "background 0.3s ease-in-out";
        navbar.style.background = "rgba(0, 85, 170, 1)";
    } else {
        navbar.style.background = "rgba(0, 119, 204, 0.9)";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀ Light Mode";
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                darkModeToggle.textContent = "☀ Light Mode";
            } else {
                localStorage.setItem("darkMode", "disabled");
                darkModeToggle.textContent = "🌙 Dark Mode";
            }
        });
    }
});



function switchLanguage(lang) {
    if (lang === "en") {
        window.location.href = "index.html";  // İngilizce sayfaya yönlendir
    } else if (lang === "de") {
        window.location.href = "index-de.html"; // Almanca sayfaya yönlendir
 }
}

document.addEventListener("DOMContentLoaded", function () {
    let educationSection = document.getElementById("education");

    function checkScroll() {
        let rect = educationSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            educationSection.classList.add("show");
        }
    }

    // Sayfa yüklenince ve scroll yapıldığında kontrol et
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            mobileNav.classList.toggle("open");

            if (mobileNav.classList.contains("open")) {
                document.body.classList.add("no-scroll");
            } else {
                document.body.classList.remove("no-scroll");
            }
        });

        document.addEventListener("click", function (event) {
            if (!mobileNav.contains(event.target) && !menuToggle.contains(event.target)) {
                mobileNav.classList.remove("open");
                document.body.classList.remove("no-scroll");
            }
        });
    }
});

