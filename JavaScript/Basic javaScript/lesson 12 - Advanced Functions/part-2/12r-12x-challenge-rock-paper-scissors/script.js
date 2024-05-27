let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

updateScore();
let interValId;
let autoplaying = false;

function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScore();
}

function confirmationButton() {
  document.querySelector(
    ".js-confirmation-button"
  ).innerHTML = `Are you sure you want to reset the score? 
  <button class="js-confirm-yes reset-confirm-button">Yes</button>
  <button class="js-confirm-no reset-confirm-button">No</button>`;

  document.querySelector(".js-confirm-yes").addEventListener("click", () => {
    resetScore();
    removeConfirmation();
  });
  document.querySelector(".js-confirm-no").addEventListener("click", () => {
    removeConfirmation();
  });
}

function removeConfirmation() {
  document.querySelector(".js-confirmation-button").innerHTML = "";
}

document.querySelector(".js-reset-button").addEventListener("click", () => {
  confirmationButton();
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    confirmationButton();
  }
});

function autoPlay() {
  if (!autoplaying) {
    interValId = setInterval(() => {
      let autoPlay = pickComputerValue();
      playGame(autoPlay);
    }, 1000);
    autoplaying = true;
    document.querySelector(".js-autoplay-button").innerHTML = "Stop Playing";
  } else {
    clearInterval(interValId);
    autoplaying = false;
    document.querySelector(".js-autoplay-button").innerHTML = "Auto Play";
  }
}

document.querySelector(".js-autoplay-button").addEventListener("click", () => {
  autoPlay();
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    autoPlay();
  }
});

document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("paper");
});

document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("scissors");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  }
});

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
