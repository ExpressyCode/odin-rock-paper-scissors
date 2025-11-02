function getComputerChoice() {
    // generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

console.log(getComputerChoice())
