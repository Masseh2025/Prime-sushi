const menu = document.querySelector(".nav__menu-icon");
const secondaryNav = document.querySelector(".nav-secondary");

menu.addEventListener("click", function () {
  secondaryNav.classList.toggle("invisible");
});
