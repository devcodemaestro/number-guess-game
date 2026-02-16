let computerNum = 0;
let goButton = document.querySelector(".guessButton");
let userInput = document.querySelector("#guessInput");
let result = document.querySelector(".result");
let resultArea = document.querySelector(".result-area");
let resetButton = document.querySelector(".resetButton");
let chance = 5;
let remainingChance = document.querySelector(".remainingChance");
let gameOver = false;
let history = [];
let correctAnswer;

goButton.addEventListener("click", play);
userInput.addEventListener("keydown", enterPlay);

resetButton.addEventListener("click", reset);

userInput.addEventListener("focus", () => {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  correctAnswer = computerNum;
  console.log(correctAnswer);
}

function updateChance() {
  const filledStars = "⭐".repeat(chance);
  const emptyStars = "☆".repeat(5 - chance);
  remainingChance.textContent = filledStars + emptyStars;
}

function play() {
  result.classList.add("original");
  result.classList.remove("red");
  // show result area when any feedback is produced
  if (resultArea) resultArea.classList.remove("hidden");
  let userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    result.classList.add("red");
    result.textContent = "1과 100 사이 숫자를 입력해 주세요";
    return;
  }

  if (history.includes(userValue)) {
    result.classList.add("red");
    result.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요";
    return;
  }

  chance--;
  updateChance();
  if (userValue < computerNum) {
    result.textContent = "⬆️ Up!!";
  } else if (userValue > computerNum) {
    result.textContent = "⬇️ Down!!";
  } else {
    result.classList.add("original");
    result.textContent = "즈엉답!!";
    gameOver = true;
  }

  history.push(userValue);

  if (chance < 1) {
    gameOver = true;
    result.textContent = "실패!!";
  }
  if (gameOver === true) {
    goButton.disabled = true;
    goButton.classList.add("disabled");
  }
}

function enterPlay(event) {
  if (event.key === "Enter") {
    result.classList.add("original");
    play();
    userInput.value = "";
    userInput.focus();
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();
  result.textContent = "";
  if (resultArea) resultArea.classList.add("hidden");
  chance = 5;
  updateChance();
  gameOver = false;
  goButton.disabled = false;
  goButton.classList.remove("disabled");
  result.classList.add("original");
  history = [];
  userInput.focus();
}

pickRandomNum();
updateChance();
userInput.focus();
