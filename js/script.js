"use strict";

const headerTop = document.querySelector(".header-top");
const parallexImg = document.querySelector("#parallexImg");

// SLick slider settings
$(document).ready(function () {
  $(".hero-slide").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    speed: 4000,
  });
});

let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    var currentScroll = window.scrollY || window.pageYOffset;
    if (currentScroll > lastScrollTop) {
      headerTop.classList.add("header-top-show");
    } else {
      headerTop.classList.remove("header-top-show");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  },
  false
);

function parallax() {
  window.onscroll = function () {
    var speed = 4.0;
    parallexImg.style.backgroundPosition =
      -window.scrollX / speed + "px " + -window.scrollY / speed + "px";
  };
}

parallax();
