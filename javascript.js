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
            // add 1 to humanScore
            humanScore+=1;
            console.log("You win! Rock beats Scissors.");
        } else {
            // lose
            // add 1 to computerScore
            computerScore+=1;
            console.log("You lose! Paper beats Rock.");
        }
    } else if (humanChoice === "paper") {
        // human choose paper
        if (computerChoice === "paper") {
            // tie
            console.log("It's a tie!");
        } else if (computerChoice === "rock") {
            // win
            // add 1 to humanScore
            humanScore+=1;
            console.log("You win! Paper beats Rock.");
        } else {
            // lose
            // add 1 to computerScore
            computerScore+=1;
            console.log("You lose! Scissors beats Paper.");
        }
    } else {
        // human choose scissors
        if (computerChoice === "scissors") {
            // tie
            console.log("It's a tie!");
        } else if (computerChoice === "paper") {
            // win
            // add 1 to humanScore
            humanScore+=1;
            console.log("You win! Scissors beats Paper.");
        } else {
            // lose
            // add 1 to computerScore
            computerScore+=1;
            console.log("You lose! Rock beats Scissors.");
        }
    }
}
console.log(humanScore);
console.log("---")
console.log(computerScore);
playRound("rock", getComputerChoice());
console.log(humanScore);
console.log("---");
console.log(computerScore);