var fields = document.querySelectorAll(".plan-add__textarea");

var addEvent = function (item) {
  item.addEventListener("input", function() {
    if (item.value && !item.classList.contains("plan-add__textarea--dark-border")) {
    item.classList.add("plan-add__textarea--dark-border")
  } else if (!item.value && item.classList.contains("plan-add__textarea--dark-border")) {
    item.classList.remove("plan-add__textarea--dark-border")
  }
  })
};

for (var i = 0; i < fields.length; i++) {
  if (fields[i].value) {
    fields[i].classList.add("plan-add__textarea--dark-border");
  }
  addEvent(fields[i])
}

var countryButton = document.querySelector(".plan-add__btn-select-country");

countryButton.addEventListener("click", function() {
  changeClass(countryButton);
});

var changeClass = function(item) {
  if (item.classList.contains("plan-add__btn-select-country--opened")) {
    item.classList.remove("plan-add__btn-select-country--opened");
  } else {
    item.classList.add("plan-add__btn-select-country--opened");
  }
}



