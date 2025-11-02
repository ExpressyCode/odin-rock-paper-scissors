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

console.log(getComputerChoice())
