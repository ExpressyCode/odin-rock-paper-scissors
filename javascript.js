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
    console.log(computerChoice);
    // game logic:
    // rock beats scissors but loses to paper
    // paper beats rock but loses to scissors
    // scissors beats paper but loses to rock
    if (humanChoice === "rock") {
        // human choose rock
        if (computerChoice === "rock") {
            // tie
            console.log("It's a tie!");
        } else if (computerChoice === "scissors") {
            // win
            console.log("You win! Rock beats Scissors.");
        } else {
            // lose
            console.log("You lose! Paper beats Rock.");
        }
    } else if (humanChoice === "paper") {
        // human choose paper
        if (computerChoice === "paper") {
            // tie
            console.log("It's a tie!");
        } else if (computerChoice === "rock") {
            // win
            console.log("You win! Paper beats Rock.");
        } else {
            // lose
            console.log("You lose! Scissors beats Paper.");
        }
    } else {
        // human choose scissors
        if (computerChoice === "scissors") {
            // tie
            console.log("It's a tie!");
        } else if (computerChoice === "paper") {
            // win
            console.log("You win! Scissors beats Paper.");
        } else {
            // lose
            console.log("You lose! Rock beats Scissors.");
        }
    }
}

playRound("paper",getComputerChoice());