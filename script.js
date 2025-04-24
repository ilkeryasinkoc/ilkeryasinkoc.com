const darkMode=localStorage.getItem("darkMode");function initProgressBars(){let e=document.querySelectorAll(".progress");window.addEventListener("scroll",(function t(){let n=document.getElementById("skills");n&&n.getBoundingClientRect().top<window.innerHeight/1.3&&(e.forEach((e=>{let t=e.getAttribute("data-width");t&&e.style.width!==t&&(e.style.width=t)})),window.removeEventListener("scroll",t))}))}function initSectionReveal(){const e=document.querySelectorAll("section");function t(){let t=window.scrollY+.8*window.innerHeight;e.forEach((e=>{e.offsetTop<t&&e.classList.add("show")}))}window.addEventListener("scroll",t),t()}function initNavbarScroll(){const e=document.getElementById("navbar");function t(){window.scrollY>50?e.classList.add("navbar-scroll"):e.classList.remove("navbar-scroll")}window.addEventListener("scroll",t),t()}function initDarkModeToggle(){const e=document.getElementById("dark-mode-toggle"),t=document.body;e&&("enabled"===localStorage.getItem("darkMode")&&(t.classList.add("dark-mode"),e.textContent="☀ Light Mode"),e.addEventListener("click",(function(){t.classList.toggle("dark-mode"),t.classList.contains("dark-mode")?(localStorage.setItem("darkMode","enabled"),e.textContent="☀ Light Mode"):(localStorage.setItem("darkMode","disabled"),e.textContent="🌙 Dark Mode")})))}function initMobileMenuToggle(){const e=document.getElementById("menu-toggle"),t=document.getElementById("mobile-nav");e&&t&&(e.addEventListener("click",(function(e){e.stopPropagation(),t.classList.toggle("open"),t.classList.contains("open")?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")})),document.addEventListener("click",(function(n){t.contains(n.target)||e.contains(n.target)||(t.classList.remove("open"),document.body.classList.remove("no-scroll"))})))}function initLanguageSwitcher(){const e=document.getElementById("language-select");e&&e.addEventListener("change",(function(){const e=this.value;"en"===e?window.location.href="index.html":"de"===e&&(window.location.href="index-de.html")}))}function initHeroAnimation(){setTimeout((()=>{document.querySelector(".hero-content")?(document.body.classList.add("loaded"),console.log("✅ Animation triggered for .hero-content")):console.warn("⚠️ .hero-content not found!")}),500)}function initTypingEffect(){const e=document.documentElement.lang;let t="";t="de"===e?"Hallo, ich bin Ilker Yasin 👋🏻":"Hi, I'm Ilker Yasin 👋🏻";let n=0;const o=document.querySelector(".hero-content h1");o&&(o.textContent="",function e(){n<t.length&&(o.textContent+=t.charAt(n),n++,setTimeout(e,100))}())}function initEducationAnimation(){const e=document.getElementById("education");function t(){e.getBoundingClientRect().top<window.innerHeight-100&&(e.classList.add("show"),window.removeEventListener("scroll",t))}e&&(window.addEventListener("scroll",t),t())}("enabled"===darkMode||"disabled"!==darkMode&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&document.body.classList.add("dark-mode"),document.addEventListener("DOMContentLoaded",(function(){if("enabled"===localStorage.getItem("darkMode")){document.body.classList.add("dark-mode");const e=document.getElementById("dark-mode-toggle");e&&(e.textContent="☀ Light Mode")}initProgressBars(),initMobileDarkModeToggle();
initMobileLanguageSwitcher();
initSectionReveal(),initNavbarScroll(),initDarkModeToggle(),initMobileMenuToggle(),initLanguageSwitcher(),initHeroAnimation(),initEducationAnimation(),initTypingEffect(),loadData()})),document.querySelectorAll("nav ul li a").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();let t=this.getAttribute("href").substring(1),n=document.getElementById(t);n?window.scrollTo({top:n.offsetTop-50,behavior:"smooth"}):console.warn(`⚠️ Target element with ID '${t}' not found.`)}))}));
// 🔝 Back to Top Button Script
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function initMobileDarkModeToggle() {
  const btn = document.getElementById("mobile-dark-mode-toggle");
  const body = document.body;

  if (!btn) return;

  if (localStorage.getItem("darkMode") === "enabled") {
    btn.textContent = "☀ Light Mode";
  }

  btn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const mode = body.classList.contains("dark-mode") ? "enabled" : "disabled";
    localStorage.setItem("darkMode", mode);
    btn.textContent = mode === "enabled" ? "☀ Light Mode" : "🌙 Dark Mode";
  });
}

function initMobileLanguageSwitcher() {
  const select = document.getElementById("mobile-language-select");
  if (!select) {
    console.warn("⚠️ mobile-language-select bulunamadı");
    return;
  }

  select.addEventListener("change", () => {
    console.log("🌐 Mobil dil değişti:", select.value);
    
    // Menü kapat
    const mobileNav = document.getElementById("mobile-nav");
    if (mobileNav) {
      mobileNav.classList.remove("open");
      document.body.classList.remove("no-scroll");
    }

    // Sayfa yönlendirmesi
    if (select.value === "de") {
      window.location.href = "index-de.html";
    } else {
      window.location.href = "index.html";
    }
  });
}


