function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

let amount = 0;

function createBoxes() {
  const newElements = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    newElements.push(divEl);
  }
  refs.boxesEl.append(...newElements);
}

function onInputValue(event) {
  amount = event.currentTarget.value;
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
}

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);
refs.input.addEventListener("input", onInputValue);
