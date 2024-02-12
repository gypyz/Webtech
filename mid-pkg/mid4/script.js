const items = [
  { name: "Apple", category: "Fruit", price: 1 },
  { name: "Carrot", category: "Vegetable", price: 0.5 },
  { name: "Banana", category: "Fruit", price: 0.8 },
  { name: "Cucumber", category: "Vegetable", price: 1.2 },
  { name: "Orange", category: "Fruit", price: 0.9 },
  { name: "Tomato", category: "Vegetable", price: 0.7 },
  { name: "Lettuce", category: "Vegetable", price: 0.3 },
  { name: "Grapes", category: "Fruit", price: 2 },
  { name: "Mushroom", category: "Vegetable", price: 1.5 },
  { name: "Strawberry", category: "Fruit", price: 1.8 },
  { name: "Blueberry", category: "Fruit", price: 2.5 },
  { name: "Potato", category: "Vegetable", price: 0.4 },
  { name: "Broccoli", category: "Vegetable", price: 1.1 },
  { name: "Mango", category: "Fruit", price: 1.7 },
  { name: "Spinach", category: "Vegetable", price: 0.6 },
  { name: "Cherry", category: "Fruit", price: 2.2 },
  { name: "Peas", category: "Vegetable", price: 0.9 },
  { name: "Peach", category: "Fruit", price: 1.3 },
  { name: "Pineapple", category: "Fruit", price: 1.5 },
  { name: "Celery", category: "Vegetable", price: 0.8 },
];
const resultDiv = document.getElementById("result");
const names = items.map(itemname).sort();

function itemname(item) {
  return item.name;
}
resultDiv.innerHTML = `
  <p>${names.join(", ")}</p>
  
`;
