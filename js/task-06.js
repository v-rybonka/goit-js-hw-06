const inputEl = document.querySelector("#validation-input");
const lengthInput = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(lengthInput)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
  }
}
