'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayGuessMessage = function (message) {
  document.querySelector(`.guess-message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guessingNumber = Number(document.querySelector(`.number-input`).value);
  console.log(guessingNumber, typeof guessingNumber);

  //No input

  if (!guessingNumber) {
    displayGuessMessage(`Введите число!`);

    //Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage(`Правильно`);
    document.querySelector(`.question`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#9932cc`;
    document.querySelector(`.question`).style.fontSize = `10rem`;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
    //Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? `Слишком много!` : `Слишком мало!`
      );
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayGuessMessage(`Игра окончена!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
  //   //Too high
  // } else if (quessingNumber > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.guess-message`).textContent = `Слишком много!`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.guess-message`).textContent = `Игра окончена!`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }

  //   //Too low
  // } else if (quessingNumber < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.guess-message`).textContent = `Слишком мало!`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.guess-message`).textContent = `Игра окончена!`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  // }
  //};

  //Replay

  document.querySelector(`.again`).addEventListener(`click`, function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector(`.question`).textContent = `???`;
    document.querySelector(`body`).style.backgroundColor = `#000`;
    document.querySelector(`.question`).style.fontSize = `4rem`;
    document.querySelector(`.number-input`).value = ``;
    document.querySelector(`.score`).textContent = score;
    displayGuessMessage(`Начни угадывать!`);
  });
});
