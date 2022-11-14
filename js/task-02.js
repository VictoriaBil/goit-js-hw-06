const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const items = ingredients.forEach((ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   console.log(item);
//   const list = document.querySelector("#ingredients");
//   list.append(item);
// });

const ingredientList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = ingredient;
    return itemEl;
  });
};

const elements = ingredientList(ingredients);
const listEl = document.querySelector("#ingredients");
listEl.append(...elements);
