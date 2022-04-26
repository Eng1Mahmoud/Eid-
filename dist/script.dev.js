"use strict";

var left = document.querySelector(".contener .content .left");
var right = document.querySelector(".contener .content .right");
var open_sound = new Audio("./mixkit-scary-wooden-door-opening-190.wav");

window.onload = function () {
  left.parentElement.onclick = function () {
    left.classList.add("openl");
    right.classList.add("openr");
    setTimeout(function () {
      open_sound.play();
    }, 1000);
  };
};