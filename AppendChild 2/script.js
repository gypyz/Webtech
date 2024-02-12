const container = document.getElementById("container");
const img = document.createElement("img");
const ul = document.getElementById("fruits");

img.src = "toothless-dragon.gif";
img.alt = "toothless";

container.appendChild(img);

const fruits = ["Apple", "Banana", "Mango", "Strawberry", "Orange"];

fruits.forEach((fruits) => {
  const li = document.createElement("li");
  li.textContent = fruits;
  ul.appendChild(li);
});
