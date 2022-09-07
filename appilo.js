const mobileNav = document.querySelector("ul");
const burgerIcon = document.querySelector(".burger");

burgerIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  burgerIcon.classList.toggle("active");
});

const dropdownLi = document.querySelector(".dropdown");
const dropDwn = document.querySelector(".dropdown-content");

dropdownLi.addEventListener("click", function () {
  dropDwn.classList.toggle("show");
});
