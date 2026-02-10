const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");

enBtn.onclick = () => setLang("en");
arBtn.onclick = () => setLang("ar");

function setLang(lang){
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en]").forEach(el=>{
    el.childNodes[0].nodeValue = el.dataset[lang];
    const arSpan = el.querySelector(".ar");
    if(arSpan) arSpan.style.display = lang === "ar" ? "block" : "none";
  });

  enBtn.classList.toggle("active", lang==="en");
  arBtn.classList.toggle("active", lang==="ar");
}
