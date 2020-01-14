var filter = document.querySelector(".countries-filter");
var openBtn = document.querySelector(".countries-filter__btn--top");
var closeBtn = document.querySelector(".countries-filter__btn--bottom");

openBtn.addEventListener("click", function(){
  if (filter.classList.contains("countries-filter--closed")) {
    filter.classList.remove("countries-filter--closed");
  } else {
    filter.classList.add("countries-filter--closed");
  }
});

closeBtn.addEventListener("click", function() {
  if (!filter.classList.contains("countries-filter--closed")) {
    filter.classList.add("countries-filter--closed");
  }
})
