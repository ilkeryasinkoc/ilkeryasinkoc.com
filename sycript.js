

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


function switchLanguage(lang) {
    if (lang === "en") {
        window.location.href = "index.html";  // İngilizce sayfaya yönlendir
    } else if (lang === "de") {
        window.location.href = "index-de.html"; // Almanca sayfaya yönlendir
 }
}

