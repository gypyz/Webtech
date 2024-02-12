const words = [
  "apple",
  "banana",
  "orange",
  "mango",
  "strawberry",
  "grape",
  "pineapple",
  "blueberry",
  "raspberry",
  "blackberry",
  "kiwi",
  "watermelon",
  "cantaloupe",
  "honeydew",
  "papaya",
  "guava",
  "lychee",
  "dragonfruit",
  "passionfruit",
  "grapefruit",
  "lime",
  "lemon",
  "cherry",
  "peach",
  "nectarine",
  "apricot",
  "plum",
  "pomegranate",
  "fig",
  "date",
  "persimmon",
  "tangerine",
  "clementine",
  "kumquat",
  "durian",
  "jackfruit",
  "starfruit",
  "avocado",
  "coconut",
  "cranberry",
  "currant",
  "gooseberry",
  "elderberry",
  "quince",
  "pear",
  "acai",
  "sapodilla",
  "soursop",
  "mulberry",
  "boysenberry",
  "loganberry",
  "jambolan",
  "salak",
  "rambutan",
  "longan",
  "pomelo",
];

let selectedWord;
let guessedWord = [];
let incorrectGuesses = 0;

function selectRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function initializeGame() {
  selectedWord = selectRandomWord();
  guessedWord = Array(selectedWord.length).fill("_");
  incorrectGuesses = 0;

  updateDisplay();
}

function updateDisplay() {
  document.getElementById("word").textContent = guessedWord.join(" ");
  document.getElementById(
    "message"
  ).textContent = `Incorrect Guesses: ${incorrectGuesses}`;

  if (guessedWord.join("") === selectedWord) {
    document.getElementById("message").textContent =
      "Congratulations! You've won!";
    showPlayAgainButton();
  } else if (incorrectGuesses >= 6) {
    document.getElementById(
      "message"
    ).textContent = `Game over !! The word was "${selectedWord}". Try again.`;
    showPlayAgainButton();
  } else {
    document.getElementById("playAgain").style.display = "none";
  }
}

function makeGuess(letter) {
  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guessedWord[i] = letter;
      }
    }
  } else {
    incorrectGuesses++;
  }

  updateDisplay();
}

function guessWord(letter) {
  makeGuess(letter);
}

function createLetterButtons() {
  const letterButtonsContainer = document.getElementById("letterButtons");

  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(97 + i);
    const button = document.createElement("button");
    button.textContent = letter;
    button.onclick = function () {
      guessWord(letter);
    };
    letterButtonsContainer.appendChild(button);
  }
}

function showPlayAgainButton() {
  document.getElementById("playAgain").style.display = "block";
}

function resetGame() {
  initializeGame();
  document.getElementById("playAgain").style.display = "none";
}

window.onload = function () {
  initializeGame();
  createLetterButtons();
};
