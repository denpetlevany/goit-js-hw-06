const elems = {
  valueElem: document.querySelector("#value"),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

const onDecrementCounterValue = () => {
  counterValue -= 1;
  elems.valueElem.textContent = counterValue;
};
const onIncrementCounterValue = () => {
  counterValue += 1;
  elems.valueElem.textContent = counterValue;
};


elems.decrementBtn.addEventListener("click", onDecrementCounterValue);
elems.incrementBtn.addEventListener("click", onIncrementCounterValue);
