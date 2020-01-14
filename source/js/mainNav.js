var mainMenu = document.querySelector(".main-nav");
var menuButton = document.querySelector(".main-nav__toggle");

menuButton.addEventListener("click", function() {
  if (mainMenu.classList.contains("main-nav--closed")) {
    mainMenu.classList.remove("main-nav--closed");
  } else {
    mainMenu.classList.add("main-nav--closed");
  }
});