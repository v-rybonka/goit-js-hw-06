let counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const buttonCountMinus = document.querySelector('[data-action = "decrement"]');

const buttonCountPlus = document.querySelector('[data-action="increment"]');

buttonCountMinus.addEventListener("click", () => {
  counterValue.textContent -= 1;
});

buttonCountPlus.addEventListener("click", () => {
  counterValue.textContent++;
});
