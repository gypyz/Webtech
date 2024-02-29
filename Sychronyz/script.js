//synchronous
// function brewCoffee() {
//   console.log("Start brewing coffe 🍵");
//   const startTime = new Date().getTime();
//   while (new Date().getTime() < startTime + 3000)
//     console.log("Coffee is ready");
// }

// console.log("Ordering coffee");
// brewCoffee();
// console.log("Coffee reciveved, doing other tasks.");

// function brewCoffee(callback) {
//   console.log("Start brewing coffe 🍵");
//   setTimeout(() => {
//     console.log("Coffee is ready 🍵");
//     callback();
//   }, 3000); //ชงกาแฟใน 3 วินาทีเรียก callback
// }

// console.log("Ordering coffee");
// brewCoffee(() => {
//   console.log("Coffee reciveved, doing other tasks.");
// });
// console.log("Coffee reciveved, doing other tasks.");

//Asynchronous 2: async - await
function brewCoffee(callback) {
  console.log("Start brewing coffe 🍵");
  setTimeout(() => {
    console.log("Coffee is ready 🍵");
    callback();
  }, 3000); //ชงกาแฟใน 3 วินาทีเรียก callback
}

async function orderCoffee() {
  console.log("Ordering Coffee");
  await brewCoffee();
  console.log("Coffee recieved, doing other tasks");
}

orderCoffee();
console.log("Waiting for coffee, doing other tasks.");
