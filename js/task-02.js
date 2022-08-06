const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
const liEl = [];

const foodIngredients = ingredients.forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  liEl.push(itemEl);
});

ulEl.append(...liEl);
console.log(ulEl);
