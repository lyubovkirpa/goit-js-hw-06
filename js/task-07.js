const inputSize = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
console.log(inputSize);

inputSize.addEventListener("input", onFontSizeInput);

function onFontSizeInput(event) {
  spanEl.style.fontSize = event.currentTarget.value + "px";
}
