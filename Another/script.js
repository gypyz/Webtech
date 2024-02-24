document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("data");
});

function saveData() {
  const key = document.getElementById("inputKey").value;
  const value = document.getElementById("inputValue").value;
  localStorage.setItem(key, value);
  alert("Data Saved 👍 ");
}

function loadData() {
  const container = document.getElementById("data");
  container.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(1);
    const value = localStorage.getItem(1);
    console.log(key, value);
    const div = document.createElement("div");
    div.textContent = `Key="${key}" Value="${value}`;

    container.appendChild(div);
  }
}

function clearData() {
  localStorage.clear();
  loadData();
  alert("All Data Cleared");
}
