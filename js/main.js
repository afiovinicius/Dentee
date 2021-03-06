// header background
let header = document.getElementById("s_bgOn");
window.onscroll = function (evt) {
  if (window.scrollY > 12) {
    header.classList.add("bgOn");
  } else {
    header.classList.remove("bgOn");
  }
};

// menu
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// Nav Links Soft
const softLinks = document.querySelectorAll(".js-nav li a");

function scrollToSoft(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const initLink = section.offsetTop;

  window.scrollTo({
    top: initLink - 100,
    behavior: "smooth",
  });
}

softLinks.forEach((sLink) => {
  sLink.addEventListener("click", scrollToSoft);
});

// Button Scroll Top
const scrollTop = document.getElementById("js-scroll-top"),
  rootElement = document.documentElement;
function scrollToTop(e) {
  rootElement.scrollTo({ top: 0, behavior: "smooth" });
}

scrollTop.addEventListener("click", scrollToTop);

// Cards Specialties
const hoverCard = document.querySelectorAll(".card_specialties");

hoverCard.forEach((hActive, index) => {
  hActive.addEventListener("mouseover", (e) => {
    e.preventDefault();

    hoverCard.forEach((hActiveR) => {
      hActiveR.classList.remove("active");
    });

    hActive.classList.toggle("active");
  });
});

// Slide Depoiment
var swiper = new Swiper(".dSlide", {
  slidesPerView: 2,
  spaceBetween: 24,
  cssMode: true,
  navigation: {
    nextEl: ".dSlide .swiper-button-next",
    prevEl: ".dSlide .swiper-button-prev",
  },
  pagination: {
    el: ".dSlide .swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
