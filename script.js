/* ================= Language Toggle ================= */

let currentLang = "en";

const toggleBtn = document.getElementById("langToggle");
const translatable = document.querySelectorAll("[data-en]");

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  translatable.forEach(el => {
    el.textContent = el.dataset[currentLang];
  });

  toggleBtn.textContent = currentLang === "en" ? "AR" : "EN";
});

/* ================= Scroll Reveal (Apple-like) ================= */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.25 }
);

reveals.forEach(el => observer.observe(el));
