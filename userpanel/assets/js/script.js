// light & dark mode
let body = document.body;
let modeBtn = document.querySelector("#mode-btns");
let navber = document.querySelector(".navbar");
modeBtn.style.cursor = "pointer";
var mode = "bg-dark";

modeBtn.onclick = () => {
  if (body.classList.contains("bg-dark")) {
    body.setAttribute("class", "bg-light");
    modeBtn.innerHTML = `<i class="fa-regular fa-moon">`;
    navber.classList.remove("navbar-dark");

    localStorage.setItem("mode", "bg-light");
  } else {
    body.setAttribute("class", "bg-dark");
    modeBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    navber.classList.add("navbar-dark");

    localStorage.setItem("mode", "bg-dark");
  }
};
mode = localStorage.getItem("mode");

console.log(mode);

body.setAttribute("class", mode);

// alert message
window.setTimeout(function () {
  $(".alert")
    .slideUp(500, 0)
    .slideUp(500, function () {
      $(this).slideUp();
    });
}, 4000);
new DataTable("#example_wrapper");
