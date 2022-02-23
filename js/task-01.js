const itemsElem = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsElem.length}`);

itemsElem.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  const elemAmount = item.querySelectorAll("li").length;
  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${elemAmount}`);
});
