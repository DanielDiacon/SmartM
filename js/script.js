// menu burger <=>
let body = document.querySelector("body");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.onclick = function () {
   burger.classList.toggle("active");
   menu.classList.toggle("active");
   body.classList.toggle("lock");
};
document.onclick = function (e) {
   if (e.target.id !== "burger" && e.target.classList !== "menu") {
      burger.classList.remove("active");
      menu.classList.remove("active");
      body.classList.remove("lock");
   }
};

// header show <=>
var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
   var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop) {
      navbar.style.top = "-80px";
   } else {
      navbar.style.top = "0";
   }
   lastScrollTop = scrollTop;
});

// loading page <=>
const loader = document.getElementById("loader");
window.addEventListener("load", function () {
   loader.style.visibility = "hidden";
   loader.style.opacity = "0";
   loader.style.transition = "0.7s";
});
