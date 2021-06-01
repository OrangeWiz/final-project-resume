const button = document.querySelector(".js-navigate");
const button2 = document.querySelector(".js-nav");
const screen = document.querySelector(".js-modal-screen");
const page = document.querySelector("body");
//const bar = document.querySelector(".nav-bar");

button.addEventListener("click", function () {
   page.classList.toggle("modal-open");
   // bar.setAttribute("style", "height: 80px");
});

button2.addEventListener("click", function () {
   page.classList.remove("modal-open");
   // bar.setAttribute("style", "height: 80px");
});

screen.addEventListener("click", function () {
   page.classList.remove("modal-open");
});
