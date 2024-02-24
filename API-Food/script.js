document.addEventListener("DOMContentLoaded", function () {
  const menuListElement = document.getElementById("menu-list");
  const cartElement = document.getElementById("cart");
  const clearButton = document.getElementById("clear-cart");
  const checkoutButton = document.getElementById("checkout");

  let cartItems = [];

  // Function to fetch menu items from TheMealDB API
  function fetchMenuItems() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?s=");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          displayMenu(response.meals);
        } else {
          console.error("Failed to fetch menu items");
        }
      }
    };
    xhr.send();
  }

  // Function to display menu items
  function displayMenu(menuItems) {
    if (!menuItems) return;
    menuListElement.innerHTML = "";
    menuItems.forEach((item) => {
      const menuItemElement = document.createElement("div");
      menuItemElement.classList.add("menu-item");
      const price = Math.floor(Math.random() * 10) + 5;
      menuItemElement.innerHTML = `
        <img src="${item.strMealThumb}" alt="${item.strMeal}" class="menu-item-image">
        <p>${item.strMeal}</p>
        <p>$${price}</p>
        <button onclick="addToCart('${item.strMeal}', ${price})">Add to Cart</button>
      `;
      menuListElement.appendChild(menuItemElement);
    });
  }

  // Function to add item to cart
  window.addToCart = function (name, price) {
    cartItems.push({ name, price });
    saveCart();
    renderCart();
    SumPrice();
  };

  // Function to remove item from cart
  window.removeFromCart = function (index) {
    cartItems.splice(index, 1);

    saveCart();
    renderCart();
    SumPrice();
  };

  // Function to render cart
  function renderCart() {
    cartElement.innerHTML = "";
    cartItems.forEach((item, index) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.innerHTML = `
        <p>${item.name} - $${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartElement.appendChild(cartItemElement);
    });
  }

  // Function to save cart to local storage
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  // Function to load cart from local storage
  function loadCart() {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      cartItems = JSON.parse(storedCart);
      renderCart();
    }
  }

  // Function to clear cart
  window.clearCart = function () {
    cartItems = [];
    localStorage.clear();
    SumPrice();
    renderCart();
  };

  // Function to handle checkout
  window.checkout = function () {
    // Implement your checkout logic here

    localStorage.clear();
    SumPrice();
    renderCart();
    console.log("Checkout");
  };

  // Event listener for clear cart button
  clearButton.addEventListener("click", clearCart);

  // Event listener for checkout button
  checkoutButton.addEventListener("click", checkout);

  function SumPrice() {
    disprice = document.getElementById("sumprice");
    let sum = 0;
    cartItems.forEach((element) => {
      sum = sum + element.price;
    });
    disprice.textContent = "Total Price: $" + sum;
  }

  loadCart();

  fetchMenuItems();
});
