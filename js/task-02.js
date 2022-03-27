const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElem = document.querySelector("#ingredients");

const makeIngredientsList = (elem) => {
  return elem.map((elem) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = elem;
    ingredientItem.classList.add("item");
    return ingredientItem;
  });
};
const elements = makeIngredientsList(ingredients);
ingredientsElem.append(...elements);
