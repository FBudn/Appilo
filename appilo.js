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

/* FAQs buttons */

const FQSbutton = document.querySelector(".button-faqs");
const pFQS = document.querySelector(".p-faqs");

FQSbutton.addEventListener("click", function () {
  pFQS.classList.toggle("showp");
});

const FQSbutton2 = document.querySelector("#b2");
const pFQS2 = document.querySelector("#p2");

FQSbutton2.addEventListener("click", function () {
  pFQS2.classList.toggle("showp");
});

const FQSbutton3 = document.querySelector("#b3");
const pFQS3 = document.querySelector("#p3");

FQSbutton3.addEventListener("click", function () {
  pFQS3.classList.toggle("showp");
});

const FQSbutton4 = document.querySelector("#b4");
const pFQS4 = document.querySelector("#p4");

FQSbutton4.addEventListener("click", function () {
  pFQS4.classList.toggle("showp");
});

const FQSbutton5 = document.querySelector("#b5");
const pFQS5 = document.querySelector("#p5");

FQSbutton5.addEventListener("click", function () {
  pFQS5.classList.toggle("showp");
});

const FQSbutton6 = document.querySelector("#b6");
const pFQS6 = document.querySelector("#p6");

FQSbutton6.addEventListener("click", function () {
  pFQS6.classList.toggle("showp");
});

const FQSbutton7 = document.querySelector("#b7");
const pFQS7 = document.querySelector("#p7");

FQSbutton7.addEventListener("click", function () {
  pFQS7.classList.toggle("showp");
});

const FQSbutton8 = document.querySelector("#b8");
const pFQS8 = document.querySelector("#p8");

FQSbutton8.addEventListener("click", function () {
  pFQS8.classList.toggle("showp");
});
