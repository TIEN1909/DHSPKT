document.addEventListener("DOMContentLoaded", function () {
    const menuOpen = document.querySelector(".header__menu-bars");
    const menuClose = document.querySelector(".close");
    const menu = document.querySelector(".header__menu-list");
    if (!menuOpen || !menuClose || !menu) return;
    menuOpen.addEventListener("click", function () {
      menu.classList.add("is-active");
    });
    menuClose.addEventListener("click", function () {
      menu.classList.remove("is-active");
    });
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !e.target.matches(".header__menu-bars")) {
        menu.classList.remove("is-active");
      }
    });
  });