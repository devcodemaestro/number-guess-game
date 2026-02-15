let computerNum = 0;
let goButton = document.querySelector(".guessButton");
let userInput = document.querySelector("#guessInput");
let result = document.querySelector(".result");
goButton.addEventListener("click", play);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < computerNum) {
    result.textContent = "Up!!";
  } else if (userValue > computerNum) {
    result.textContent = "Down!!";
  } else {
    result.textContent = "즈엉답!!";
  }
}

pickRandomNum();
