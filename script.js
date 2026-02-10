const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");
const translatable = document.querySelectorAll("[data-en]");

function setLang(lang) {
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  translatable.forEach(el => {
    el.textContent = el.dataset[lang];
  });
  enBtn.classList.toggle("active", lang === "en");
  arBtn.classList.toggle("active", lang === "ar");
}

enBtn.onclick = () => setLang("en");
arBtn.onclick = () => setLang("ar");

/* Open Google Maps on branch click */
document.querySelectorAll(".branch").forEach(branch => {
  branch.addEventListener("click", () => {
    window.open(branch.dataset.map, "_blank");
  });
});
