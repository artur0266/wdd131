document.addEventListener("DOMContentLoaded", () => {
  const currentYearSpan = document.getElementById("currentyear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const lastModifiedPara = document.getElementById("lastModified");
  if (lastModifiedPara) {
    lastModifiedPara.textContent = `Última Modificação: ${document.lastModified}`;
  }

  const hamburgerBtn = document.getElementById("hamburger");
  const navMenu = document.getElementById("primaryNav");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      
      if (navMenu.classList.contains("open")) {
        hamburgerBtn.innerHTML = "&times;";
        hamburgerBtn.setAttribute("aria-expanded", "true");
      } else {
        hamburgerBtn.innerHTML = "&#9776;";
        hamburgerBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
});