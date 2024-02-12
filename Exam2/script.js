const account1 = {
  owner: "Prayuth Snow",
  user: "yuth",
  psw: "1111",
};
const account2 = {
  owner: "Lisa Lazoo",
  user: "lisa",
  psw: "abcd",
};

const accounts = [account1, account2];
//ใช้คำสั้ง find หา lisa แล้ว ค่อยตามหา username

document.querySelector(".login__btn").addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.querySelector(".login__user").value;
  const password = document.querySelector(".login__pass").value;

  curentAcc = accounts.find((acc) => acc.user === username);
  console.log(curentAcc);

  if (username === "admin" && password === "1234") {
    document.querySelector(".welcome").textContent = `ยินดีต้อนรับ ${username}`;
    document.querySelector(".login__user").value = "";
    document.querySelector(".login__pass").value = "";
  }
});
