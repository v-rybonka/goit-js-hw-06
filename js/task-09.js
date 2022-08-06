const bodyEl = document.body;
const spanEl = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
