// Language toggle (smooth)
let lang = "en";
const toggleBtn = document.getElementById("langToggle");
const trans = document.querySelectorAll("[data-en]");

function setLang(newLang){
  lang = newLang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  trans.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(6px)";
    setTimeout(() => {
      el.textContent = el.dataset[lang];
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 180);
  });

  toggleBtn.textContent = lang === "en" ? "AR" : "EN";
}

toggleBtn.addEventListener("click", () => {
  setLang(lang === "en" ? "ar" : "en");
});

// Apple-level reveal
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("visible");
    io.unobserve(e.target);
  });
}, { threshold: 0.2 });

revealEls.forEach(el => io.observe(el));
