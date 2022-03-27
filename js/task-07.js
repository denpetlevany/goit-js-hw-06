const sliderElem = document.querySelector("#font-size-control");
const spanElem = document.querySelector("#text");

spanElem.style.fontSize = `${sliderElem.value}px`;
sliderElem.addEventListener("input", () => {
  spanElem.style.fontSize = `${sliderElem.value}px`;
});
