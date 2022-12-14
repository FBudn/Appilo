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

/* BURGER X ICON */

const dropBurger = document.querySelector(".burger-icon");
const droP = document.querySelector("ul");
const burgIc = document.querySelector(".burger");

dropBurger.addEventListener("click", function () {
  droP.classList.toggle("active");
  burgIc.classList.toggle("active");
});

/* GO TO TOP BUTTON */
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* FAQs buttons */

const FQSbutton = document.querySelector(".header-button-flex-row");
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

/* scrolling animations */

function reveal() {
  var reveals =
    document.querySelectorAll(
      ".reveal"
    ); /* reveals.lenght w p??tli ??eby robi??a si?? niesko??czon?? ilo???? razy?*/
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight =
      window.innerHeight; /* window.innerHeight - wysoko???? widocznego obszaru */
    var elementTop =
      reveals[i].getBoundingClientRect()
        .top; /* getBoundingClientRect().top; - odleg??o???? elementu od g??ry widocznego obszaru*/
    /* elementTop to odleg??o???? elementu z klas?? reveal od g??ry widocznego obszaru lub d??ugo????, kt??ra zosta??a przewini??ta*/
    var elementVisible = 80; /* odleg??o???? (w px) w kt??rej element powinien zosta?? od??osni??ty u??ytkownikowi*/

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  /* je??li odleg??o???? elementu z kl. reveal od g??ry widocznego obszaru albo d??ugo????, kt??ra zosta??a przewini??ta jest mniejsza ni??
  wysoko???? widocznego obszaru - odleg??o???? w kt??rej element powinien zosta?? ods??oni??ty to element si?? pokazuje. Inaczej chowa.
  */
}

window.addEventListener("scroll", reveal);

// Aby sprawdzi?? pozycj?? przewijania podczas ??adowania strony
reveal();

/* SLIDES  */
/*
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("members-slide");
  if (n > x.length) {
    slideIndex = 0;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
} */

const leftButton = document.querySelector(".members-nav-buttons-L");
const sliderL = document.querySelector(".flex-row-members-inside-for-slide");

leftButton.addEventListener("click", function () {
  sliderL.classList.toggle("members-slide-left");
});

const rightButton = document.querySelector(".members-nav-buttons-P");
const sliderR = document.querySelector(".flex-row-members-inside-for-slide");

rightButton.addEventListener("click", function () {
  sliderR.classList.toggle("members-slide-right");
});
