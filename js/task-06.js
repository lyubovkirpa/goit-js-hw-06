const inputText = document.querySelector("input");

inputText.addEventListener("blur", onInputTextBlur);

function onInputTextBlur(event) {
  if (event.currentTarget.value.length > inputText.dataset.length) {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  } else {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  }
}
