const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossIcon = document.querySelector(".cross-icon");

/* منوی موبایل */
hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.classList.add("show");
});

crossIcon.addEventListener("click", () => {
  hamburgerMenu.classList.remove("show");
});

/* منوی محصولات */
const productMenu = document.querySelector("#product-menu");
productMenu.addEventListener("mouseenter", () => {
  const menu = productMenu.querySelector(".product-menu");
  menu.style.display = "flex";
});
productMenu.addEventListener("mouseleave", () => {
  const menu = productMenu.querySelector(".product-menu");
  menu.style.display = "none";
});

/* منوی بیشتر */
const moreMenu = document.querySelector("#more-menu");
moreMenu.addEventListener("mouseenter", () => {
  const menu = moreMenu.querySelector("ul");
  menu.style.display = "block";
});
moreMenu.addEventListener("mouseleave", () => {
  const menu = moreMenu.querySelector("ul");
  menu.style.display = "none";
});
