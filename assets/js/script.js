let body = document.body;
let modeBtn = document.querySelector("#mode-btns");
var mode = "bg-dark";

modeBtn.onclick = () => {
  if (body.classList.contains("bg-dark")) {
    modeBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    body.classList.remove("bg-dark");
    localStorage.setItem("mode", "bg-light");
    body.classList.add("bg-light");
  } else {
    body.classList.remove("bg-light");
    localStorage.setItem("mode", "bg-dark");
    body.classList.add("bg-dark");
    modeBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  }
};

mode = localStorage.getItem("mode");
body.classList.add(mode);
