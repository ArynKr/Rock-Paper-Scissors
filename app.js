const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const humanImg = document.querySelector(".human-img");
const computerImg = document.querySelector(".computer-img");
const winCount = document.querySelector(".win-count");
const tieCount = document.querySelector(".tie-count");
const loseCount = document.querySelector(".lose-count");
const roundCount = document.querySelector(".round-count");

const imgLocations = [
  "./images/rock.png",
  "./images/paper.png",
  "./images/scissors.png",
];

const randNumber = () => Math.floor(Math.random() * 3);
let wins = 0;
let losses = 0;
let ties = 0;
let rounds = 1;

const updateScores = () => {
  winCount.innerHTML = wins;
  tieCount.innerHTML = ties;
  loseCount.innerHTML = losses;
  roundCount.innerHTML = `ROUND ${rounds}`;
};

const isWinner = (humanChoice = 0, computerChoice = 0) => {
  if (humanChoice == 0) {
    if (computerChoice == 1) {
      return false;
    }
    if (computerChoice == 2) {
      return true;
    }
    return "tie";
  }
  if (humanChoice == 1) {
    if (computerChoice == 0) {
      return true;
    }
    if (computerChoice == 2) {
      return false;
    }
    return "tie";
  }
  if (humanChoice == 2) {
    if (computerChoice == 1) {
      return true;
    }
    if (computerChoice == 0) {
      return false;
    }
    return "tie";
  }
};

rock.addEventListener("click", () => {
  humanImg.attributes.src.value = imgLocations[0];
  const randNum = randNumber();
  computerImg.attributes.src.value = imgLocations[randNum];
  const won = isWinner(0, randNum);
  if (won != "tie") {
    if (won) {
      wins++;
    } else {
      losses++;
    }
  } else {
    ties++;
  }
  rounds++;
  updateScores();
});

paper.addEventListener("click", () => {
  humanImg.attributes.src.value = imgLocations[1];
  const randNum = randNumber();
  computerImg.attributes.src.value = imgLocations[randNum];
  const won = isWinner(1, randNum);
  if (won != "tie") {
    if (won) {
      wins++;
    } else {
      losses++;
    }
  } else {
    ties++;
  }
  rounds++;
  updateScores();
});

scissors.addEventListener("click", () => {
  humanImg.attributes.src.value = imgLocations[2];
  const randNum = randNumber();
  computerImg.attributes.src.value = imgLocations[randNum];
  const won = isWinner(2, randNum);
  if (won != "tie") {
    if (won) {
      wins++;
    } else {
      losses++;
    }
  } else {
    ties++;
  }
  rounds++;
  updateScores();
});
