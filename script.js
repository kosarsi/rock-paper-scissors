function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else if (num == 2) {
        return "scissors"; 
    }
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("What is your choice: ").toLowerCase(); 
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt("Please enter a valid input: ").toLowerCase(); 
    }
    if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "rock") {
        return "win";
    } else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "scissors" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "scissors") {
        return "lose"; 
    } else {
        return "tie"; 
    }
}