const inputElem = document.querySelector("input");
const lengthElem = inputElem.getAttribute("data-length");

const onInputBlur = (event) => {
  event.target.classList.add("invalid");

  if (parseInt(lengthElem) === event.target.value.length) {
    event.target.classList.replace("invalid", "valid");
  } else {
    event.target.classList.remove("valid");
  }
};

inputElem.addEventListener("blur", onInputBlur);
