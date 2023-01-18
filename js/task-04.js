const counterValue = {
  value: 0,
  decrementBtn() {
    console.log(this);
    this.value -= 1;
  },

  incrementBtn() {
    console.log(this);
    this.value += 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

console.log(decrementBtn);
console.log(incrementBtn);
console.log(counterValue);

decrementBtn.addEventListener("click", () => {
  counterValue.decrementBtn();
  valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", () => {
  counterValue.incrementBtn();
  valueEl.textContent = counterValue.value;
});
