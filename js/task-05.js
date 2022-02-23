const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");


const onInputChange = (event) =>
  inputElem.value === ""
    ? (outputElem.textContent = "Anonymous")
    : (outputElem.textContent = event.target.value);

inputElem.addEventListener("input", onInputChange);
