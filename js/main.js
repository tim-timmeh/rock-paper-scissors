'use strict'


let computerSelection = computerPlay();
let playerSelection = "Rock";
console.log(computerPlay());
console.log(playerSelection);
//console.log(playRound(playerSelection.toLowerCase(),computerSelection));

function game(){
  let gameFull = 0;
  for (let i = 0; i < 4; i++){
    let gameRound = playRound(playerSelection.toLowerCase(),computerPlay());
    gameFull += gameRound;
    console.log(gameRound);
  }
  if (gameFull > 0) {
    console.log("Your a winner!");
  } else {
    console.log("Computer wins this time.");
  }
}

function computerPlay(){
  switch(Math.ceil(Math.random() * 3)){
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(player,computer){
  switch(player){
    case "rock":
      if (computer == "scissors") {
        return youWin(player,computer);
      };
      if (computer == "paper") {
        return youLose(player,computer);
      };
      break;
    case "paper":
      if (computer == "rock") {
        return youWin(player,computer);
      };
      if (computer == "scissors") {
        return youLose(player,computer);
      };
      break;
    case "scissors":
      if (computer == "paper") {
        return youWin(player,computer);
      };
      if (computer == "rock") {
        return youLose(player,computer);
      };
      break;
  }
  //return `You draw!`;
  return 0
}

function youWin(a,b){
  //return `You win! ${a} beats ${b}`
  return 1
}
function youLose(a,b){
  //return `You lose! ${a} beats ${b}`
  return -1
}
