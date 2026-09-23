// Menu no celular
const menuBtn = document.querySelector("[data-menu-btn]");
const nav = document.querySelector("[data-nav]");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Ano no rodapé
document.querySelector("[data-year]").textContent = new Date().getFullYear();