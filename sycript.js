document.addEventListener("DOMContentLoaded", function () {
    initProgressBars();       // Skills barlarını başlat
    initSectionReveal();      // Scroll ile bölümler açılacak
    initNavbarScroll();       // Navbar scroll değişimi
    initDarkModeToggle();     // Dark mode aktif
    initMobileMenuToggle();   // Mobil menü aç/kapat
    initLanguageSwitcher();   // Dil değişimi çalışacak
    initHeroAnimation();      // Hero animasyonu
    initEducationAnimation(); // Eğitim bölümü açılacak
});


    
function initProgressBars() {
    let progressBars = document.querySelectorAll(".progress");

    function animateBars() {
        progressBars.forEach(bar => {
            let targetWidth = bar.getAttribute("data-width");
            if (targetWidth && bar.style.width !== targetWidth) {
                bar.style.width = targetWidth;
            }
        });
    }

    function checkSkillsScroll() {
        let skillsSection = document.getElementById("skills");
        if (!skillsSection) return;

        let sectionPos = skillsSection.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            animateBars();
            window.removeEventListener("scroll", checkSkillsScroll);
        }
    }

    window.addEventListener("scroll", checkSkillsScroll);
}



document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        } else {
            console.warn(`⚠️ Target element with ID '${targetId}' not found.`);
        }
    });
});

function initSectionReveal() {
    const sections = document.querySelectorAll("section");

    function revealOnScroll() {
        let scrollY = window.scrollY + window.innerHeight * 0.8;
        sections.forEach(section => {
            if (section.offsetTop < scrollY) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Sayfa açılır açılmaz kontrol etsin
}

function initNavbarScroll() {
    const navbar = document.getElementById("navbar");

    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scroll");
        } else {
            navbar.classList.remove("navbar-scroll");
        }
    }

    window.addEventListener("scroll", handleNavbarScroll);
    handleNavbarScroll(); // Sayfa açılınca da hemen kontrol etsin
}

function initDarkModeToggle() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (!darkModeToggle) return; // Buton yoksa çık

    // Sayfa açıldığında localStorage kontrolü
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀ Light Mode";
    }

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

function initMobileMenuToggle() {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    if (!menuToggle || !mobileNav) return; // Eğer buton ya da menü yoksa çık

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

function initLanguageSwitcher() {
    const languageSelect = document.getElementById("language-select");

    if (!languageSelect) return; // Dil seçimi menüsü yoksa çık

    languageSelect.addEventListener("change", function () {
        const selectedLang = this.value;
        if (selectedLang === "en") {
            window.location.href = "index.html"; // İngilizce sayfa
        } else if (selectedLang === "de") {
            window.location.href = "index-de.html"; // Almanca sayfa
        }
    });
}

function initHeroAnimation() {
    setTimeout(() => {
        let heroSection = document.querySelector(".hero-content");
        if (heroSection) {
            document.body.classList.add("loaded");
            console.log("✅ Animation triggered for .hero-content");
        } else {
            console.warn("⚠️ .hero-content not found!");
        }
    }, 500); // Yarım saniye sonra animasyonu başlat
}

function initEducationAnimation() {
    const educationSection = document.getElementById("education");

    if (!educationSection) return; // Eğer education bölümü yoksa çık

    function revealEducationOnScroll() {
        let rect = educationSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            educationSection.classList.add("show");
            window.removeEventListener("scroll", revealEducationOnScroll); // Bir kere tetiklensin
        }
    }

    window.addEventListener("scroll", revealEducationOnScroll);
    revealEducationOnScroll(); // Sayfa açılır açılmaz kontrol et
}
