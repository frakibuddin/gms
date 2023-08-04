// light & dark mode
let body = document.body;
let modeBtn = document.querySelector("#mode-btns");
let navber = document.querySelector(".navbar");
modeBtn.style.cursor = "pointer";
var mode = "bg-dark";

modeBtn.onclick = () => {
  if (body.getAttribute("class") == "bg-dark") {
    body.setAttribute("class", "bg-light");
    modeBtn.innerHTML = `<i class="fa-regular fa-moon">`;
    navber.classList.add("navbar-light");
    navber.classList.remove("navbar-dark");

    localStorage.setItem("mode", "bg-light");
  } else {
    body.setAttribute("class", "bg-dark");
    modeBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    navber.classList.remove("navbar-light");
    navber.classList.add("navbar-dark");

    localStorage.setItem("mode", "bg-dark");
  }
};

mode = localStorage.getItem("mode");

body.setAttribute("class", mode);

if (body.classList.contains("bg-dark")) {
  navber.classList.add("navbar-dark");
}

// alert message
window.setTimeout(function () {
  $(".alert")
    .slideUp(500, 0)
    .slideUp(500, function () {
      $(this).slideUp();
    });
}, 4000);
