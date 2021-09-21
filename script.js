"use strict";

const menu = document.querySelector(".menu");
const features = Array.from(document.querySelectorAll(".features-list"));
const tabs = Array.from(document.querySelectorAll(".tabs"));
const questions = Array.from(document.querySelectorAll(".questions"));
const answers = Array.from(document.querySelectorAll(".answers"));
const submit = document.querySelector(".submit");
const line = Array.from(document.querySelectorAll(".line"));
const images = document.querySelector(".images");
const navbar = document.querySelector(".navbar");
const nav = document.querySelector("nav");
const hidden = document.querySelector(".hidden-stuff");
const closeMenu = document.querySelector(".close-menu");
const main = document.querySelector("main");

// MENU
menu.addEventListener("click", function () {
  hidden.style.display = "block";
});

(function () {
  window.onresize = windowSize;
  window.onload = windowSize;
  function windowSize() {
    let myWidth = window.innerWidth;

    if (myWidth > 750) hidden.style.display = "none";
  }
})();

closeMenu.addEventListener("click", function () {
  hidden.style.display = "none";
});

main.addEventListener("click", function () {
  hidden.style.display = "none";
});

// FEATURES
const info = {
  infos: [
    document.getElementById("info1"),
    document.getElementById("info2"),
    document.getElementById("info3"),
  ],
  arr1: ["block", "none", "none"],
  arr2: ["none", "block", "none"],
  arr3: ["none", "none", "block"],
};

features.forEach((el, i) => {
  el.addEventListener("click", function () {
    images.src = `images/illustration-features-tab-${i + 1}.svg`;

    info.infos[0].style.display = info[`arr${i + 1}`][0];
    info.infos[1].style.display = info[`arr${i + 1}`][1];
    info.infos[2].style.display = info[`arr${i + 1}`][2];

    line[0].style.display = info[`arr${i + 1}`][0];
    line[1].style.display = info[`arr${i + 1}`][1];
    line[2].style.display = info[`arr${i + 1}`][2];
  });
});

// FAQ
questions.forEach((el, i) => {
  el.addEventListener("click", function () {
    answers[i].classList.toggle("hidden-answers");
  });
});
