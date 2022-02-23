function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColorElem = document.querySelector("body");
const textColorElem = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");


const onChangeColor = () => {
  bodyColorElem.style.backgroundColor = getRandomHexColor();
  textColorElem.textContent = bodyColorElem.style.backgroundColor;
};

changeColorBtn.addEventListener("click", onChangeColor);
