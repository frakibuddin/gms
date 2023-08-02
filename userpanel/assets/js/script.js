let body = document.body;
let modeBtn = document.querySelector("#mode-btns");
modeBtn.style.cursor = "pointer";

modeBtn.onclick = () => {
  if (body.classList.contains("bg-dark")) {
    body.setAttribute("class", "bg-light");
    modeBtn.innerHTML = `<i class="fa-regular fa-moon">`;
  } else {
    body.setAttribute("class", "bg-dark");
    modeBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  }
};

window.setTimeout(function () {
  $(".alert")
    .slideUp(500, 0)
    .slideUp(500, function () {
      $(this).slideUp();
    });
}, 4000);
new DataTable("#example_wrapper");
