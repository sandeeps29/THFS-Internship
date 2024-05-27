let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

updateScore();
let interValId;
let autoplaying = false;

function autoplay() {
  if (!autoplaying) {
    interValId = setInterval(function () {
      let autoPlay = pickComputerValue();
      playGame(autoPlay);
    }, 1000);
    autoplaying = true;
  } else {
    clearInterval(interValId);
    autoplaying = false;
  }
}

function playGame(playerPick) {
  const computerMove = pickComputerValue();
  let result;
  if (playerPick === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  } else if (playerPick === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerPick === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.loses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  updateScore();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You Picked <img src ="rock-paper-scissors-images/${playerPick}-emoji.png" class = "move-icon"> 
  Computer Picked <img src ="rock-paper-scissors-images/${computerMove}-emoji.png" class = "move-icon">`;

  localStorage.setItem("score", JSON.stringify(score));
}

function pickComputerValue() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function updateScore() {
  const p1Element = document.querySelector(".js-score");
  p1Element.innerHTML = `wins : ${score.wins}, loses : ${score.loses}, ties : ${score.ties} `;
}
