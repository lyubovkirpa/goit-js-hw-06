function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const colorBtn = document.querySelector("button");
const span = document.querySelector("span");

colorBtn.addEventListener("click", onColorBtnClick);

function onColorBtnClick() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}
