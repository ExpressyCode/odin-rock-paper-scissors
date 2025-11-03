// get the word "rock", "paper" or "scissors" from the computer
function getComputerChoice() {
    // generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    // return "rock", "paper" or "scissors" based on the random number
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    }
}

// get the word "rock", "paper" or "scissors" from the human
function getHumanChoice() {
    // no need to validate the input now, will assume it's correct
    return prompt("Enter rock, paper or scissors: ");
}

// players score
let humanScore = 0;
let computerScore = 0;

// function to play the game
function playRound(humanChoice,computerChoice) {
    // make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
}

playRound("ROCK", getComputerChoice());