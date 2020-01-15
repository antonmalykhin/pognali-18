var mainMenu = document.querySelector(".main-nav");
var innerPageMenu = document.querySelector(".inner-page__nav");
var menuButton = document.querySelector(".main-nav__toggle");

menuButton.addEventListener("click", function() {

  if (innerPageMenu) {
    if (mainMenu.classList.contains("main-nav--closed") &&        innerPageMenu.classList.contains("inner-page__nav--closed")) {
      mainMenu.classList.remove("main-nav--closed");
      mainMenu.classList.remove("inner-page__nav--closed");
    } else {
      mainMenu.classList.add("main-nav--closed");
      mainMenu.classList.add("inner-page__nav--closed");
    }
  } else {
    if (mainMenu.classList.contains("main-nav--closed")) {
      mainMenu.classList.remove("main-nav--closed");
    } else {
      mainMenu.classList.add("main-nav--closed");
    }
  }
});
