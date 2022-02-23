const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElem = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  const itemElem = document.createElement("li");
  itemElem.textContent = item;
  itemElem.classList.add("item");

  ingredientsElem.append(itemElem);
});