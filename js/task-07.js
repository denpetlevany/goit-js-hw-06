const sliderElem = document.querySelector("#font-size-control");
const spanElem = document.querySelector("#text");

const changeSize = () => (spanElem.style.fontSize = sliderElem.value + "px");

sliderElem.addEventListener("input", changeSize);
