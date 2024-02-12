let machineNumber = Math.ceil(Math.random() * 21);
let score = 10;
let highscore = 0;

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "ว้าแพ้อีกละ";
// document.querySelector(".guess").value = 15;
// console.log(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;

  if (guess == machineNumber) {
    document.querySelector(".message").textContent = "ถูกแล้วจ้าา";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
      machineNumber = Math.ceil(Math.random() * 21);
    }
  } else if (guess != machineNumber) {
    if (guess > machineNumber) {
      document.querySelector(".message").textContent = "มากไป";
    } else {
      document.querySelector(".message").textContent = "ต่ำไป";
    }

    score--;
    document.querySelector(".score").textContent = score;
    if (score <= 0) {
      document.querySelector(".secret").textContent = machineNumber;
    }
  }
});

document.querySelector(".re").addEventListener("click", () => {
  machineNumber = Math.ceil(Math.random() * 21);
  score = 10;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "เอ้า ทายมา";
});
