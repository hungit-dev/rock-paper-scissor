/*
let humanScore = 0;
computerScore = 0;

//step 1: getComputerChoice
function getComputerChoice() {
  x = Math.floor(Math.random() * 3);
  if (x === 0) {
    return "rock";
  } else if (x === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

 //Step 2: get human Choice 
function getHumanChoice(){
    userInput=prompt("Rock,paper,scissors?")
    return userInput.toLowerCase()
}


//Step 3: decide who will win each round by using conditional syntax
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("H: " + humanChoice);
    console.log("C: " + computerChoice);
    console.log("Tie!!!");
  } else {
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "paper") {
          console.log("H: " + humanChoice);
          console.log("C: " + computerChoice);
          console.log("You lose");
          computerScore++;
        } else if (computerChoice === "scissors") {
          console.log("H: " + humanChoice);
          console.log("C: " + computerChoice);
          console.log("You Won!!");
          humanScore++;
        }
        break;
      case "paper":
        if (computerChoice === "scissors") {
          console.log("H: " + humanChoice);
          console.log(computerChoice);
          console.log("C: " + "You lose");
          computerScore++;
        } else if (computerChoice === "rock") {
          console.log("H: " + humanChoice);
          console.log("C: " + computerChoice);
          console.log("You won");
          humanScore++;
        }
        break;
      case "scissors":
        if (computerChoice === "rock") {
          console.log("H: " + humanChoice);
          console.log("C: " + computerChoice);
          console.log("You lose");
          computerScore++;
        } else if (computerChoice === "paper") {
          console.log("H: " + humanChoice);
          console.log("C: " + computerChoice);
          console.log("You won");
          humanScore++;
        }
        break;
    }
  }
}
//Step 4:  play 5 times and keep the results 

function PlayGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log("Human score: " + humanScore);
  console.log("Computer score: " + computerScore);
}

//Step 5: decide who will win in the whole game 
function result() {
  if (humanScore > computerScore) {
    return "Congratulation!!!You won";
  } else if (humanScore === computerScore) {
    return "TIEEEEEE!!!!!";
  } else {
    return "You loseeeee!!!!!";
  }
}
console.log(result());
*/

let humanScore = 0;
let computerScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const displayResult = document.querySelector(".result");
const humanPoint = document.querySelector(".human-score");
const computerPoint = document.querySelector(".computer-score");
const winner = document.querySelector(".winner");

//When clicking Rock Button
rockButton.addEventListener("click", function () {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  let humanChoice = "rock";
  switch (computerChoice) {
    case "rock":
      displayResult.textContent = "TIE!";
      break;
    case "paper":
      displayResult.textContent = "You Lose!";
      computerScore++;
      break;
    case "scissors":
      displayResult.textContent = "You Won!";
      humanScore++;
      break;
  }
  humanPoint.textContent = "HUMAN SCORE IS:" + humanScore;
  computerPoint.textContent = "COMPUTER SCORE IS:" + computerScore;
  if (humanScore === 5) {
    winner.textContent = "YOU ARE THE WINNER!!!";
  }
  if (computerScore === 5) {
    winner.textContent = "COMPUTER IS THE WINNER!!!";
  }
});

//When clicking Paper Button
paperButton.addEventListener("click", function () {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  let humanChoice = "paper";
  switch (computerChoice) {
    case "rock":
      displayResult.textContent = "You Won!";
      humanScore++;
      break;
    case "paper":
      displayResult.textContent = "TIE!";
      break;
    case "scissors":
      displayResult.textContent = "You Lose!";
      computerScore++;
      break;
  }
  humanPoint.textContent = "HUMAN SCORE IS:" + humanScore;
  computerPoint.textContent = "COMPUTER SCORE IS:" + computerScore;

  if (humanScore === 5) {
    winner.textContent = "YOU ARE THE WINNER!!!";
  }
  if (computerScore === 5) {
    winner.textContent = "COMPUTER IS THE WINNER!!!";
  }
});

//When clicking scissors Button
scissorsButton.addEventListener("click", function () {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  let humanChoice = "scissors";
  switch (computerChoice) {
    case "rock":
      displayResult.textContent = "You Lose!";
      computerScore++;
      break;
    case "paper":
      displayResult.textContent = "You Won!";
      humanScore++;
      break;
    case "scissors":
      displayResult.textContent = "TIE";
      break;
  }
  humanPoint.textContent = "HUMAN SCORE IS:" + humanScore;
  computerPoint.textContent = "COMPUTER SCORE IS:" + computerScore;
  if (humanScore === 5) {
    winner.textContent = "YOU ARE THE WINNER!!!";
  }
  if (computerScore === 5) {
    winner.textContent = "COMPUTER IS THE WINNER!!!";
  }
});
