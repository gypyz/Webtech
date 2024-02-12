const container = document.getElementById("container");
const button = document.createElement("button");
const table = document.getElementById("myTable");
const form = document.getElementById("myform");

button.textContent = "Click me!";
container.appendChild(button);
button.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  const myRow = table.insertRow();
  let Cell1 = myRow.insertCell(0);
  const Cell2 = myRow.insertCell(1);
  Cell1.textContent = name.value;
  Cell2.textContent = age.value;

  form.reset();
});
