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

// onscroll animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.1)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};
window.onscroll = function () {
  handleScrollAnimation();
  let pos = window.scrollY;
};
