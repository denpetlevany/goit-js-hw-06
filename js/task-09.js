function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonElem = document.querySelector(".widget button");
const bodyElem = document.querySelector("body");
const colorElem = document.querySelector(".color");

buttonElem.addEventListener("click", () => {
  let newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  colorElem.textContent = newColor;
});
